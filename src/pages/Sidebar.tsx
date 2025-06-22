// Sidebar.tsx
import React from "react";

interface SidebarProps {
    states: string[] | null;
    selectedState: string | null;
    onSelectState: (state: string | null) => void; // rename onFilter to match actual usage
}

const Sidebar: React.FC<SidebarProps> = ({ states, selectedState, onSelectState }) => {
    return (
        <div style={{ width: "200px", padding: "10px", background: "#f0f0f0" }}>
            <h4>Filter by State</h4>
            <button onClick={() => onSelectState(null)} style={{ display: 'block', marginBottom: '5px' }}>
                All States
            </button>
            {states && states.map((state) => (
                <button
                    key={state}
                    onClick={() => onSelectState(state)}
                    style={{
                        display: 'block',
                        fontWeight: state === selectedState ? 'bold' : 'normal',
                        marginBottom: '5px'
                    }}
                >
                    {state}
                </button>
            ))}
        </div>
    );
};

export default Sidebar;
