from typing import List

def longestConsecutive(nums: List[int]) -> int:
        
        # remove duplicates and sort nums
        sorted_nums = sorted(set(nums))

        max_count = 0
        count = 0
        
        # iterate through the sorted array
        for i in range(len(sorted_nums)):

            # starts at the 2nd num in array and checks that this
            # number is the start of the consecutive numbers to count
            if i == 0 or sorted_nums[i] != sorted_nums[i - 1] + 1:
                
                count = 1
            
            # increases count for next in consecutive numbers
            else:
                
                count += 1

            # check the longest streak against this count
            max_count = max(max_count, count)

        return max_count

        # very slow solution
        # num_set = set(nums)
        # max_count = 0

        # for num in nums:
        #     if(num - 1 not in num_set):
        #         current_num = num
        #         count = 1

        #         while current_num + 1 in num_set:
        #             current_num += 1
        #             count += 1
                
        #         max_count = max(max_count, count)

        # return max_count

print(longestConsecutive([100,4,200,1,3,2]))

print(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))