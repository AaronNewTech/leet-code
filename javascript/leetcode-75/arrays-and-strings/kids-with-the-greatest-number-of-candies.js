var kidsWithCandies = function(candies, extraCandies) {

    // return true or false for kids that will have the greatest
    // number of candies or equal to the greatest if given the extra candies
    
    let max = Math.max(...candies)

    let arr = []

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            arr.push(true)
        }
        else {
            arr.push(false)
        }
    }

    // console.log(arr)
    return arr

}

console.log(kidsWithCandies([2,3,5,1,3], 3))

console.log(kidsWithCandies([4,2,1,1,2], 1))

console.log(kidsWithCandies([12,1,12], 10))