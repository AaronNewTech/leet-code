var maxProfit = function(prices) {
    // problem in my own words
    // find to best day to buy and sell stock and return the maximum profit possible

    // instructions
    // use Math javascript functions to find the the lowest and highest numbers in the array

    // initialize profit and minimum price variables
    let profit = 0
    let min = prices[0]

    // loop for interating through prices array to find min price
    for (let i = 1; i < prices.length; i++) {

        // updates the min price if a lower one is found
        min = Math.min(min, prices[i])

        // updates the profit if current price minus min is greater than existing profit
        profit = Math.max(profit, prices[i] - min)
    }

    return profit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // max profit is 5 if buy is on day 2 which the price is 1 and then sell on day 5 which the price is 6, 6 - 1 = 5
console.log(maxProfit([7, 6, 4, 3, 1])) // max profit is 0 because the price always decreases