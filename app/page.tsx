import { twoSum, twoSumHashtable } from "../demoLeetCode/twoSum";
import { isValidParenthese } from "../demoLeetCode/validParenthese";
import { mergeTwoLists } from "../demoLeetCode/mergTwoSortedList";
import { maxProfit } from "../demoLeetCode/bestTimetoBuyandSellstock";
import { isPalindrome } from "../demoLeetCode/validPalindrome";
import { invertTree } from "../demoLeetCode/invertBinaryTree";
import { ListNode, TreeNode } from "../types";
import { isAnagram, isAnagramHashmap } from "../demoLeetCode/validAnagram";
import { binarySearch } from "../demoLeetCode/binarySerach";
import { floodFill } from "../demoLeetCode/foodFill";
import { maxSubArray } from "../demoLeetCode/maximumSubArray";
import { lowestCommonAncestor } from "../demoLeetCode/lowestCommonAncestor";
import { climbStairs } from "../demoLeetCode/climbingStairs";
import { threeSum } from "../demoLeetCode/threeSum";
const isTwoSum = twoSum([2, 5, 5, 11], 10);
///
const isTwoSumHashtable = twoSumHashtable([2, 5, 5, 11], 10);
///
const isValidParentheses = isValidParenthese("()[]{}");
///
const list1: ListNode = {
  val: 1,
  next: { val: 2, next: { val: 3, next: null } },
};
const list2: ListNode = {
  val: 3,
  next: { val: 4, next: { val: 2, next: null } },
};
const isMergeTwoLists = mergeTwoLists(list1, list2);
///
const isBestTimeToBuy = maxProfit([3, 2, 6, 5, 0, 3]);
///
const isValidPalindrome = isPalindrome("A man, a plan, a canal: Panama");
///
const treeNode: TreeNode = {
  val: 4,
  left: {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null },
  },
  right: {
    val: 7,
    left: { val: 6, left: null, right: null },
    right: { val: 9, left: null, right: null },
  },
};
const isInvertBinaryTree = invertTree(treeNode);
///
const isValidAnagram = isAnagramHashmap("a", "ab");
///
const isBinarySearch = binarySearch([-1, 0, 3, 5, 9, 12], 9);
//
const isFoodFill = floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2
);
///
const isMaxSubArray = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
///
const root: TreeNode = {
  val: 6,
  left: {
    val: 2,
    left: { val: 0, left: null, right: null },
    right: {
      val: 4,
      left: { val: 3, left: null, right: null },
      right: { val: 5, left: null, right: null },
    },
  },
  right: {
    val: 8,
    left: { val: 7, left: null, right: null },
    right: { val: 9, left: null, right: null },
  },
};

const p: TreeNode = {
  val: 2,
  left: null,
  right: null,
};
const q: TreeNode = {
  val: 4,
  left: null,
  right: null,
};
const isLowestCommonAncestor = lowestCommonAncestor(root, p, q);
//
const isClimbingStairs = climbStairs(5);
//
const isThreeSum = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(isThreeSum);
export default function Home() {
  return <div>Hello</div>;
}
