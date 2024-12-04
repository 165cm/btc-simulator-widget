import React from 'react';
import { createRoot } from 'react-dom/client';
import BTCSimulator from './BTCSimulator';
import './styles.css';

// 開発環境での自動初期化
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

// 開発環境では自動初期化を実行
if (process.env.NODE_ENV === 'development') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}

// 本番用のエクスポート
export default {
  init: (targetElement) => {
    if (targetElement) {
      const root = createRoot(targetElement);
      root.render(
        <React.StrictMode>
          <BTCSimulator />
        </React.StrictMode>
      );
    }
  }
};