
var twoSum = function(nums, target) {
  // to solve this we should create a map which will create key value pairs that we subtract from the target and if there is a match then we will return the index of the values that add up to the target

  // define new map object
  const numsMap = new Map();

  // loop through the values and if not found we will add to the map to compare to the target - number later
  for (let i = 0; i < nums.length; i++) {

    // set a difference between the target and the current number
    const difference = target - nums[i];

    // checks if the map object has the difference value and returns it
    if (numsMap.has(difference)) {
      
      return [numsMap.get(difference), i];
    }
    // if it doesn't have the difference it will add to the map object to compare it later
    numsMap.set(nums[i], i);
  }
  // return empty array if no two number add up to the target number
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 1], 6));