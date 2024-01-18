function longestWordWithoutNonLetters(string) {
    
    const cleanedWords = string.replace(/[^a-zA-Z\s]+/g, " ").split(/\s+/);
    const longestWord = cleanedWords.reduce(
        (longest, currentWord) =>
      currentWord.length > longest.length ? currentWord : longest, "");
    console.log(cleanedWords);
    return longestWord;
}


const result1 = longestWordWithoutNonLetters("helloo&& world!!!!!"); // answer helloo
const result2 = longestWordWithoutNonLetters("green.... eggs&& ham"); // answer green
const result3 = longestWordWithoutNonLetters("yellow---submarine"); // answer submarine

console.log(result1);
console.log(result2);
console.log(result3);
