def remove_copies(s):
    # Create a set to store the sorted words
    seen_words = set()

    # Create a list to store the result
    result = []

    # Iterate through each string in the input list
    for word in s:
        # Sort the characters in the word
        sorted_word = ''.join(sorted(word))

        # If the sorted word has not been seen before, add it to the set and append the word to the result
        if sorted_word not in seen_words:
            seen_words.add(sorted_word)
            result.append(word)
    print(result)
    return result

# Example usage:

remove_copies(["abc", "bca", "acb", "xy", "yx", "yz", "yz"])
remove_copies(["code", "anagram", "aaagmnr", "doce"])


