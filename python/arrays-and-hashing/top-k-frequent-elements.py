from collections import Counter

def topKFrequent(nums, k):
        # solution without using collections import
        # count = {}
        # result = []
        # for num in nums:
        #     if num not in count: count[num] = 1
        #     else: count[num] = count.get(num) + 1
        # print(count)

        result = []

        count = Counter(nums)

        sorted_counts = sorted(count.items(), key = lambda x: x[1], reverse = True)

        for i in range(0, k): result.append(sorted_counts[i][0])

        return result