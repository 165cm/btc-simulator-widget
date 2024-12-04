import React, { useState, useMemo } from 'react';
import { DollarSign, Coins, Landmark, Info } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './BTCSimulator.module.css';

const BTCSimulator = () => {
  // 定数
  const currentPrice = 15000000; // 現在のBTC価格
  const totalBTCSupply = 19_600_000; // BTCの総供給量

  // State
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [years, setYears] = useState(5);
  const [expectedPrice, setExpectedPrice] = useState(currentPrice * 2); // デフォルトで2倍
  const [showEmbedInfo, setShowEmbedInfo] = useState(false);

  // 時価総額計算
  const calculateMarketCap = (price) => {
    return (price * totalBTCSupply) / 150_000_000_000_000; // 円からドルへの換算も含む
  };

  // 市場規模比較データ
  const marketCapComparisons = [
    { name: 'NVIDIA', cap: 3.44, icon: DollarSign, color: '#76B900' },
    { name: '金（ゴールド）', cap: 13.3, icon: Coins, color: '#FFD700' },
    { name: 'Mag-7企業', cap: 16.42, icon: DollarSign, color: '#4285F4' },
    { name: 'S&P500', cap: 45.84, icon: Landmark, color: '#0A4595' }
  ];

// シミュレーション計算
const simulation = useMemo(() => {
  const totalMonths = years * 12;
  const multiplier = expectedPrice / currentPrice;
  const monthlyGrowthRate = Math.pow(multiplier, 1/totalMonths) - 1;
  
  const data = [];
  let totalBTC = 0;
  let totalInvestment = 0;
  
  for (let month = 0; month <= totalMonths; month++) {
    const price = currentPrice * Math.pow(1 + monthlyGrowthRate, month);
    if (month > 0) {
      totalBTC += monthlyInvestment / price;
      totalInvestment += monthlyInvestment;
    }
    
    // 1年ごとにデータポイントを生成
    if (month % 12 === 0) {
      data.push({
        year: 2025 + month / 12,
        価値: Math.round(totalBTC * price),
        投資額: totalInvestment
      });
    }
  }
  
  return {
    data,
    totalBTC,
    totalInvestment,
    finalValue: totalBTC * expectedPrice,
    roi: ((totalBTC * expectedPrice - totalInvestment) / totalInvestment * 100),
    expectedMarketCap: calculateMarketCap(expectedPrice)
  };
}, [monthlyInvestment, years, expectedPrice]);

  // 金額のフォーマット
  const formatCurrency = (value) => {
    if (value >= 100000000) {
      return `${Math.floor(value / 100000000)}億${Math.floor((value % 100000000) / 10000)}万円`;
    }
    return `${Math.floor(value / 10000)}万円`;
  };

  return (
    <div className={styles.container}>
      {/* ウィジェットフレーム */}
      <div className={styles.frame}>
        {/* コンテンツエリア */}
        <div className={styles.content}>
          {/* シミュレーション結果表示 */}
          <div className={styles.resultsSection}>
            <h2 className={styles.title}>ビットコイン積立シミュレーター</h2>
            <div className={styles.resultsGrid}>
              <div className={styles.resultItem}>
                <span className={styles.label}>総投資額</span>
                <span className={styles.value}>
                  {formatCurrency(simulation.totalInvestment)}
                </span>
              </div>
              <div className={styles.resultItem}>
                <span className={styles.label}>評価額</span>
                <span className={styles.value}>
                  約{formatCurrency(simulation.finalValue)}
                </span>
              </div>
              <div className={styles.resultItem}>
                <span className={styles.label}>取得BTC</span>
                <span className={`${styles.value} ${styles.mono}`}>
                  {simulation.totalBTC.toFixed(4)}
                </span>
              </div>
              <div className={styles.resultItem}>
                <span className={styles.label}>収益率</span>
                <span className={styles.value}>
                  {simulation.roi > 0 ? '+ ' : ''}{Math.round(simulation.roi)}%
                </span>
              </div>
            </div>
          </div>

          <div className={styles.controlsSection}>
            <div className={styles.sliderGroup}>
              {/* 積立投資額 */}
              <div className={styles.sliderControl}>
                <div className={styles.sliderHeader}>
                  <label className={styles.sliderLabel}>積立投資額(円)</label>
                  <span className={styles.sliderValue}>
                    {monthlyInvestment.toLocaleString()}円
                  </span>
                </div>
                <input
                  type="range"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(parseInt(e.target.value))}
                  min={5000}
                  max={100000}
                  step={5000}
                  className={styles.slider}
                />
              </div>

              {/* 積立期間 */}
              <div className={styles.sliderControl}>
                <div className={styles.sliderHeader}>
                  <label className={styles.sliderLabel}>積立期間</label>
                  <span className={styles.sliderValue}>
                    {years}年間（{2025 + years}年まで）
                  </span>
                </div>
                <input
                  type="range"
                  value={years}
                  onChange={(e) => setYears(parseInt(e.target.value))}
                  min={1}
                  max={10}
                  step={1}
                  className={styles.slider}
                />
              </div>

              {/* 予想BTC価格 */}
              <div className={styles.sliderControl}>
                <div className={styles.sliderHeader}>
                  <label className={styles.sliderLabel}>
                    予想BTC価格（現在の{(expectedPrice/currentPrice).toFixed(1)}倍）
                  </label>
                  <span className={styles.sliderValue}>
                    {formatCurrency(expectedPrice)}
                  </span>
                </div>
                <input
                  type="range"
                  value={expectedPrice}
                  onChange={(e) => setExpectedPrice(parseInt(e.target.value))}
                  min={currentPrice}
                  max={currentPrice * 20}
                  step={1000000}
                  className={styles.slider}
                />
              </div>
            </div>

            {/* グラフエリア */}
            <div className={styles.chartContainer}>
              <div className={styles.chart}>
                <ResponsiveContainer>
                  <LineChart data={simulation.data}>
                    <XAxis 
                      dataKey="year" 
                      tick={{ fontSize: 10 }}
                      tickFormatter={(value) => value.toString().slice(-2)}
                      ticks={simulation.data.map(d => d.year)}
                    />
                    <YAxis 
                      tick={{ fontSize: 10 }}
                      tickFormatter={(value) => `${Math.round(value/10000)}万`}
                    />
                    <Tooltip 
                      formatter={(value) => {
                        if (value >= 100000000) {
                          return [`${Math.floor(value / 100000000)}億${Math.floor((value % 100000000) / 10000)}万円`];
                        }
                        return [`${Math.round(value/10000)}万円`];
                      }}
                      labelFormatter={(label) => `${label}年`}
                    />
                    <Line type="monotone" dataKey="価値" stroke="#2563eb" strokeWidth={2} />
                    <Line type="monotone" dataKey="投資額" stroke="#9ca3af" strokeWidth={1} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* 時価総額比較 */}
          <div className={styles.marketCapSection}>
            <div className={styles.marketCapHeader}>
              <div className={styles.marketCapTitle}>時価総額比較</div>
              <div className={styles.marketCapValue}>
                予想: {simulation.expectedMarketCap.toFixed(1)}兆ドル
              </div>
            </div>
            <div className={styles.marketCapGrid}>
              {marketCapComparisons.map((item, index) => {
                const Icon = item.icon;
                const isExpectedInRange = simulation.expectedMarketCap <= item.cap && 
                  (index === 0 || simulation.expectedMarketCap > marketCapComparisons[index - 1].cap);
                
                return (
                  <div 
                    key={item.name}
                    className={`${styles.marketCapItem} ${isExpectedInRange ? styles.highlighted : ''}`}
                  >
                    <Icon className={styles.marketCapIcon} style={{ color: item.color }} />
                    <div className={styles.marketCapInfo}>
                      <div className={styles.marketCapName}>{item.name}</div>
                      <div className={styles.marketCapValue}>{item.cap}兆ドル</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

{/* 埋め込みコードモーダル */}
{showEmbedInfo && (
  <div className={styles.modal}>
    <div className={styles.modalContent}>
      <h3 className={styles.modalTitle}>ウィジェットの埋め込み方法</h3>
      
      <h4 className={styles.modalSubtitle}>HTML での埋め込み</h4>
      <div className={styles.codeBlockWrapper}>
        <pre className={styles.codeBlock}>
          <code>{`<!-- BTCシミュレーターウィジェット -->
<div style="width:100%; max-width:800px; margin:0 auto; background:#fff;">
  <link href="https://btc-simulator-widget.pages.dev/btc-simulator-widget.css" rel="stylesheet">
  <div id="btc-simulator" class="btc-simulator-widget"></div>
  <script src="https://btc-simulator-widget.pages.dev/btc-simulator-widget.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      if (window.BTCSimulatorWidget) {
        BTCSimulatorWidget.init(document.getElementById('btc-simulator'));
      }
    });
  </script>
</div>`}</code>
        </pre>
        <button 
          onClick={() => {
            navigator.clipboard.writeText(document.querySelector(`.${styles.codeBlock} code`).textContent);
          }}
          className={styles.copyButton}
          title="コードをコピー"
        >
          コピー
        </button>
      </div>

      <h4 className={styles.modalSubtitle}>WordPress での埋め込み</h4>
      <ol className={styles.modalList}>
        <li>ページの編集画面で「カスタムHTML」ブロックを追加</li>
        <li>上記のコードをブロックにコピー＆ペースト</li>
        <li>プレビューまたは公開して表示を確認</li>
      </ol>

      <button
        onClick={() => setShowEmbedInfo(false)}
        className={styles.modalButton}
      >
        閉じる
      </button>
    </div>
  </div>
)}
          
          {/* 注意書きとクレジット */}
          <div className={styles.footer}>
            <div className={styles.disclaimer}>
              ※ このシミュレーションは参考値です
            </div>
            <div className={styles.credit}>
              <a 
                href="https://www.nomadkazoku.com/bitcoin-jidou-tsumitate/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.creditLink}
              >
                Powered by ノマド家族 BTC自動積立「こつこつコイン」
              </a>
            </div>
            
            {/* Infoボタン */}
            <button
              onClick={() => setShowEmbedInfo(true)}
              className={styles.infoButton}
              title="埋め込みコードを表示"
            >
              <Info className={styles.infoIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTCSimulator;