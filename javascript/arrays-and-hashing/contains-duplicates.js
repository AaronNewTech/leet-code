var containsDuplicate = function(nums) {
    
    // creates a new set that contains only unique values when added
    const set = new Set();

    // checks if the set contains duplicate values, if not it will add them to the set

    // loop through the array of nums using the 
    for (let num of nums) {
        // checks num against set, if set contains a duplicate value then it will return true
        if (set.has(num)) {
            return true;
        }
        // if number is unique then it will add it to the set to be checked later
        set.add(num);
    }

    // returns false if array has no duplicate values
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))