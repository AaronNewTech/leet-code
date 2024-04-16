from typing import List

def threeSum(nums: List[int]) -> List[List[int]]:
    # initialize an empty list to store the result
    result = []
    
    # sort the input list in ascending order
    nums.sort()

    # initialize the index i to 0
    i = 0
    # iterate through the elements in the list
    while i < len(nums):
        # get the current element a at index i
        a = nums[i]

        # check for duplicate elements, skip if duplicate
        if i > 0 and a == nums[i - 1]:
            i += 1
            continue

        # initialize two pointers, l and r
        l = i + 1
        r = len(nums) - 1

        # use a two-pointer approach to find triplets
        while l < r:
            threeSum = a + nums[l] + nums[r]
            if threeSum > 0:
                r -= 1
            elif threeSum < 0:
                l += 1
            else:
                # if a triplet is found, append it to the result
                result.append([a, nums[l], nums[r]])
                l += 1
                # skip duplicate elements in the inner loop
                while l < r and nums[l] == nums[l - 1]:
                    l += 1

        # increment the outer loop index i
        i += 1

    # return the final result
    return result

print(threeSum([-1,0,1,2,-1,-4]))
print(threeSum([0,1,1]))
print(threeSum([0,0,0]))