def gcdOfStrings(str1: str, str2: str) -> str:
        
        if str1 + str2 != str2 + str1:
            return 'None'

        for i in range(len(str2), 0, -1):
            if len(str1) % i == 0 and len(str2) % i == 0: 
                return str1[0:i]
            
print(gcdOfStrings("ABCABC", "ABC"))

print(gcdOfStrings("ABABAB", "ABAB"))

print(gcdOfStrings("LEET", "CODE"))