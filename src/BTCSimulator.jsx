import React, { useState, useMemo } from 'react';
import { DollarSign, Coins, Landmark, Info } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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
    <div className="w-full max-w-3xl mx-auto">
      {/* ウィジェットフレーム */}
      <div className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-xl shadow-lg overflow-hidden">
        {/* コンテンツエリア */}
        <div className="p-1">
          <div className="bg-white rounded-lg">
            {/* シミュレーション結果表示 */}
            <div className="p-4 border-b">
              <div className="text-lg font-bold mb-3">ビットコイン積立シミュレーター</div>
              <div className="bg-gray-50 p-3 rounded">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600">総投資額</span>
                    <span className="text-sm font-bold ml-2">
                      {formatCurrency(simulation.totalInvestment)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600">評価額</span>
                    <span className="text-sm font-bold ml-2">
                      約{formatCurrency(simulation.finalValue)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600">取得BTC</span>
                    <span className="text-sm font-mono font-bold ml-2">
                      {simulation.totalBTC.toFixed(4)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600">収益率</span>
                    <span className="text-sm font-bold ml-2">
                      {simulation.roi > 0 ? '+ ' : ''}{Math.round(simulation.roi)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start p-4 gap-4">
              <div className="md:w-2/5 space-y-3">
                {/* 積立投資額 */}
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">積立投資額(円)</label>
                    <span className="text-xs text-gray-600">
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
                    className="w-full"
                  />
                </div>

            {/* 積立期間 */}
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">積立期間</label>
                <span className="text-xs text-gray-600">{years}年間（{2025 + years}年まで）</span>
              </div>
              <input
                type="range"
                value={years}
                onChange={(e) => setYears(parseInt(e.target.value))}
                min={1}
                max={10}
                step={1}
                className="w-full"
              />
            </div>

                {/* 予想BTC価格 */}
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">
                      予想BTC価格（現在の{(expectedPrice/currentPrice).toFixed(1)}倍）
                    </label>
                    <span className="text-xs text-gray-600">
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
                    className="w-full"
                  />
                </div>
              </div>

              {/* グラフエリア */}
              <div className="md:w-3/5">
                <div className="h-40">
                  <ResponsiveContainer>
                    <LineChart data={simulation.data}>
                      <XAxis 
                        dataKey="year" 
                        tick={{ fontSize: 10 }}
                        tickFormatter={(value) => value.toString().slice(-2)}
                        ticks={simulation.data.map(d => d.year)} // すべての年を表示
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
            <div className="p-3 bg-blue-50 mx-4 mb-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium">時価総額比較</div>
                <div className="text-xs text-blue-600">
                  予想: {simulation.expectedMarketCap.toFixed(1)}兆ドル
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {marketCapComparisons.map((item, index) => {
                  const Icon = item.icon;
                  const isExpectedInRange = simulation.expectedMarketCap <= item.cap && 
                    (index === 0 || simulation.expectedMarketCap > marketCapComparisons[index - 1].cap);
                  
                  return (
                    <div 
                      key={item.name}
                      className={`flex items-center p-1.5 rounded ${isExpectedInRange ? 'bg-blue-100' : ''}`}
                    >
                      <Icon className="w-4 h-4 mr-1.5" style={{ color: item.color }} />
                      <div className="min-w-0">
                        <div className="text-sm truncate">{item.name}</div>
                        <div className="text-xs text-gray-600">{item.cap}兆ドル</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 埋め込みコードモーダル */}
            {showEmbedInfo && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
                  <h3 className="text-lg font-bold mb-4">ウィジェットの埋め込み方法</h3>
                  
                  {/* 通常の埋め込みコード */}
                  <h4 className="text-md font-semibold mb-2">HTML での埋め込み</h4>
                  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
                    {`<!-- BTCシミュレーターウィジェット -->
<link href="https://btc-simulator-widget.pages.dev/btc-simulator-widget.css" rel="stylesheet">
<div id="btc-simulator" class="btc-simulator-widget"></div>
<script src="https://btc-simulator-widget.pages.dev/btc-simulator-widget.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    if (window.BTCSimulatorWidget) {
      BTCSimulatorWidget.init(document.getElementById('btc-simulator'));
    }
  });
</script>`}
                  </pre>

                  {/* WordPress向けの説明 */}
                  <h4 className="text-md font-semibold mb-2">WordPress での埋め込み</h4>
                  <ol className="list-decimal list-inside mb-4 text-sm space-y-2">
                    <li>投稿/固定ページの編集画面で「カスタムHTML」ブロックを追加</li>
                    <li>上記のコードをブロックにコピー＆ペースト</li>
                    <li>プレビューまたは公開して表示を確認</li>
                  </ol>

                  <button
                    onClick={() => setShowEmbedInfo(false)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                  >
                    閉じる
                  </button>
                </div>
              </div>
            )}

            {/* 注意書きとクレジット */}
            <div className="border-t relative">
              <div className="p-2 text-xs text-gray-500 text-center">
                ※ このシミュレーションは参考値です
              </div>
              {/* PoweredByは中央揃えのまま */}
              <div className="px-2 pb-2 text-xs text-center">
                <a 
                  href="https://www.nomadkazoku.com/bitcoin-jidou-tsumitate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                >
                  Powered by ノマド家族 BTC自動積立「こつこつコイン」
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Infoボタンを絶対位置で右下に配置 */}
              <button
                onClick={() => setShowEmbedInfo(true)}
                className="absolute bottom-2 right-2 text-blue-600 hover:text-blue-700 bg-transparent border-none"
                title="埋め込みコードを表示"
                style={{ outline: 'none', boxShadow: 'none' }}
              >
                <Info className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTCSimulator;