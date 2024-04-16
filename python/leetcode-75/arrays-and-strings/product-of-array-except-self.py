import math 
from typing import List
def productExceptSelf(nums: List[int]) -> List[int]:
    n = len(nums)
    result = [1] * n
    
    stand_id = 1
    for i in range(1, n):
        
        stand_id *= nums[i - 1]
        result[i] *= stand_id
        
    stand_in = 1

    for i in range(n - 2, -1, -1):
        stand_in *= nums[i + 1]
        result[i] *= stand_in

    return result

    # result = []

    # for i in range(len(nums)):
        
    #     current_list = nums[:i] + nums[i+1:]
        
    #     prod = math.prod(current_list)
        
    #     result.append(prod)

    # print(result)
    # return result

print(productExceptSelf([1, 2, 3, 4]))

print(productExceptSelf([-1, 1, 0, -3, 3]))