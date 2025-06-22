import React, { useEffect, useState, useCallback } from "react";
import {
    GoogleMap,
    Marker,
    InfoWindow,
    useJsApiLoader,
} from "@react-google-maps/api";
import { fetchStations } from "../api/weather-station";
import Sidebar from "./Sidebar";

interface WeatherStation {
    id: number;
    ws_name: string;
    site: string;
    portfolio: string;
    state: string;
    latitude: number;
    longitude: number;
}

const containerStyle = {
    width: "100%",
    height: "100vh",
};

const center = { lat: -33.8688, lng: 151.2093 }; // For Sydney:
//const center = { lat: -37.8136, lng: 144.9631 }; For Melbourne:

const MapComponent: React.FC = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
    });

    const [stations, setStations] = useState<WeatherStation[]>([]);
    const [selectedStation, setSelectedStation] = useState<WeatherStation | null>(null);
    const [selectedState, setSelectedState] = useState<string | null>(null);

    const loadStations = useCallback(async () => {
        try {
            const data = await fetchStations();
            setStations(data);
        } catch (error) {
            console.error("Failed to fetch weather stations:", error);
        }
    }, []);

    useEffect(() => {
        loadStations();
    }, [loadStations]);

    const states = Array.from(new Set(stations.map((s) => s.state))).sort();

    const filteredStations = selectedState
        ? stations.filter((s) => s.state === selectedState)
        : stations;

    if (!isLoaded) return <div>Loading Map...</div>;

    return (
        <div style={{ display: "flex" }}>
            <Sidebar
                states={states}
                selectedState={selectedState}
                onSelectState={setSelectedState}
            />

            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
                {filteredStations.map((station) => (
                    <Marker
                        key={station.id}
                        position={{ lat: station.latitude, lng: station.longitude }}
                        onClick={() => setSelectedStation(station)}
                    />
                ))}

                {selectedStation && (
                    <InfoWindow
                        position={{
                            lat: selectedStation.latitude,
                            lng: selectedStation.longitude,
                        }}
                        onCloseClick={() => setSelectedStation(null)}
                    >
                        <div>
                            <h4>{selectedStation.ws_name}</h4>
                            <p><strong>Site:</strong> {selectedStation.site}</p>
                            <p><strong>Portfolio:</strong> {selectedStation.portfolio}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    );
};

export default React.memo(MapComponent);
