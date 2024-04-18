var moveZeroes = function(nums) {
    
    // use the 2 pointers method to move the zeros to
    // the end of the array


    // initialize pointers
    let l = 0
    let r = 1

    while (r < nums.length) {

        // check is pointers have 0 and non zero to switch
        if (nums[l] === 0 && nums[r] !== 0) {

            // temp to store nums[l] so we don't overwrite 
            let temp = nums[l]

            // swap value of l for value of r
            nums[l] = nums[r]

            // swap value of r for value of l
            nums[r] = temp

            // move l pointer one space
            l++
        }

        // move l pointer is not at a zero value
        if (nums[l] !== 0) {
            l++
        }

        // move r pointer regardless of what else happens
        r++
        
    }

    // return the manipulated array
    return nums
}

console.log(moveZeroes([0,1,0,3,12]))

console.log(moveZeroes([0]))

console.log(moveZeroes([0,1,0,1,0,1,0,1,0,1,1,1,1,1,1]))
