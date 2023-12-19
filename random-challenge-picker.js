function randomChallenge(items) {
    let random = items[Math.floor(Math.random()*items.length)]
    console.log("*** Complete the challege: ", random, "***")
    return random
}

let items = ["contains-duplicates", "two-sum", "valid-anagram"]

randomChallenge(items)