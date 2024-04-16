var mergeAlternately = function(word1, word2) {

    // create a new string by alternating the characters for each word

    let length = 0

    // this gets the longer length of the 2 words
    if (word1.length >= word2.length) {
        length = word1.length
    } else {
        length = word2.length
    }


    let array = []

    // this loop poplautes the array alternating characters
    for (let i = 0; i < length; i++) {
        array.push(word1[i])
        array.push(word2[i])
    }

    // this converts the array into a string and replaces the commas
    let merged = array.toString().replaceAll(',', '')

    return merged
}


console.log(mergeAlternately("abc", "pqr"))

console.log(mergeAlternately("ab", "pqrs"))

console.log(mergeAlternately("abcd", "pq"))