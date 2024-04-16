var maxProfit = function (prices) {
    // problem in my own words
    // find to best day to buy and sell stock and return the maximum profit possible

    // instructions
    // use Math javascript functions to find the the lowest and highest numbers in the array

    let l = 0
    let r = 1
    let profit = 0

    
    while (r < prices.length) {

        // moves left pointer to right pointer position if left value is greater than right value
        if (prices[l] > prices[r]) {
            l = r
        }
        
        // calculates profit
        profit = Math.max(profit, prices[r] - prices[l]) 
        r++
    }
    
    return profit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // max profit is 5 if buy is on day 2 which the price is 1 and then sell on day 5 which the price is 6, 6 - 1 = 5
console.log(maxProfit([7, 6, 4, 3, 1])) // max profit is 0 because the price always decreases