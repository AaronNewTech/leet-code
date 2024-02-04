
const isPalindrome = (s) => {
    // return true if the input string's not letter charaters are remove and 
    // reversed is equal to the input string

    // this line takes a string a removes all non-alphanumeric values and coverts to lowercase
    s = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    
    // assign pointers
    l = 0
    r = s.length - 1

    // loop that will increase l and decrease r interating through the array
    while (r >= l) {

        // checks if pointer values are not equal and returns false if not
        if (s[r] !== s[l]) {
            console.log(false)
            return false
        }
        r--
        l++
    }

    // if pointers check all chars and they match returns true
    console.log(true)
    return true
};

isPalindrome("A man, a plan, a canal: Panama")
isPalindrome("race a car")
isPalindrome("race car")
isPalindrome(" ")