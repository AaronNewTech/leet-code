var longestOnes = function(nums, k) {
    // return the maximum ones in row that can be done when k 0's are flipped to 1's

    // return nums length if no 0's in array and k === 0
    if (k === 0 && !nums.includes(0)) return nums.length

    let result = 0
    let l = 0
    let r = 0
    let zerosCount = 0

    while (r < nums.length) {

        // check for zero at right pointer
        if (nums[r] === 0) {
            zerosCount++
        }

        // shrink the window from the left pointer if the number of zeros exceeds k value
        while (zerosCount > k) {

            // removes a zero from the count
            if (nums[l] === 0) {
                zerosCount--
            }
            l++
        }

        // update result
        result = Math.max(result, r - l + 1)
        r++
    }

    return result
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))