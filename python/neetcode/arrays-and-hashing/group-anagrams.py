from collections import defaultdict

def groupAnagrams(strs):
    
    anagram_groups = defaultdict(list)

    for s in strs:
        sorted_str = ''.join(sorted(s))
        anagram_groups[sorted_str].append(s)
        # print(sorted_str)

    print(anagram_groups.values())

    return list(anagram_groups.values())

groupAnagrams(["eat","tea","tan","ate","nat","bat"])