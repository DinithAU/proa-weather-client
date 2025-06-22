const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export async function fetchStations(state?: string) {
    const query = state ? `?state=${state}` : '';
    const res = await fetch(`${API_URL}/weather-stations${query}`);
    if (!res.ok) throw new Error('Failed to fetch weather stations');
    return await res.json();
}

export async function fetchStationDetails(id: number) {
    const res = await fetch(`${API_URL}/weather-stations/${id}`);
    if (!res.ok) throw new Error('Failed to fetch the weather station');
    return await res.json();
}
