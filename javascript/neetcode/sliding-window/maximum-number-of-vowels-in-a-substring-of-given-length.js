var maxVowels = function(s, k) {
    // return the maximum number of vowels in a substring with a length of k

    // more straight forward solution
    // set the array of vowels to check
    let vowels = ['a', 'e', 'i', 'o', 'u']
    
    let count = 0

    // loop to set the initial sliding window values which is k in length
    for (let i = 0; i < k; i++) {

        // increase count if the character is a vowel
        if (vowels.includes(s[i])) {
            count++
        }
    }
    
    let maxCount = count
    
    // loop to calculate the new count when the window slides and update if new count is greater than max count
    for (let i = k; i < s.length; i++) {

        // if the new s[i] value is a vowel increase the count
        if (vowels.includes(s[i])) {
            count++
        }

        // if the first character in the window is not a vowel decrease the count
        if (vowels.includes(s[i - k])) {
            count--
        }

        // check the max count
        maxCount = Math.max(maxCount, count)
        
        // k is the maxiumum bound for the return value so we check here an return otherwise return maxCount below
        if (maxCount >= k) {
            return k
        }
    }

    return maxCount

    // initialize vowels array, counters and sliding window pointers
    // let vowels = ['a', 'e', 'i', 'o', 'u']
    // let count = 0
    // let maxCount = 0
    // let l = 0
    // let r = 0

    // // loop through the string 
    // while (r < s.length) {

    //     // if char is a vowel increase the counter
    //    if (vowels.includes(s[r])) {
    //        count++
    //     }

    //     // move the sliding window if the window is greater than k
    //     if (r - l + 1 > k) {

    //         // change the vowel count if the left pointer value is a vowel
    //         if (vowels.includes(s[l])) {
    //             count--
    //         }
    //         l++
    //     }

    //     // update the maxCount
    //     maxCount = Math.max(maxCount, count)

    //     // because k is the largest possible number allowed return k if it reaches that value
    //     if (maxCount === k) {
    //         return k
    //     }

    //     // continue loop
    //     r++
    // }

    // return maxCount

    // alternate solution using for loop
    // let vowels = ['a', 'e', 'i', 'o', 'u'];
    // let maxCount = 0;
    // let start = 0;
    // let count = 0;
    // for (let end = 0; end < s.length; end++) {
    //     if (vowels.includes(s[end])) {
    //         count +=1;
    //     }
    //     if (end - start + 1 > k) {
    //         if(vowels.includes(s[start])) {
    //             count -=1;
    //         }
    //         start +=1;
    //     }
    //     maxCount = Math.max(maxCount, count)
    //     if (maxCount == k) return maxCount;
    // }
    // return maxCount;

};

console.log(maxVowels("abciiidef", 3))
console.log(maxVowels("aeiou", 2))
console.log(maxVowels("leetcode", 3))