/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// using Array with Big-O is O(n^2) so very slow
export const twoSum = (nums: number[], target: number): number[] => {
  var result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return (result = [i, j]);
      }
    }
  }
  return result;
};

// using hashmap with Big-O is O(n)
export const twoSumHashtable = (nums: number[], target: number): number[] => {
  let result: number[] = [];
  // create hashtable
  const hashMap: Map<number, number> = new Map();

  // loop through hashmap
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const match = hashMap.get(target - num);
    if (match !== undefined) {
      result = [i, match];
      break;
    }
    hashMap.set(num, i);
  }
  return result;
};
