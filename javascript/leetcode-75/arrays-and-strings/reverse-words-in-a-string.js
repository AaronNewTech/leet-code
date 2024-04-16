var reverseWords = function(s) {



    // reverse the order of strings in a array
    // easiest way is to make an array and reverse it
    // make sure to remove the extra spaces from the string

    // solve this using 2 pointers method

    // if you don't the spaces for the result remove them at the beginning
    // we can add a space between words at the end
    let words = s.trim().split(/\s+/)

    // initialize pointers
    let l = 0
    let r = words.length - 1

    // loop through the words array
    while (l < r) {

        // store the words[l] in temp so we don't lose it 
        // to assign to words[r] later
        let temp = words[l]

        words[l] = words[r]

        words[r] = temp

        l++
        r--
    }

    // join words array to make the result string
    let result = words.join(' ')

    return result



    // brute force method
    // // splits the string into an array
    // s = s.split(' ')

    // // reverses the array
    // .reverse()

    // // joins the array into a string
    // .join(" ")
    
    // // replaces mulitple spaces with one space
    // .replace(/\s+/g, ' ')
    
    // // trims spaces from the ends of the string
    // .trim()

    // return s

}

console.log(reverseWords("the sky is blue"))

console.log(reverseWords("  hello world  "))

console.log(reverseWords("a good   example"))