from typing import List

def longestOnes(nums: List[int], k: int) -> int:
        
        max_count = 0
        zero_count = 0
        l = 0
        r = 0

        while r < len(nums):

            if nums[r] == 0:
                zero_count += 1
            
            while zero_count > k:
                if nums[l] == 0:
                    zero_count -= 1
                
                l += 1

            max_count = max(max_count, r - l + 1)

            r += 1

        return max_count

print(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))

print(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))