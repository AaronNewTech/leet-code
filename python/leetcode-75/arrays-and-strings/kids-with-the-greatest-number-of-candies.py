from typing import List

def kidsWithCandies(candies: List[int], extraCandies: int) -> List[bool]:
        
        maximum = max(candies)

        arr = []

        for i in range(0, len(candies)):
            if candies[i] + extraCandies >= maximum:
                arr.append(True)
            else:
                arr.append(False)

        return arr

print(kidsWithCandies([2,3,5,1,3], 3))

print(kidsWithCandies([4,2,1,1,2], 1))

print(kidsWithCandies([12,1,12], 10))