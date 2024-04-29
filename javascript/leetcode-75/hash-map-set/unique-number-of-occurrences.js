var uniqueOccurrences = function(arr) {

    // check if the occurances are the same or different

    // make a dictionary to count the occurances
    // make a set the check each value in the set if they are the same
    
    
    let dict = {}

    // loop to get the initial key value pairs for the array
    for (let i = 0; i < arr.length; i++) {

        // add the key and value to dict if not in dict
        if (!(arr[i] in dict)) {
            dict[arr[i]] = 1
        }

        // increase count when a key value pair has already been added
        else {
            dict[arr[i]] += 1
        }
    }

    // initialize set for occurrances
    let set = new Set()

    // loop over dictionary
    for (let key in dict) {

        // if set has the key that means there are values that are equal and not unique
        if (set.has(dict[key])) {
            return false
        }

        // adds the values to the set
        else {
            set.add(dict[key])
        }
    }

    return true
}

console.log(uniqueOccurrences([1,2,2,1,1,3]))

console.log(uniqueOccurrences([1,2]))

console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))