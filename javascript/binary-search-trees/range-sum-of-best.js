class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var rangeSumBST = function (root, low, high) {
    const values = [];
    let sum = 0;

    const traverse = (node) => {
        if (!node) return;
        values.push(node.val);

        if (node.val >= low && node.val <= high) {
            sum += node.val;
        }
        traverse(node.left);
        traverse(node.right);
    };

    traverse(root);
    // console.log(values);
    return sum;
};

// Create a binary search tree
const tree = new TreeNode(
    10,
    new TreeNode(5, new TreeNode(3), new TreeNode(7)),
    new TreeNode(15, null, new TreeNode(18))
);

// Call the rangeSumBST function with the binary search tree as an argument
const result = rangeSumBST(tree, 7, 15);

console.log(result);
