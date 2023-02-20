/**
 * Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

 A subarray is a contiguous non-empty sequence of elements within an array.

 Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

solutions: using a greedy algorithm
 */

// big-o: O(1)
export const maxSubArray = (nums: number[]): number => {
  let sum = nums[0];
  let max = nums[0];
  let ptr = 1;

  while (ptr < nums.length) {
    sum = Math.max(nums[ptr], sum + nums[ptr]);
    (max = Math.max(max, sum)), (ptr += 1);
  }
  return max;
};
