var removeDuplicates = function(nums) {
    // return the array with duplicates removed

    // initialize the result counter
    let counter = 1;

    // loop to interate over the array
    for(let i = 1; i < nums.length; i++ ) {
        
        // checks the current number against the previous one
        if(nums[i] !== nums[i-1]) {

            // updates the current nums i position with counter position
            nums[counter] = nums[i];
            counter++;
            
        }
        
    }
    
    return counter;
}

console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))