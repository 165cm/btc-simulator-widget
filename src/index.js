import React from 'react';
import { createRoot } from 'react-dom/client';
import BTCSimulator from './BTCSimulator';
import './styles.css';

// DOMContentLoadedイベントを待つ
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('btc-simulator');
  
  // コンテナ要素が存在することを確認
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <BTCSimulator />
      </React.StrictMode>
    );
  } else {
    console.error('BTC Simulator container element not found');
  }
});

// ウィジェットとしても使えるように公開
window.BTCSimulatorWidget = {
  init: (targetElement, options = {}) => {
    if (!targetElement) {
      console.error('Target element is required for BTCSimulatorWidget initialization');
      return;
    }
    
    try {
      const root = createRoot(targetElement);
      root.render(<BTCSimulator {...options} />);
    } catch (error) {
      console.error('Failed to initialize BTCSimulatorWidget:', error);
    }
  }
};