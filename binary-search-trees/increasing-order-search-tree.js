class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var increasingBST = function(root) {
    const values = []
    let curr = root
    
    const traverse = (node) => {
        if (!node) return
        values.push(node.val)
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)
    values.sort((a, b) => a - b)
    for (let i = 0; i < values.length - 1; i++) {
        curr.left = null
        curr.val = values[i]
        if (curr.right) {
            curr = curr.right
        }
        else {
            curr.right = new TreeNode(values[i +  1])
            curr = curr.right
        }
        
    }
    
    console.log(values)
    return root
};

// Input array
const inputArray = [5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9];

// Convert the array to a binary search tree
const root = arrayToBST(inputArray);

// Call the increasingBST function with the root of the binary search tree
const result = increasingBST(root);

// Output the result
console.log(result);
