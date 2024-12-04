import React from 'react';
import { createRoot } from 'react-dom/client';
import BTCSimulator from './BTCSimulator';
import './styles.css';

// スタンドアローンモードでの初期化
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('btc-simulator');
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <BTCSimulator />
      </React.StrictMode>
    );
  }
});

// ウィジェットとしてエクスポート
const BTCSimulatorWidget = {
  init: function(targetElement, options = {}) {
    if (typeof window.React === 'undefined' || typeof window.ReactDOM === 'undefined') {
      // React と ReactDOM の読み込み
      const loadScript = (src) => {
        return new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = src;
          script.crossOrigin = "anonymous";
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      };

      Promise.all([
        loadScript('https://unpkg.com/react@18/umd/react.production.min.js'),
        loadScript('https://unpkg.com/react-dom@18/umd/react-dom.production.min.js')
      ]).then(() => {
        this.renderWidget(targetElement, options);
      }).catch(error => {
        console.error('Failed to load dependencies:', error);
      });
    } else {
      this.renderWidget(targetElement, options);
    }
  },

  renderWidget: function(targetElement, options) {
    try {
      const root = createRoot(targetElement);
      root.render(
        <React.StrictMode>
          <BTCSimulator {...options} />
        </React.StrictMode>
      );
    } catch (error) {
      console.error('Failed to render BTCSimulator:', error);
    }
  }
};

// グローバルオブジェクトとして公開
window.BTCSimulatorWidget = BTCSimulatorWidget;

// ESモジュールとしてもエクスポート
export default BTCSimulatorWidget;