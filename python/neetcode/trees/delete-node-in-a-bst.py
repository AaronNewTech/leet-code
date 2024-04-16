from typing import Optional, List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def tree_to_list(root: Optional[TreeNode]) -> List:
    if not root:
        return []

    result = []
    queue = [root]

    while queue:
        node = queue.pop(0)
        if node:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
        else:
            result.append(None)

    # Trim trailing None values
    while result and result[-1] is None:
        result.pop()

    return result

def deleteNode(root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
    if not root:
        return root

    if key > root.val:
        root.right = deleteNode(root.right, key)
    elif key < root.val:
        root.left = deleteNode(root.left, key)
    else:
        if not root.left:
            return root.right
        elif not root.right:
            return root.left

        cur = root.right
        while cur.left:
            cur = cur.left
        root.val = cur.val
        root.right = deleteNode(root.right, root.val)

    return root

tree = TreeNode(5)
tree.left = TreeNode(3)
tree.right = TreeNode(6)
tree.left.left = TreeNode(2)
tree.left.right = TreeNode(4)
tree.right.right = TreeNode(7)

result1 = deleteNode(tree, 3)
print(tree_to_list(result1))
result2 = deleteNode(tree, 2)
print(tree_to_list(result2))
result3 = deleteNode(None, 0)
print(tree_to_list(result3))
