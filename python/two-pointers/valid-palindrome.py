import re
def isPalindrome(s: str) -> bool:
    l, r = 0, len(s) - 1

    while l < r:
        while l < r and not alphaNum(s[l]):
            l += 1
        
        while r > l and not alphaNum(s[r]):
            r -= 1

        if s[l].lower() != s[r].lower():
            return False
        l, r = l + 1, r - 1
    return True

def alphaNum(c):
    return (ord('A') <= ord(c) <= ord('Z') or 
            ord('a') <= ord(c) <= ord('z') or 
            ord('0') <= ord(c) <= ord('9'))

    # non-pointer solution

    # s = re.sub("[^0-9a-zA-Z]+", '', s).lower()
    # # rev = s[::-1]
    # rev = "".join(reversed(s))
    # # print(s, rev)
    # if s == rev:
    #     print(True)
    #     return True
    # print(False)
    # return False
        
print(isPalindrome("A man, a plan, a canal: Panama"))
print(isPalindrome("race a car"))
print(isPalindrome("racecar"))
print(isPalindrome(" "))
print(isPalindrome("0P"))