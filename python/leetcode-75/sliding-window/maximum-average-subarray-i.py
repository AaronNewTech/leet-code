from typing import List

def findMaxAverage(nums: List[int], k: int) -> float:
        
        sum = 0
        for i in range(0, k):
            sum += nums[i]

        max_sum = sum

        for i in range(k, len(nums)):
            sum = sum - nums[i - k] + nums[i] 
            max_sum = max(max_sum, sum)

        return max_sum / k

print(findMaxAverage([1,12,-5,-6,50,3], 4))
print(findMaxAverage([5], 1))
print(findMaxAverage([1,2,3,4,5,6,7,8,9,10], 5))
print(findMaxAverage([0,4,0,3,2], 1))