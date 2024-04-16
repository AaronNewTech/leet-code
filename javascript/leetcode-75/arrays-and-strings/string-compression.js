var compress = function(chars) {

    // compress the string by formatting the char with the number of instances
    // example a2b4c3

    // problem is confusing and has an issue with the solution

    
    // initialize read and write pointers
    let read = 0
    let write = 0


    while (read < chars.length) {
        
        // initialize counter and current position
        let count = 0
        let curr = chars[read]

        // count char instances
        while (read < chars.length && chars[read] === curr) {
            read++
            count++
        }

        // write the chars and number of instances to write
        chars[write++] = curr
        if (count > 1) {

            // convert the counts to string and write to the chars array
            for (let num of count.toString()) {
                
                // writes the char amount in the char array if greater than 1 next to the char
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