var isAnagram = function(s, t) {
    // the easiest and more straightforward way to solve this is to sort in alphabetical order then compare the 2 strings to each other. To do this split into arrays, then sort them, then join them together

    // split the string into arrays, sort them and join them together
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');

    // once the strings are sorted we can see if they are the same
    if (s === t) {
        console.log(true)
        return true
    }
    console.log(false)
    return false
};

isAnagram("anagram", "nagaram")
isAnagram("rat", "car")