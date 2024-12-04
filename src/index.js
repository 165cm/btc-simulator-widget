import React from 'react';
import { createRoot } from 'react-dom/client';
import BTCSimulator from './BTCSimulator';
import './styles.css';

// ウィジェットの初期化関数
const initWidget = (targetElement, options = {}) => {
  try {
    const root = createRoot(targetElement);
    root.render(
      <React.StrictMode>
        <BTCSimulator {...options} />
      </React.StrictMode>
    );
    return true;
  } catch (error) {
    console.error('Failed to initialize BTCSimulator:', error);
    return false;
  }
};

// 直接アクセス時の初期化
if (document.getElementById('btc-simulator')) {
  initWidget(document.getElementById('btc-simulator'));
}

// ウィジェットとしてエクスポート
const BTCSimulatorWidget = {
  init: initWidget
};

window.BTCSimulatorWidget = BTCSimulatorWidget;
export default BTCSimulatorWidget;