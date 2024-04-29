from typing import List

def findDifference(nums1: List[int], nums2: List[int]) -> List[List[int]]:
        set1 = set(nums1)
        set2 = set(nums2)

        for num in nums1:
            if num in set1 and num in set2:
                set1.remove(num)
                set2.remove(num)

        return [list(set1), list(set2)]

        # other solution
        # set1 = set(nums1)
        # set2 = set(nums2)

        # result1 = list(filter(lambda x: x not in set2, set1))
        # result2 = list(filter(lambda x: x not in set1, set2))

        # return [result1, result2]

print(findDifference([1, 2, 3], [2,4,6]))

print(findDifference([1,2,3,3], [1,1,2,2]))