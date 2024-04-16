def twoSum(nums, target):
        nums_dict = {}

        for i in range(len(nums)):
            diff = target - nums[i]

            if diff not in nums_dict: nums_dict[nums[i]] = i
            else: 
                print([nums_dict.get(diff), i])
                return [nums_dict.get(diff), i]
            
twoSum([2, 7, 11, 15], 9)
twoSum([3,2,4], 6)
twoSum([3, 3], 6)
