from typing import List
def removeElement(nums: List[int], val: int) -> int:
    
        l = 0

        for r in range(len(nums)):
            if (nums[r] != val):
                nums[l] = nums[r]
                l += 1
        print(l)
        return l

removeElement([3,2,2,3], 3)
removeElement([0,1,2,2,3,0,4,2], 2)