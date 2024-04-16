def containsDuplicate(nums):
        numSet = set(())

        for num in nums:
            
            if num in numSet: 
                print(True)
                return True
            else: 
                numSet.add(num)
        
        print(False)
        return False
        
containsDuplicate([1,2,3,1])
containsDuplicate([1, 2, 3, 4])
containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])