var longestOnes = function(nums, k) {

    // return the maximum ones in row that is possible
    // when k number of 0's are flipped to 1's

    // initialize return variable which is the max count of 1's in a row
    let maxCount = 0

    // initialize return helper variable that will assist in counting 
    let zerosCount = 0

    // initialize pointers for the sliding window data structure
    // these are both set at 0 because we don't need to set up
    // an initial while loop to define the size of the sliding window in this case
    let l = 0
    let r = 0

    // define loop to use which for sliding window we can use for or while loop
    // the while loop is easier to see where the r is incrementing but can also leave
    // comment where the for loop increments if it gets confusing
    while (r < nums.length) {

        // check for a 0 at right pointer and increase 0 count if there is
        if (nums[r] === 0) {
            zerosCount++
        }

        // shrink the window by moving left pointer if the number of 0's exceeds k number of 0's
        while (zerosCount > k) {

            // removes a 0 from the zeroCount if left pointer is on a 0
            if (nums[l] === 0) {
                zerosCount--
            }

            // move left pointer when the zeroCount exceeds the number k
            l++
        }

        // update the maxCount on every iteration of the outer while loop
        // the count is calculated by subtracting l from r and the + 1
        // because we need account for the number the left pointer is on as well
        maxCount = Math.max(maxCount, r - l + 1)

        // move the right pointer on every iteration
        r++
    }

    // return the maxCount remembering that the last variable that is the
    // return value can be a good first variable to initialize
    return maxCount
}

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))