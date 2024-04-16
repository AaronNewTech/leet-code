from typing import List
import math

def increasingTriplet(nums: List[int]) -> bool:
        
        if len(nums) < 3: return False

        min1 = math.inf
        min2 = math.inf

        for num in nums:
            if num <= min1:
                min1 = num
            elif num <= min2:
                min2 = num
            else: return True

        return False

print(increasingTriplet([1,2,3,4,5]))

print(increasingTriplet([5,4,3,2,1]))

print(increasingTriplet([2,1,5,0,4,6]))