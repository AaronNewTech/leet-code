def reverseWords(s: str) -> str:

    # 2 pointers method
    words = s.split()

    l = 0
    r = len(words) - 1

    while l < r:
        temp = words[l]
        words[l] = words[r]
        words[r] = temp
        l += 1
        r -= 1

    result = ' '.join(words)

    return result

    # brute force method
    # s = s.split()
    # s.reverse()
    
    # string = ' '.join(s)
    
    # return string


print(reverseWords("the sky is blue"))

print(reverseWords("  hello world  "))

print(reverseWords("a good   example"))