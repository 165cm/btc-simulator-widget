import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Landmark, DollarSign, Coins, ExternalLink } from 'lucide-react';

// スタンドアロン版のためにCardコンポーネントを簡略化
const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="p-4 border-b">{children}</div>
);

const CardTitle = ({ children }) => (
  <h2 className="text-lg md:text-xl font-bold">{children}</h2>
);

const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);

// スライダーコンポーネントの簡略化
const Slider = ({ value, onValueChange, min, max, step }) => (
  <input
    type="range"
    value={value}
    onChange={(e) => onValueChange([parseInt(e.target.value)])}
    min={min}
    max={max}
    step={step}
    className="w-full"
  />
);

const BTCSimulator = () => {
  // 初期値の設定
  const [currentPrice, setCurrentPrice] = useState(15000000);
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [years, setYears] = useState(15);
  const [expectedPrice, setExpectedPrice] = useState(15000000 * 3);

  // 市場規模比較データ
  const marketCapComparisons = [
    { name: 'NVIDIA', cap: 3.44, icon: DollarSign, color: '#76B900' },
    { name: '金（ゴールド）', cap: 13.3, icon: Coins, color: '#FFD700' },
    { name: 'Mag-7企業', cap: 16.42, icon: DollarSign, color: '#4285F4' },
    { name: 'S&P500', cap: 45.84, icon: Landmark, color: '#0A4595' }
  ];

  const calculateMarketCap = (price) => {
    const totalBTC = 19_600_000;
    return (price / 150) * totalBTC / 1_000_000_000_000;
  };

  const currentMarketCap = calculateMarketCap(currentPrice);
  const expectedMarketCap = calculateMarketCap(expectedPrice);

  const calculateSimulation = () => {
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
      roi: ((totalBTC * expectedPrice - totalInvestment) / totalInvestment * 100)
    };
  };

  const simulation = calculateSimulation();

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>ビットコイン積立シミュレーター</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 md:space-y-6">
          {/* 入力フォーム */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">月間投資額（円）</label>
              <select 
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full p-2 border rounded text-base md:text-sm"
              >
                <option value={5000}>5,000円</option>
                <option value={10000}>10,000円</option>
                <option value={30000}>30,000円</option>
                <option value={50000}>50,000円</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">積立期間</label>
              <div className="px-2">
                <Slider 
                  value={[years]}
                  onValueChange={(value) => setYears(value[0])}
                  max={30}
                  min={5}
                  step={5}
                  className="my-4"
                />
                <div className="text-center text-sm">{years}年間（{2025 + years}年まで）</div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                予想BTC価格（現在の{Math.round((expectedPrice/currentPrice) * 10) / 10}倍）
              </label>
              <div className="px-2">
                <Slider 
                  value={[expectedPrice]}
                  onValueChange={(value) => setExpectedPrice(Math.round(value / 1000000) * 1000000)}
                  max={currentPrice * 20}
                  min={currentPrice}
                  step={1000000}
                  className="my-4"
                />
                <div className="text-center text-sm">
                  {expectedPrice >= 100000000 
                    ? `${Math.floor(expectedPrice / 100000000)}億${Math.floor((expectedPrice % 100000000) / 10000)}万円`
                    : `${Math.round(expectedPrice).toLocaleString()}円`
                  }
                </div>
              </div>
            </div>
          </div>

          {/* 市場規模比較（レスポンシブ対応） */}
          <div className="bg-blue-50 p-3 md:p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium">時価総額比較</h3>
              <div className="text-xs text-blue-600">
                予想: {expectedMarketCap.toFixed(1)}兆ドル
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {marketCapComparisons.map((item, index) => {
                const Icon = item.icon;
                const isExpectedInRange = expectedMarketCap <= item.cap && 
                  (index === 0 || expectedMarketCap > marketCapComparisons[index - 1].cap);
                
                return (
                  <div 
                    key={item.name}
                    className={`flex items-center p-1.5 rounded ${isExpectedInRange ? 'bg-blue-100' : ''}`}
                  >
                    <Icon style={{ color: item.color }} className="w-4 h-4 mr-1.5" />
                    <div className="min-w-0">
                      <div className="text-sm truncate">{item.name}</div>
                      <div className="text-xs text-gray-600">{item.cap}兆ドル</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* シミュレーション結果 */}
          <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
            <h3 className="text-sm font-medium mb-3">シミュレーション結果</h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <div className="text-xs text-gray-600">総投資額</div>
                <div className="text-sm font-medium">{Math.round(simulation.totalInvestment).toLocaleString()}円</div>
              </div>
              <div>
                <div className="text-xs text-gray-600">最終評価額</div>
                <div className="text-sm font-medium">{Math.round(simulation.finalValue).toLocaleString()}円</div>
              </div>
              <div>
                <div className="text-xs text-gray-600">取得BTC数</div>
                <div className="text-sm font-medium">{simulation.totalBTC.toFixed(8)} BTC</div>
              </div>
              <div>
                <div className="text-xs text-gray-600">投資収益率</div>
                <div className="text-sm font-medium">{Math.round(simulation.roi)}%</div>
              </div>
            </div>

            <div className="h-48 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={simulation.data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                  <XAxis 
                    dataKey="year" 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => value.toString().slice(-2)}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => {
                      if (value >= 100000000) {
                        return `${Math.floor(value / 10000)}万`;
                      }
                      return `${Math.round(value/10000)}万`;
                    }}
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
                  <Line type="monotone" dataKey="価値" stroke="#2563eb" name="評価額" strokeWidth={2} />
                  <Line type="monotone" dataKey="投資額" stroke="#9ca3af" name="投資額" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* フッター部分 */}
          <div className="text-center space-y-2">
            <div className="text-xs text-gray-500">
              ※ このシミュレーションは参考値です。実際の投資成果を保証するものではありません。
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BTCSimulator;