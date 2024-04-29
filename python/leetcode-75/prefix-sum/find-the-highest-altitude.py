from typing import List

def largestAltitude(gain: List[int]) -> int:
        current_altitude = 0
        max_altitude = 0

        for i in gain:
            current_altitude += i
            max_altitude = max(current_altitude, max_altitude)

        return max_altitude

print(largestAltitude([-5,1,5,0,-7]))

print(largestAltitude([-4,-3,-2,-1,4,3,2]))