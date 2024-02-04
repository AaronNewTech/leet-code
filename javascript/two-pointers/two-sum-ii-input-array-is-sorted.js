
var twoSum = (numbers, target) => {

    // instructions
    // return the array indices of the numbers that add up to target using two pointers

    // assign pointers
    let l = 0
    let r = numbers.length - 1

    // loop that iterates to the middle of array
    while (l < r) {

        // checks if the pointer values are greater than target and moves
        // the right pointer to the left if they are
        if (numbers[l] + numbers[r] > target) {
            r--
        }
        // checks if the pointer values are less than target and moves
        // the left pointer to the right if they are
        else if (numbers[l] + numbers[r] < target) {
            l++
        }
        // if the pointer values are not greater or less than the target
        // it returns the pointer coordinates which are each indice + 1
        else {
            return [l + 1, r + 1]
        }
    }
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,3,4], 6))
console.log(twoSum([-1, 0], -1))