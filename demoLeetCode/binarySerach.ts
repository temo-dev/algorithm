/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, 
 * write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
 */

// very strong with O(logn)
export const binarySearch = (nums: number[], target: number): number => {
  let low = 0;
  let hight = nums.length - 1;

  while (low <= hight) {
    const pivot = Math.floor((low + hight) / 2);
    const num = nums[pivot];
    if (num === target) {
      return pivot;
    } else if (num < target) {
      low = pivot + 1;
    } else {
      hight = pivot - 1;
    }
  }
  return -1;
};
