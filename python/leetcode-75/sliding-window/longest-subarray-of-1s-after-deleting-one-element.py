from typing import List

def longestSubarray(nums: List[int]) -> int:
        max_count = 0
        zero_count = 0

        l = 0
        r = 0

        while r < len(nums):
            if nums[r] == 0:
                zero_count += 1

            while zero_count > 1:
                if nums[l] == 0:
                    zero_count -= 1

                l += 1

            max_count = max(max_count, r - l)

            r += 1
        
        return max_count

print(longestSubarray([1,1,0,1]))

print(longestSubarray([0,1,1,1,0,1,1,0,1]))