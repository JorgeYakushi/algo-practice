function maxProfit(prices: number[]): number {
  if (prices.length < 2) return 0;
  let min: number = prices[0];
  let profit: number = 0;
  for (let index: number = 1; index < prices.length; index++) {
    if (prices[index] > prices[index - 1]) {
      profit = Math.max(profit, prices[index] - min);
    } else {
      min = Math.min(min, prices[index]);
    }
  }
  return profit;
}

console.log(maxProfit([7, 2, 5, 3, 6, 4, 1, 6]));
