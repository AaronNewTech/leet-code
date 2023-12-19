var groupAnagrams = function (strs) {
    // to solve this problem in the easiest and most straightforward way make a map for of each string then use the 
    const anagrams = new Map()

    for (let str in strs) {
        let sorted = str.split('').sort().join('')

        if (!anagrams.has(sorted)) {
            anagrams.set(sorted, [])
        }
        anagrams.get(sorted).push(str)
    }
    console.log(Array.from(anagrams.values()))
    return Array.from(anagrams.values())
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
groupAnagrams([""])
groupAnagrams(["a"])
