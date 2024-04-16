from typing import List
def wordBreak(s: str, wordDict: List[str]) -> bool:
        
        dp = [False] * (len(s) + 1)
        dp[len(s)] = True

        for i in range(len(s) - 1, -1, -1):
            for word in wordDict:
                print(word)
                if (i + len(word) <= len(s) and s[i : i + len(word)] == word):
                    dp[i] = dp[i + len(word)]
                if dp[i]:
                    break
        print(dp[0])
        return dp[0]


wordBreak(s = "leetcode", wordDict = ["leet","code"])
wordBreak(s = "applepenapple", wordDict = ["apple","pen"])
wordBreak(s = "catsandog", wordDict = ["cats","dog","sand","and","cat"])

wordBreak(s = "elppa", wordDict = ["el", "ppa"])