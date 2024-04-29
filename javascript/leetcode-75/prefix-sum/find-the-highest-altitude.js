var largestAltitude = function(gain) {

    // prefix sum is a mathematics technique to total numbers in an array
    
    // we use this to check the max altitude of the totals against the previous max

    let maxAltitude = 0
    let currentAltitude = 0

    for (let i = 0; i < gain.length; i++) {

        // add numbers to currentAltitude as we iterate through the array
        currentAltitude += gain[i]

        // get max altitude
        maxAltitude = Math.max(maxAltitude, currentAltitude)
    }

    return maxAltitude
}

console.log(largestAltitude([-5,1,5,0,-7]))

console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))