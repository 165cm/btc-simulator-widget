import React from 'react';
import { createRoot } from 'react-dom/client';
import BTCSimulator from './BTCSimulator';
import './styles.css';

// Wait for DOM to be ready
const init = () => {
  const container = document.getElementById('btc-simulator');
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <BTCSimulator />
      </React.StrictMode>
    );
  }
};

// Export for widget usage
window.BTCSimulatorWidget = {
  init: (targetElement) => {
    if (targetElement) {
      const root = createRoot(targetElement);
      root.render(<BTCSimulator />);
    }
  }
};

// Auto initialize if DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}