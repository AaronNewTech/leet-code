var pivotIndex = function(nums) {

    // get the index where left and right totals are equal

    // use the sum vs 0 and iterate to get the totals
    
    // initialize the left and right totals
    let leftTotal = 0
    let rightTotal = nums.reduce((sum, num) => sum + num, 0)

    for (let i = 0; i < nums.length; i++) {

        // subtract the current num from rightTotal
        rightTotal -= nums[i]

        // return pivot index
        if (leftTotal === rightTotal) {
            return i
        }

        // increase the leftTotal
        leftTotal += nums[i]
    }
    return -1
}

console.log(pivotIndex([1,7,3,6,5,6]))

console.log(pivotIndex([1,2,3]))

console.log(pivotIndex([2,1,-1]))