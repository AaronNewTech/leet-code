
from typing import List

def lengthOfLIS(nums: List[int]) -> int:
        num_list = [1] * len(nums)

        for i in range(len(nums) - 1, -1, -1):
            for j in range(i + 1, len(nums)):
                # print(nums[i], nums[j])
                if nums[i] < nums[j]:
                    num_list[i] = max(num_list[i], 1 +num_list[j])
                    # print(num_list)
        print(max(num_list))
        return max(num_list)

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])
lengthOfLIS([0, 1, 0, 3, 2, 3])
lengthOfLIS([7, 7, 7, 7, 7, 7, 7])