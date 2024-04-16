def mergeAlternately(word1: str, word2: str) -> str:
        
        length = max(len(word1), len(word2))
        # print(length)

        arr = []
        for i in range(0, length):
            if i < len(word1):
                arr.append(word1[i])
            if i < len(word2):
                arr.append(word2[i])
            # print(arr)

        merged = "".join(arr)

        # print(merged)

        return merged

print(mergeAlternately("abc", "pqr"))

print(mergeAlternately("ab", "pqrs"))

print(mergeAlternately("abcd", "pq"))