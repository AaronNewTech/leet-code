var countGoodSubstrings = function(s) {
    let count = 0

    for (let i = 0; i < s.length - 2; i++) {
        const set = new Set([s[i], s[i + 1], s[i + 2]])
      
        if (set.size === 3) {
            count++
        }
    }
    return count
};

console.log(countGoodSubstrings("xyzzaz"))
console.log(countGoodSubstrings("aababcabc"))