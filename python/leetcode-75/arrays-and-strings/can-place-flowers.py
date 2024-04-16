from typing import List

def canPlaceFlowers(flowerbed: List[int], n: int) -> bool:
        
        for i in range(len(flowerbed)):
            if flowerbed[i] == 0 and (i == 0 or flowerbed[i-1] != 1) and (i == len(flowerbed)-1 or flowerbed[i+1] != 1):
                n -= 1
                flowerbed[i] = 1

        return n <= 0

print(canPlaceFlowers([1,0,0,0,1], 1))

print(canPlaceFlowers([1,0,0,0,1], 2))