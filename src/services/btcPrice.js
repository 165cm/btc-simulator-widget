// src/services/btcPrice.js
class BTCPriceService {
    constructor() {
      this.price = 15000000; // MVPフェーズでは1500万円で固定
    }
  
    async getPrice() {
      try {
        // MVPフェーズでは固定値を返す
        console.log('Returning fixed price for MVP:', this.price);
        return this.price;
      } catch (error) {
        console.error('Price fetch simulation error:', error);
        return this.price; // エラー時も固定値を返す
      }
    }
}
  
export const btcPriceService = new BTCPriceService();