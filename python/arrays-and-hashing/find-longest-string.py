def longest_word_without_non_letters(string):
    import re

    cleaned_words = re.sub(r'[^a-zA-Z\s]+', ' ', string).split()
    longest_word = max(cleaned_words, key=len, default="")
    
    print(cleaned_words)
    return longest_word

result1 = longest_word_without_non_letters("helloo&& world!!!!!")  # answer helloo
result2 = longest_word_without_non_letters("green.... eggs&& ham")  # answer green
result3 = longest_word_without_non_letters("yellow---submarine")     # answer submarine

print(result1)
print(result2)
print(result3)
