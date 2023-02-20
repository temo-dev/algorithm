/**
 * Given the root of a binary tree, invert the tree, and return its root.
  Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
 */

import { TreeNode } from "../types";

function isTreeNode(root: any): root is TreeNode {
  return (
    root !== null &&
    typeof root === "object" &&
    typeof root.val === "number" &&
    typeof root.left === "object" &&
    typeof root.right === "object"
  );
}

export const invertTree = (root: TreeNode | null): TreeNode | null => {
  if (isTreeNode(root)) {
    const left = invertTree(root.left);
    root.left = invertTree(root.right);
    root.right = left;
  }
  return root;
};
