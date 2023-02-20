/**
 * Given an integer array nums, return all the triplets 
 * [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.


Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
 */
// 0 = target + nums[i] + num[match]
export const threeSum = (nums: number[]): number[][] => {
  let threeSum: number[][] = [];
  const hashMapResult: Map<string, number> = new Map();
  for (const num of nums) {
    let target = num;
    let result: number[] = [];
    const hashMap: Map<number, number> = new Map();
    const newNums = createNewArray(nums, target);
    console.log(newNums);
    for (let i = 0; i < newNums.length; i++) {
      const matchNum = hashMap.get(-target - newNums[i]);
      if (matchNum !== undefined) {
        result = [target, newNums[i], newNums[matchNum]].sort();
        const matchResult = hashMapResult.get(JSON.stringify(result));
        if (matchResult === undefined) {
          hashMapResult.set(JSON.stringify(result), 1);
          threeSum.push(result);
        }
      }
      hashMap.set(newNums[i], i);
    }
  }
  return threeSum;
};

const createNewArray = (nums: number[], target: number): number[] => {
  let newArray: number[] = [];
  let count = 0;
  for (const num of nums) {
    if (num === target && count === 0) {
      count++;
      continue;
    }
    newArray.push(num);
  }
  return newArray;
};

// optimize code
export const threeSumOptimize = (nums: number[]): number[][] => {
  let ans: number[][] = [];
  nums.sort((a, b) => a - b);

  nums.forEach((e, i) => {
    if (!(i && nums[i] === nums[i - 1])) {
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        let threeSum = nums[i] + nums[left] + nums[right];
        if (threeSum > 0) right -= 1;
        else if (threeSum < 0) left += 1;
        else {
          ans.push([nums[i], nums[left], nums[right]]);
          left += 1;
          while (nums[left] === nums[left - 1] && left < right) left += 1;
        }
      }
    }
  });
  return ans;
};
