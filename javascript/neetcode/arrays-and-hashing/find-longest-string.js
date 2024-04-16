function longestWordWithoutNonLetters(string) {
    
    const cleanedWords = string.replace(/[^a-zA-Z\s]+/g, " ").split(/\s+/);
    const longestWord = cleanedWords.reduce(
        (longest, currentWord) =>
      currentWord.length > longest.length ? currentWord : longest, "");
    return longestWord;
}

console.log(longestWordWithoutNonLetters("helloo&& world!!!!!")); // answer helloo
console.log(longestWordWithoutNonLetters("green.... eggs&& ham")); // answer green
console.log(longestWordWithoutNonLetters("yellow---submarine")); // answer submarine


