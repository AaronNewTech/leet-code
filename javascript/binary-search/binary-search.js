var search = function(nums, target) {
    
    let low = 0
    let high = nums.length - 1
    let mid = Math.floor((low + high)/2)
    while (low <= high) {
        
    if (target === nums[mid])
        return mid
    else if (target < nums[mid])
        high = mid - 1
    else                      
        low = mid + 1

    mid = Math.floor(low + (high - low) / 2);
    }
    return -1

    // other non binary search solution
    // for (let i = 0; i < nums.length; i ++) {
    //     if (nums[i] === target) {
    //         return i
    //     }
    // }

    // return -1
}

console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 2))