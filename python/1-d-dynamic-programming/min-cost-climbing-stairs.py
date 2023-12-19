def minCostClimbingStairs(cost):

        cost.append(0)

        for i in range(len(cost) - 3, -1, -1):
            cost[i] += min(cost[i + 1], + cost[i + 2])
        print(min(cost[0], cost[1]))
        return min(cost[0], cost[1])

minCostClimbingStairs([10, 15, 20]) # answer is 15
minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]) # answer is 6