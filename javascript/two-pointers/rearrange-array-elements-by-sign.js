var rearrangeArray = function(nums) {
    // return the nums array values in alternating positive and negative order by shifting numbers
    

    let result = []
    let pos = 0
    let neg = 1

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result[pos] = nums[i]
            pos += 2
        }
        else {
            result[neg] = nums[i]
            neg += 2
        }
        
    }
    return result

    // alternate solution without 2 pointers
    // let positives = nums.filter(x => x >= 0)
    // let negatives = nums.filter(x => x < 0)
    // let sorted = []
    // for (let i = 0; i < negatives.length; i++) {
    //     sorted.push(positives[i])
    //     sorted.push(negatives[i])
    // }

    // return sorted
};

console.log(rearrangeArray([3,1,-2,-5,2,-4]))
console.log(rearrangeArray([-1,1]))