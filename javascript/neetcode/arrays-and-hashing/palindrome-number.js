
var isPalindrome = function(x) {

    // instructions
    // check if a string is a valid palindrome by reversing the string and comparing to the input string

    // set up reverse array and convert number to string
    let rev = []
    x = x.toString()
   
    // loop to add numbers to reverse array
    for (let i = x.length; i >= 0; i--) {
        rev.push(x[i])
    }

    // remove commas from reverse array
    rev = rev.toString().replaceAll(',', '')

    // return true if valid palindrome and false if not
    return x === rev

    // another way to solve
    // y = x.toString().split("").reverse().join("")
    // x = x.toString()

    // return x == y
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))