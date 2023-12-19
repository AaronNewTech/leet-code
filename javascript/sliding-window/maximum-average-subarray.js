var findMaxAverage = function(nums, k) {
    let maxSum = 0

    for (let i = 0; i < k; i++) {
        maxSum += nums[i]
    }

    let sum = maxSum

    for (let i = 1; i < nums.length - k + 1; i++) {
        sum -= nums[i - 1]
        sum += nums[i + k - 1]

        maxSum = Math.max(maxSum, sum)
    }

    return maxSum / k
};