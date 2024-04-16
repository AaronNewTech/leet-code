var gcdOfStrings = function(str1, str2) {

    // find a common substring of str1 and str2
    // some background to help solve this problem
    // look for a common denominator in the code
    // this will help find the substring
    
    // check if the strings combined are the same
    if (str1 + str2 !== str2 + str1) return "None"
    
    
    // loop through strings and if each string modulo equals 0 we have our substring
    // this will always be the lowest common denominator
    // for instance str1 = "ABABABABAB" % 2 = 0 and str2 = "ABAB" % 2 = 0 
    // the substring is 0 through 2
    for (let i = str2.length; i >= 0; i--) {
        // console.log(str1.length % i === 0, str2.length % i === 0)
        if (str1.length % i === 0 && str2.length % i === 0) return str1.substring(0, i)
    }
}

console.log(gcdOfStrings("ABCABC", "ABC"))

console.log(gcdOfStrings("ABABAB", "ABAB"))

console.log(gcdOfStrings("LEET", "CODE"))
