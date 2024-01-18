# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def insertIntoBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:

        # recursion method
        # if not root:
        #     return TreeNode(val)
        # if val > root.val:
        #     root.right = self.insertIntoBST(root.right, val)
        # else:
        #     root.left = self.insertIntoBST(root.left, val)
        # print(root)
        # return root
        
        # iterative method
        if not root:
            return TreeNode (val)
        cur = root
        while True:
            if val > cur.val:
                if not cur.right:
                    cur.right = TreeNode(val)
                    print(root)
                    return root
                else:
                    cur = cur.right
            else:
                if not cur.left:
                    cur.left = TreeNode (val)
                    print(root)
                    return root
                else:
                    cur = cur.left

# Example 1: root = [4,2,7,1,3], val = 5
root1 = TreeNode(4)
root1.left = TreeNode(2)
root1.right = TreeNode(7)
root1.left.left = TreeNode(1)
root1.left.right = TreeNode(3)

val1 = 5
solution = Solution()
result1 = solution.insertIntoBST(root1, val1)

# Example 2: root = [40,20,60,10,30,50,70], val = 25
root2 = TreeNode(40)
root2.left = TreeNode(20)
root2.right = TreeNode(60)
root2.left.left = TreeNode(10)
root2.left.right = TreeNode(30)
root2.right.left = TreeNode(50)
root2.right.right = TreeNode(70)

val2 = 25
result2 = solution.insertIntoBST(root2, val2)

# Example 3: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
root3 = TreeNode(4)
root3.left = TreeNode(2)
root3.right = TreeNode(7)
root3.left.left = TreeNode(1)
root3.left.right = TreeNode(3)

# Assuming null is represented by None in Python
root3.right.left = None
root3.right.right = None

val3 = 5
result3 = solution.insertIntoBST(root3, val3)
