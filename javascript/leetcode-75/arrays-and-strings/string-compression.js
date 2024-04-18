var compress = function(chars) {

    // compress the string by formatting the char with the number of instances
    // this must be done by manipulating the chars array

    // problem is confusing and has an issue with the solution that
    // must return the length of the manipulated chars array
    // and the chars must be changed to the expected output

    
    // initialize read and write pointers
    let read = 0
    let write = 0

    // loop 
    while (read < chars.length) {
        
        // initialize counter and current position
        // this allows us to interate here and not lose
        // our place of the read and write pointers
        let charCount = 0
        let currentChar = chars[read]

        // count character instances by checking if read pointer value is the same
        // as the current character
        while (read < chars.length && chars[read] === currentChar) {
            read++
            charCount++
        }

        // write the chars and number of instances to write
        chars[write++] = currentChar
        
        if (charCount > 1) {

            // convert the counts to string and write to the chars array
            for (let num of charCount.toString()) {
                
                // writes the char amount in the char array if greater than 1 
                // next to the character for instance if count is 3 ["a", "3",]
                chars[write++] = num
            }
        }
        
    }

    return write

    // solve this problem using a dictionary
    // initialize with 0 in each and then add to this each time
    // the char appears add 1 to the value for that key
    // use this code to add a new key: dict.push({ key: "keyName", value: "the value"})


    // let dict = {}

    // for (let i = 0; i < chars.length; i++) {
    //     if (!dict.hasOwnProperty(chars[i])) {
    //         dict[chars[i]] = 1
    //     } else {
    //         dict[chars[i]] += 1
    //     }
    // }

    // let result = []
    // for (let key in dict) {
    //     result.push(key)
    //     result.push(dict[key].toString())
    // }


    
    // // result = result.join('')

    // console.log(result)

    // return result.length.toString()

}



console.log(compress(["a","a","b","b","c","c","c"]))

console.log(compress(["a"]))

console.log(compress(["a","a","b","b","c","c","c"]))