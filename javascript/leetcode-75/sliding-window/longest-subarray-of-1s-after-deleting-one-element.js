var longestSubarray = function(nums) {
    // return the length of the longest uninterupted 1s after removing one element

    // if all numbers are 1's return the length - 1
    // it has to be length - 1 because we are required
    // to remove an element
    if (!nums.includes(0)) {
        return nums.length - 1
    }

    // store the maxCount that will be updated in the loop below
    let maxCount = 0

    // track 0's 
    let zeroCount = 0
    
    let l = 0
    let r = 0

    // the way the loops are set up if more than one 0 is found
    // it will resolve this by moving the left pointer until it finds a 1
    // and resets the zeroCount to 1 which is allowable
    while (r < nums.length) {

        // add 0 if found
        if (nums[r] === 0) {
            zeroCount++
        }
        
        // run loop if more that one 0 is found
        while (zeroCount > 1) {

            // remove 0 if 0 is found
            if (nums[l] === 0) {
                zeroCount--
            }
            
            l++
        }

        // calculate maxCount, in this code we don't need to + 1
        // because we are removing an element so the length is
        // to be always 1 shorter than the sliding window length
        maxCount = Math.max(maxCount, r - l)
        r++
    }

    return maxCount
}

console.log(longestSubarray([1,1,0,1]))

console.log(longestSubarray([0,1,1,1,0,1,1,0,1]))