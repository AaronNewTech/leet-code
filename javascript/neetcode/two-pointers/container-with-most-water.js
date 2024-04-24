
var maxArea = function (height) {

    // instructions
    // use the two pointers method to find and return the container with the most water.
    // need to multiply the min of 2 numbers * r - l

    // using 2 pointers find the with the most volume
    // formula is height of the lower of 2 bars times
    // distance from each other in the index
    // length * height that is the greatest is the result
    // the hard part of this algorithm is where to place
    // the pointers initially and what moves them
    // the answer is that they should be at either end
    // of the array and the trigger is that the lower valued
    // pointer should move one place, once you know this the
    // problem is easy

    // pointers
    let l = 0
    let r = height.length - 1

    // initialize volume values
    let currentVolume = 0
    let maxVolume = 0
    
    // loop for iterating from outside to the middle of the height array
    while (l < r) {
        
        // calculate the current volume
        currentVolume = Math.min(height[l], height[r]) * (r - l)
 
        // change the max volume if current volume is greater than max volume
        maxVolume = Math.max(currentVolume, maxVolume)

        // check to move the left pointer to the right 
        // if value is less than the right value
        if (height[l] < height[r]) {
            l++
        }

        // check to move the right pointer to the left 
        // if value is less than the left value
        else if (height[l] > height[r]) {
            r--
        }

        // move right pointer if the left and right pointer values are equal
        else {
            r--
        }

    }
    
    return maxVolume
};

console.log(maxArea(height = [1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))