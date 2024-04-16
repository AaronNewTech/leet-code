class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var minDiffInBST = function (root) {
    const values = [];
    let minDiff = Infinity;

    const traverse = (node) => {
        if (!node) return;
        values.push(node.val);
        traverse(node.left);
        traverse(node.right);
    };



    traverse(root);
    values.sort((a, b) => a - b);

    for (let i = 0; i < values.length - 1; i++) {
        const diff = values[i + 1] - values[i];

        if (diff < minDiff) {
            minDiff = diff;
        }
    }

    // console.log(values);
    return minDiff;
};

// Manual creation of the binary search tree
const root = new TreeNode(5,
    new TreeNode(3,
        new TreeNode(2, new TreeNode(1)),
        new TreeNode(4)
    ),
    new TreeNode(6, null, new TreeNode(8, new TreeNode(7), new TreeNode(9)))
);

// Call the minDiffInBST function
const result = minDiffInBST(root);

// Output the result
console.log(result);
