var searchMatrix = function(matrix, target) {
    // use binary search to find if the value in the row
    // shift the row up or down depending if the target is
    // greater or less than bottom and top values
    // this is basically a binary search for the range
    // before doing a binary search on the array row
    // then perform a standard binary search on that row
    // if the target is found return true

    // find the size of the 2d array
    let rows = matrix.length
    let columns = matrix[0].length

    // initialize pointers
    let top = 0
    let bottom = rows - 1
    
    while (top <= bottom) {
        
        // assign row
        let row = Math.floor((top + bottom) / 2)

        // change top to row + 1 if target is greater than top
        if (target > matrix[row][columns - 1]) {
            top = row + 1
        }

        // change bottom to row - 1 if target is less than bottom
        else if (target < matrix[row][0]) {
            bottom = row - 1
        }

        // if target falls between the range of the row then loop terminates
        else {
            break
        }
    }
    
    // terminates loop if target was not in the range of the rows
    if (top > bottom) {
        return false
    }
    
    // setting row again 
    let row = Math.floor((bottom + top) / 2)

    // initialize pointers for binary search
    let l = 0
    let r = columns - 1
    while (l <= r) {

        // assign mid for search
        let mid = Math.floor((l + r) / 2)

        // move left pointer if target is greater than mid
        if (target > matrix[row][mid]) {
            l = mid + 1
        }

        // move right pointer if target is less than mid
        else if (target < matrix[row][mid]) {
            r = mid - 1
        }

        // returns true if target is found
        else {
            return true
        }
        
    }

    // target not found return false
    return false
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))
