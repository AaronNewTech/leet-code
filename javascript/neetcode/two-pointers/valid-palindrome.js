
const isPalindrome = (s) => {

    // instructions
    // return true if the input string's not letter charaters are remove and 
    // reversed is equal to the input string

    // this line takes a string a removes all non-alphanumeric values and coverts to lowercase
    console.log(s)
    s = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    console.log(s)
    // assign pointers
    l = 0
    r = s.length - 1

    // loop that will increase l and decrease r interating through the array
    while (l < r) {

        // checks if pointer values are not equal and returns false if not
        if (s[l] !== s[r]) {
            return false
        }
        l++
        r--
    }

    // if pointers check all chars and they match returns true
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))

console.log(isPalindrome("race a car"))

console.log(isPalindrome("race car"))

console.log(isPalindrome(" "))