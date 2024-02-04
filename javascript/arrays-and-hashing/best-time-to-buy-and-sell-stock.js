var maxProfit = function(prices) {
    let profit = 0
    let min = prices[0]

    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        profit = Math.max(profit, prices[i] - min)
    }
    return profit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // max profit is 5 if buy is on day 2 which the price is 1 and then sell on day 5 which the price is 6, 6 - 1 = 5
console.log(maxProfit([7, 6, 4, 3, 1])) // max profit is 0 because the price always decreases