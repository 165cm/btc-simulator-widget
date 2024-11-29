import React from 'react';
import { createRoot } from 'react-dom/client';
import BTCSimulator from './BTCSimulator';
import './styles.css';

// アプリケーションのルートを初期化
const container = document.getElementById('btc-simulator');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BTCSimulator />
  </React.StrictMode>
);

// ウィジェットとしても使えるように公開
window.BTCSimulatorWidget = {
  init: (targetElement, options = {}) => {
    const root = createRoot(targetElement);
    root.render(<BTCSimulator {...options} />);
  }
};