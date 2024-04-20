
var isSubsequence = function(s, t) {
    // instructions
    // return true if the char in s are found in t in order
    // use 2 pointers, one for each array s and t
    

    // better approach that is more efficient
    // for edge case that there is an empty string s = ""
    if(s.length === 0) return true

    // initialize pointers

    // l also serves as a counter for the substring characters
    //that are found
    let l = 0
    let r = 0

    // loop that will increment l when char is in substring
    while (r < t.length) {

        // character check increments l when character is found
        if (s[l] === t[r]) {
            l++
        }

        // returns true if all characters in s are found
        // in t in order
        if (s.length === l) return true
        r++
    }

    // if loop finishes without finding characters it is false
    return false
    
    // my solution

    // initialize pointers and result array
    // let result = []
    // let sPointer = 0
    // let tPointer = 0

    // // loop through each array and compare values
    // while (sPointer < s.length && tPointer < t.length) {

    //     // check if chars are found in both arrays
    //     if (s[sPointer] === t[tPointer]) {

    //         // push to result array if char is found
    //         result.push(true)

    //         // update pointer
    //         sPointer++
            
    //     }

    //     // update pointer
    //     tPointer++

    // }
    
    // // returns true if length of result is equal to length of s string
    // return result.length === s.length


    // optimized solution
    // if(s.length > t.length) return false;

    // let count = 0
    
    // for(let i = 0; i < t.length; i++) {
    //     if(s[count] === t[i]) {
    //         count++;
    //     }
    // }
    // return count === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"))

console.log(isSubsequence("axc", "ahbgdc"))