/**
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
According to the definition of LCA on Wikipedia: 
“The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants
 (where we allow a node to be a descendant of itself).”
 Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
 */

import { TreeNode } from "../types";

// check node
function isTreeNode(root: any): root is TreeNode {
  return (
    root !== null &&
    typeof root === "object" &&
    typeof root.val === "number" &&
    typeof root.left === "object" &&
    typeof root.right === "object"
  );
}

export const lowestCommonAncestor = (
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null => {
  if (isTreeNode(root) && isTreeNode(p) && isTreeNode(q)) {
    const pVal = p.val;
    const qVal = q.val;
    const rootVal = root.val;

    if (pVal < rootVal && qVal < rootVal) {
      return lowestCommonAncestor(root.left, p, q);
    } else if (pVal > rootVal && qVal > rootVal) {
      return lowestCommonAncestor(root.right, p, q);
    }
    return root;
  }
  return null;
};
