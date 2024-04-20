from typing import List

def maxArea(height: List[int]) -> int:
        
        max_vol = 0
        l = 0
        r = len(height) - 1

        while l < r:
            vol = min(height[l], height[r]) * (r - l)
            max_vol = max(max_vol, vol) 
            if height[l] < height[r]: l+= 1
            else: r-= 1

        return max_vol

print(maxArea([1,8,6,2,5,4,8,3,7]))

print(maxArea([1,1]))