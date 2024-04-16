var increasingTriplet = function(nums) {
  
    // return true if there are 3 numbers in the array from left to right 
    // that increase in value

    // we solve this by assigning any number lower than the max number
    // to min1 and then min2 and if these are met then a higher number
    // is found the loop terminates returning true and if the loop 
    // completes without satisfying these conditions then it returns false

    // handles the edge case of array with less than 3 values
    if (nums.length < 3) return false

    // this is the maximum allowable int in javascript 
    let min1 = Number.MAX_SAFE_INTEGER
    let min2 = Number.MAX_SAFE_INTEGER

    // can also use Infinity
    // let min1 = Infinity
    // let min2 = Infinity
    
    // iterates using num of nums, num in nums will error out
    for (let num of nums) {

        // assigns the lowest value in array
        if (num <= min1) {
            min1 = num;
        } 
        
        // assigns the 2nd lowest value in array
        else if (num <= min2) {
            min2 = num;
        }

        // returns true if num is greater than the lower 2 numbers min1 and min2
        else return true
    }

    // return false if the loop completes without finding a number higher than min2
    return false
}

console.log(increasingTriplet([1,2,3,4,5]))

console.log(increasingTriplet([5,4,3,2,1]))

console.log(increasingTriplet([2,1,5,0,46]))