var findDifference = function(nums1, nums2) {
    
    // make 2 sets to get rid of duplicates that are in each nums array
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    
    for (let i = 0; i < nums1.length; i++) {

        // check if nums1[i] in both sets and if it is delete it from both sets
        if (set1.has(nums1[i]) && set2.has(nums1[i])) {
            set1.delete(nums1[i])
            set2.delete(nums1[i])
        }
        
    }

    // format the result so that it is the correct return type
    let result1 = Array.from(set1).map(x => [x])
    let result2 = Array.from(set2).map(x => [x])

    return [result1, result2]

    // simpler method using built in functions
    // make 2 sets to get rid of duplicates that are in each nums array
    // let set1 = new Set(nums1)
    // let set2 = new Set(nums2)

    // // filter each set with the items not found in the other set
    // let result1 = [...set1].filter(item => !set2.has(item))
    // let result2 = [...set2].filter(item => !set1.has(item))
    
    // return [result1, result2]
}

console.log(findDifference([1, 2, 3], [2,4,6]))

console.log(findDifference([1,2,3,3], [1,1,2,2]))