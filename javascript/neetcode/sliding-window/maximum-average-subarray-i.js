var findMaxAverage = function(nums, k) {
    // instructions
    // return the largest possible average for a subarray with a length of k
    // tip: don't forget that we can start with values in our sliding window
    // we are doing that in this problem

    // the key to this problem is to find the maximum sum
    let maxSum = 0

    // loop to set the initial sliding window values which is k in length
    for (let i = 0; i < k; i++) {
        maxSum += nums[i]
    }

    // temp variable that can hold the next sum when the window slides
    let newSum = maxSum

    // loop to calculate the new sum when the window slides and update if new sum is greater than max sum
    for (let i = k; i < nums.length; i++) {

        // calculate the new sum to check against 
        newSum = newSum - nums[i - k] + nums[i]

        // update max sum comparing max sum and new sum
        maxSum = Math.max(maxSum, newSum)
    }

    // calculate average of max sum
    return maxSum / k
}

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
console.log(findMaxAverage([5], 1))
console.log(findMaxAverage([1,2,3,4,5,6,7,8,9,10], 5))
console.log(findMaxAverage([0,4,0,3,2], 1))