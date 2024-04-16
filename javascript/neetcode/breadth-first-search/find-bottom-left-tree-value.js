class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null
    }
}

var findBottomLeftValue = function (root) {
    // find the most bottom left where there is still a value
    // find the bottom row, then find the left most
    
    // put the tree in to an array which is essential for accessing the entire tree instead of just the root node
    let curr_row = [root]


    while (true) {

        // initialize and empty the array for storing the row under current row
        let next_row = []

        // console log for current row
        // console.log(curr_row.map(node => node))

        // loop that checks every node at the current row which is 
        // breadth first search 
        // in example 2 the if we reach the 3rd row the code will 
        // check the node of curr_row will register not 2 nodes but 
        // all nodes in the current row which is 4, 5 and 6 in this case

        for (let node of curr_row) {

            // checks if the current node has children and if it does pushes the node to the next_row array

            // left child
            if (node.left !== null) {
                next_row.push(node.left)
            }
            // right child
            if (node.right !== null) {
                next_row.push(node.right)
            }
        }

        // terminates the loop and returns the deepest left most node value when the next_row is empty meaning we reached the bottom the tree
        if (next_row.length === 0) {
            return curr_row[0].val
        }

        // update the current row to the row under it which is a depth search part of the code
        curr_row = next_row
    }
}

let root1 = new TreeNode(2)
root1.left = new TreeNode(1)
root1.right = new TreeNode(3)

// tree structure example 1
//     2
//    / \
//   1   3


console.log(findBottomLeftValue(root1))


let root2 = new TreeNode(1)
root2.left = new TreeNode(2)
root2.right = new TreeNode(3)
root2.left.left = new TreeNode(4)
root2.right.left = new TreeNode(5)
root2.right.right = new TreeNode(6)
root2.right.right.right = new TreeNode(7)

// tree structure example 2
//       1
//      / \
//     2   3
//    /   / \
//   4   5   6
//            \
//             7

console.log(findBottomLeftValue(root2))
