from typing import List
def removeDuplicates(nums: List[int]) -> int:
        l = 1

        for r in range(1, len(nums)):
            # check previous value versus current
            if nums[r] != nums[r - 1]:
                # if not equal updates current value to the one that is ahead, effectively removing the duplicate
                nums[l] = nums[r]
                # updates l to count the length of the array which is what we want to return
                
                l += 1
                print(l)
        return l


removeDuplicates([1,1,2])
removeDuplicates([0,0,1,1,1,2,2,3,3,4])