var productExceptSelf = function(nums) {

    // get all of the nums except current and you cannot dividing

    // we can loop one direction then another to get the result

    // O(n) time complexity
    let result = [];
    let standIn = 1;
    
    // this work by going left to right to calculate the values then right to left

    // loop to calculate the left of self
    for (let i = 0; i < nums.length; i++) {

        // push current value to start which is 1 for the first value
        result.push(standIn);

        // calculations are everything to left cumulatively like this [ 1, 1, 2, 6 ]
        standIn *= nums[i];
    }
    
    standIn = 1;

    // calculate the product to the right of self
    for (let j = nums.length - 1; j >= 0; j--) {

        // calculations are everything to right cumulatively like this [ 24, 12, 8, 6 ]
        // which started from this [ 1, 1, 2, 6 ]
        result[j] *= standIn;

        // updates the standIn value to the current nums value
        standIn *= nums[j];
    }

    return result;

// // O(n^2) time complexity that is too slow to pass all leetcode checks
//     let result = new Array(nums.length).fill(1)

//     for (let i = 0; i < nums.length; i++) {
//         temp = nums[i]
//         nums[i] = 1
//         for (let j = 0; j < nums.length; j++) {
//             result[i] *= nums[j]
//         }
//         nums[i] = temp
//         // console.log(result)
//     }

//     return result
}

console.log(productExceptSelf([1,2,3,4]))

console.log(productExceptSelf([-1,1,0,-3,3]))