var reverseVowels = function(s) {


    // we need to reverse the vowels for a string
    // using 2 pointers we can switch the vowels at each pointer
    // by checking if they are included in the vowel string
    // to do this in javascript we need to split the string to an array
    // switch the vowels using 2 pointers then join the array to a string

    let l = 0
    let r = s.length - 1
    let vowels = "aeiouAEIOU"
    
    let arr = s.split('')

    while (l < r) {
        if (vowels.includes(arr[l]) && vowels.includes(arr[r])) {
            let temp = arr[l]
            arr[l] = arr[r]
            arr[r] = temp
            l++
            r--
        }
        else if (!vowels.includes(arr[l])) l++

        else if (!vowels.includes(arr[r])) r--
        
    }
    let result = arr.join('')

    return result

}

console.log(reverseVowels("hello"))

console.log(reverseVowels("leetcode"))