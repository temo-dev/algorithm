/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

*/

export const climbStairs = (n: number): number => {
  const dynamic: number[] = [];
  dynamic[1] = 1;
  dynamic[2] = 2;
  for (let i = 0; i <= n; i++) {
    dynamic[i] = dynamic[i - 1] + dynamic[i - 2];
  }
  return dynamic[n];
};
