# BTCシミュレーター ウィジェット

ビットコインの積立投資シミュレーションを行えるウィジェットです。

## 特徴
- 月間投資額のカスタマイズ
- 積立期間の設定
- BTC価格予想の調整
- 時価総額の視覚的比較
- レスポンシブ対応

## 設置方法

1. 以下のコードをあなたのウェブサイトに貼り付けてください：

```html
<!-- BTCシミュレーター ウィジェット -->
<div id="btc-simulator"></div>
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://yourusername.github.io/btc-simulator-widget/widget.js"></script>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2/dist/tailwind.min.css" rel="stylesheet">
<script>
  BTCSimulator.mount('btc-simulator');
</script>
<small>Powered by <a href="https://www.nomadkazoku.com/bitcoin-jidou-tsumitate/">BTCシミュレーター</a></small>
```

2. 必要に応じて、以下のようにカスタマイズオプションを設定できます：

```javascript
BTCSimulator.mount('btc-simulator', {
  theme: 'light',          // light/dark
  initialInvestment: 10000 // 初期投資額
});
```

## ローカル開発

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# GitHub Pagesへのデプロイ
npm run deploy
```

## ライセンス
MIT License

## サポート
不具合や要望がありましたら、GitHubのIssuesに投稿してください。