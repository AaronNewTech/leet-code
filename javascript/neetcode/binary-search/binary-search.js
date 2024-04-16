var search = function(nums, target) {
    // find the target's index and return it
    // use binary search to do this meaning find out
    // remember binary search is using 3 pointers low, mid, high
    // or left, mid, right

    // initialize low and mid pointers
    let low = 0
    let high = nums.length - 1
    
    // loop will terminate when low is equal to or greater than high
    while (low <= high) {

        // defines mid pointer
        let mid = Math.floor(low + (high - low) / 2)

        // checks if the target is equal to mid
        if (target === nums[mid]) {
            return mid
        }
            
        // checks if the target is less than mid
        else if (target < nums[mid]) {
            // reassigns high to be lower than mid
            high = mid - 1
        }
            
        else {
            // reassign low to be to be higher than mid           
            low = mid + 1
        }   
               
    }

    // if the target is not in the array then return -1
    return -1

        // other solution not using binary search
        // for (let i = 0; i < nums.length; i ++) {
        //     if (nums[i] === target) {
        //         return i
        //     }
        // }

        // return -1
}

console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 2))