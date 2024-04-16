from typing import List
def search(nums: List[int], target: int) -> int:
        l = 0
        r = len(nums) - 1

        while l <= r:
            m = l + ((r - l) // 2)

            if nums[m] > target:
                r = m - 1
            elif nums[m] < target:
                l = m + 1
            else:
                print(m)
                return m
        print(-1)
        return -1


search(nums = [-1,0,3,5,9,12], target = 9)
search(nums = [-1,0,3,5,9,12], target = 2)