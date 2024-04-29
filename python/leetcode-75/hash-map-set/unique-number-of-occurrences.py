from typing import List

def uniqueOccurrences(arr: List[int]) -> bool:
        

    num_dict = {}

    for num in arr:
        if num not in num_dict:
            num_dict[num] = 1
        else:
            num_dict[num] += 1
        
    
    unique = set()

    for key in num_dict.values():
        if key in unique:
            return False
        else:
            unique.add(key) 

    
    return True

print(uniqueOccurrences([1,2,2,1,1,3]))

print(uniqueOccurrences([1,2]))

print(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))