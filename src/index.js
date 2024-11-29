import './styles/tailwind.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import BTCSimulator from './components/BTCSimulator';

function mount(elementId, config = {}) {
    const container = document.getElementById(elementId);
    if (container) {
        try {
            const root = createRoot(container);
            root.render(
                <React.StrictMode>
                    <BTCSimulator {...config} />
                </React.StrictMode>
            );
            return true;
        } catch (error) {
            console.error('Error mounting BTCSimulator:', error);
            return false;
        }
    }
    return false;
}

if (typeof window !== 'undefined') {
    window.BTCSimulator = { mount };
}

export default { mount };