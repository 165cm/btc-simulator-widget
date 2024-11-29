import React from 'react';
import { createRoot } from 'react-dom/client';
import BTCSimulator from './BTCSimulator';
import './styles.css';

// ウィジェットの初期化関数
const initBTCSimulator = (targetElement, options = {}) => {
  const root = createRoot(targetElement);
  root.render(<BTCSimulator {...options} />);
};

// グローバルオブジェクトとして公開
window.BTCSimulatorWidget = {
  init: initBTCSimulator
};

// モジュールとしてもエクスポート
export default initBTCSimulator;