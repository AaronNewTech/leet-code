from typing import List

def moveZeroes(nums: List[int]) -> None:
        
        l = 0
        r = 1

        while r < len(nums):

            if nums[l] == 0 and nums[r] != 0:
                temp = nums[l]
                nums[l] = nums[r]
                nums[r] = temp

                l+= 1

            if nums[l] != 0:
                l+= 1
            
            r+= 1
                
        return nums

print(moveZeroes([0,1,0,3,12]))

print(moveZeroes([0]))

print(moveZeroes([0,1,0,1,0,1,0,1,0,1,1,1,1,1,1]))