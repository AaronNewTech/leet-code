from typing import List

def pivotIndex(nums: List[int]) -> int:

        total = sum(nums)

        left_total = 0
        right_total = total

        for i in range(len(nums)):
            right_total -= nums[i]

            if left_total == right_total:
                return i

            left_total += nums[i]

        return -1

print(pivotIndex([1,7,3,6,5,6]))

print(pivotIndex([1,2,3]))

print(pivotIndex([2,1,-1]))