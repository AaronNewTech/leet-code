def maxVowels(s: str, k: int) -> int:
        
        vowels = ['a', 'e', 'i', 'o', 'u']

        count = 0

        for i in range(0, k):
            if s[i] in vowels:
                count += 1

        max_count = count

        for i in range(k, len(s)):
            if s[i] in vowels:
                count += 1
            if s[i - k] in vowels:
                count -= 1
            
            max_count = max(count, max_count)

            if max_count >= k:
                return k

        return max_count

print(maxVowels("abciiidef", 3))

print(maxVowels("aeiou", 3))

print(maxVowels("leetcode", 3))