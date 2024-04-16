from typing import List
def getConcatenation(nums: List[int]) -> List[int]:
        
    # loop over array 2 times to get the answer to the problem

    # solution 1
    ans = []
    for i in range(0, len(nums)):
        ans.append(nums[i])
    ans.extend(nums)

    # solution 2
    # for i in range(0, len(nums)):
    #     nums.append(nums[i])
    
    # solution 3 
    # nums.extend(nums)
    
    # solution 4
    # ans = []
    # for i in range (2):
    #     for n in nums:
    #         ans.append(n)
    # print(ans)
    # return ans

    # solution 5
    # return nums * 2
    # return nums + nums

    print(nums)
    return nums



getConcatenation([1,2,1])

getConcatenation([1,3,2,1])
