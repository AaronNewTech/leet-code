var longestConsecutive = function(nums) {
    // use a hash table or set to store unique values

    // faster solution
    if (nums.length === 0 || nums.length === 1) return nums.length

    nums.sort((a, b) => a - b)
    
    let count = 1
    let maxCount = 1
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] + 1 === nums[i]) {
            count++
        }
        else if (nums[i -1] == nums[i]) {
            continue
        }
        else {
            count = 1
        }
        maxCount = Math.max(maxCount, count)
    }

    return maxCount

    // create a set that has only unique value
    // const numSet = new Set(nums)
    
    // // keep track of largest streak of consecutive
    // let maxCount = 0

    // // iterate though nums array
    // for (let num of nums) {

    //     // check that num - 1 doesn't exist means that
    //     // the number is the start in the sequence
    //     if (!numSet.has(num - 1)) {

    //         // currentNum is the start which in the first
    //         // test case is 100, 200 and 1 because there
    //         // is not 1 less than them in the set
    //         let currentNum = num

    //         // count starts at one becuase currentNum counts as 1
    //         let count = 1

    //         // loop until end of consecutive numbers
    //         while (numSet.has(currentNum + 1)) {

    //             // increments currentNum and count
    //             currentNum++
    //             count++
    //         }

    //         // check which number streak is the maximum
    //         maxCount = Math.max(maxCount, count)
    //     }
    // }

    // return maxCount

}

console.log(longestConsecutive([100,4,200,1,3,2]))

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
