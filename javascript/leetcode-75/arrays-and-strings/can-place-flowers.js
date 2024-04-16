var canPlaceFlowers = function(flowerbed, n) {

    // we need to check the flowers in a 0 where there are 0s adjacent
    // check in the following way 0 && flowerbed[i - 1] && flowerbed[i + 1]


    // for loop to check values in flowebed array
    for (let i = 0; i < flowerbed.length; i++) {

        // check if a space is free for plant / if current space is 0 and before and after not 1
        if (flowerbed[i] === 0 
            && flowerbed[i - 1] !== 1 
            && flowerbed[i + 1] !== 1) { 
            // subtract from number of unplanted plants
            n--
            // update flowerbed array to show plant is occupying this space
            flowerbed[i] = 1
        }
    }

    // check if plants are all planted return true or false
    return n <= 0
}

console.log(canPlaceFlowers([1,0,0,0,1], 1))

console.log(canPlaceFlowers([1,0,0,0,1], 2))