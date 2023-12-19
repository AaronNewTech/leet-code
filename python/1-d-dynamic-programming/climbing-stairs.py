def climbStairs(n):
    
    one = 1
    two = 1

    for i in range(n - 1):
        # print(i)
        temp = one
        one = one + two
        two = temp
    print(one)
    return one

climbStairs(2) # answer is 2
climbStairs(3) # answer is 3
climbStairs(5) # answer is 8