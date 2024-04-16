var characterReplacement = function(s, k) {
    // find out the longest substring length that we can return with k number of replacements

    // to do this we need to set up a dictionary with the number of each char in the string
    // check if each window is valid r - l <= k meaning can we replace these chars and 
    // not run out of k replacements

    // initialize dictionary, result and pointers
    let charDict = {}
    let result = 0
    let l = 0
    let r = 0

    // outer loop stops when right pointer reaches the end of s
    while (r < s.length) {

        // increments the char count by 1
        charDict[s[r]] = 1 + (charDict[s[r]] || 0)

        // inner loop adjusts the window size by moving the right pointer
        while ((r - l + 1) - Math.max(...Object.values(charDict)) > k) {

            // decreases the char count when left pointer moves right
            charDict[s[l]] -= 1
            l++
        }
        // updates result by checking the window size 2 for example is 1 - 0 + 1 = 2 
        result = Math.max(result, r - l + 1)
        r++
    }
    return result

};

console.log(characterReplacement("ABAB", 2))
console.log(characterReplacement("AABABBA", 1))