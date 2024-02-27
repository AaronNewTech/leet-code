// depth(n) = 1 + max(depth(node.left), depth(node.right))

const depthFirstSearch = function(node) {
    if (node === null) {
        return 0
    }

    let leftDepth = depthFirstSearch(node.left)
    let rightDepth = depthFirstSearch(node.right)

// maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth)

return 1 + Math.max(leftDepth, rightDepth)
}

var diameterOfBinaryTree = function(root) {
    // find the longest stretch of nodes possible
    // find the bottom of the depth and go to root then see which are the 2 longest will add up the diameter
    if (root === null) {
            return 0
        }
    
    return Math.max(depthFirstSearch(root.left) + depthFirstSearch(root.right), diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right))

// another solution
//     function dfs(root){
//        if(!root) return 0

//        let left = dfs(root.left)
//        let right = dfs(root.right)

//        diameter = Math.max(diameter, left + right)

//        return 1 + Math.max(left, right)
//    }

//    let diameter = 0
//    dfs(root)
//    return diameter 

}

// TreeNode constructor
class TreeNode {
    constructor(val) {
        this.val = val
        this.left = this.right = null
    }
}


// Example 1
const root1 = new TreeNode(1)
root1.left = new TreeNode(2)
root1.right = new TreeNode(3)
root1.left.left = new TreeNode(4)
root1.left.right = new TreeNode(5)

console.log(diameterOfBinaryTree(root1)) // Output should be 3


// example 2
const root2 = new TreeNode(1)
root2.left = new TreeNode(2)

console.log(diameterOfBinaryTree(root2)) 


// example 3
const root3 = new TreeNode(1)
root3.left = new TreeNode(2)
root3.right = new TreeNode(3)
root3.left.left = new TreeNode(4)
root3.left.right = new TreeNode(5)
root3.right.right = new TreeNode(6)
root3.right.right.left = new TreeNode(7)
root3.right.right.right = new TreeNode(8)

console.log(diameterOfBinaryTree(root3))
