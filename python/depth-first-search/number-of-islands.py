from typing import List


def numIslands(grid: List[List[str]]) -> int:
    
    counter = 0
    
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == '1':
                counter += 1
                countIslands(grid, i, j)
    print(counter)
    return counter

def countIslands(grid, i, j):
    grid[i][j] = '0'

    if i > 0 and grid[i-1][j] == '1':
        countIslands(grid, i-1, j)
    if j < len(grid[0])-1 and grid[i][j+1] == '1':
        countIslands(grid, i, j+1)
    if i < len(grid)-1 and grid[i+1][j] == '1':
        countIslands(grid, i+1, j)
    if j > 0 and grid[i][j-1] == '1':
        countIslands(grid, i, j-1)


numIslands([["1","1","1","1","0"],
            ["1","1","0","1","0"],
            ["1","1","0","0","0"],
            ["0","0","0","0","0"]])

numIslands([["1","1","0","0","0"],
            ["1","1","0","0","0"],
            ["0","0","1","0","0"],
            ["0","0","0","1","1"]])