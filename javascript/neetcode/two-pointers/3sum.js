var threeSum = function(nums) {

  // instructions
  // return unique arrays with values that add up to 0 for example [0,0,0] and [-3,2,1]
  // tip sort the array to make this easier

  // initialize an empty array to store the result
  const res = [];

  // sort the input array in ascending order
  nums.sort((a, b) => a - b);

  // initialize the index i to 0
  let i = 0;
  // iterate through the elements in the array
  while (i < nums.length) {
    // get the current element a at index i
    const a = nums[i];

    // check for duplicate elements, skip if duplicate
    if (i > 0 && a === nums[i - 1]) {
      i++;
      continue;
    }

    // initialize two pointers, l and r
    let l = i + 1;
    let r = nums.length - 1;

    // use a two-pointer approach to find triplets
    while (l < r) {
      const threeSum = a + nums[l] + nums[r];
      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        // if a triplet is found, push it to the result array
        res.push([a, nums[l], nums[r]]);
        l++;
        // skip duplicate elements in the inner loop
        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
      }
    }

    // increment the outer loop index i
    i++;
  }

  // return the final result array
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));