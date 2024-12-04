import React from 'react';
import { createRoot } from 'react-dom/client';
import BTCSimulator from './BTCSimulator';
import './styles.css';

// スタンドアロンモードの初期化
const container = document.getElementById('btc-simulator');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <BTCSimulator />
    </React.StrictMode>
  );
}

// ウィジェットとしてエクスポート
const BTCSimulatorWidget = {
  init: function(targetElement, options = {}) {
    const root = createRoot(targetElement);
    root.render(
      <React.StrictMode>
        <BTCSimulator {...options} />
      </React.StrictMode>
    );
  }
};

// グローバルオブジェクトとしても公開
window.BTCSimulatorWidget = BTCSimulatorWidget;
export default BTCSimulatorWidget;