import React from 'react';
import { createRoot } from 'react-dom/client';
import BTCSimulator from './components/BTCSimulator';

// ウィジェットのマウント関数
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

// グローバルオブジェクトとして公開
if (typeof window !== 'undefined') {
    window.BTCSimulator = { mount };
}

export default { mount };