var lengthOfLongestSubstring = function(s) {
    // return the length of the longest sequence of chars that doesn't repeat
    // make a dictionary and store each string then return the length

    // instructions 
    // make an empty set to store substrings
    // initialize sliding window pointers and max length variable
    // set while loop to stop when r pointer stops at string length
    // add to char to set if not in set
    // increase r by 1 and calculate max length
    // remove char if it is in the set and increase l += 1

    let charSet = new Set();
    let maxLength = 0;
    let l = 0;
    let r = 0;

    while (r < s.length) {
        if (!charSet.has(s[r])) {
            charSet.add(s[r]) 
            r++
            maxLength = Math.max(maxLength, r - l)
        }
        else {
            charSet.delete(s[l])
            l++
        }
    }
    
    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))