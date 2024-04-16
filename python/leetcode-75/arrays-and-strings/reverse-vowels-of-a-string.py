def reverseVowels(s: str) -> str:
        

        l = 0
        r = len(s) - 1

        vowels = "aeiouAEIOU"

        # can do this to split: arr = list(s)

        # arr = [char for char in s]

        arr = list(s)

        
        while l < r:
            if arr[l] in vowels and arr[r] in vowels:
                temp = arr[l]
                arr[l] = arr[r]
                arr[r] = temp
                l += 1
                r -= 1

            elif arr[l] not in vowels:
                l += 1
        
            elif arr[r] not in vowels:
                r -= 1

        result = ''.join(arr)
        return result

print(reverseVowels("hello"))

print(reverseVowels("leetcode"))