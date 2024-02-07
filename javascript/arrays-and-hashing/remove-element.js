var removeElement = function(nums, val) {
    // return the array with val removed 

    let l = 0
    
    for (let r = 0; r < nums.length; r++) {

        // check if the right pointer value is not equal to val
        if (nums[r] !== val) {

            // left pointer value is changed to the right pointer value
            nums[l] = nums[r]
            l++
        }
    }
    
    return l
}

console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))