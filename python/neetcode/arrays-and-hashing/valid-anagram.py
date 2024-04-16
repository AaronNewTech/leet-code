def isAnagram(s, t) -> bool:
        
        s = sorted(s)
        t = sorted(t)
        # print(s, t)
        if s == t:
            print(True)
            return True
        print(False)
        return False


isAnagram("anagram", "nagaram")
isAnagram("rat", "car")