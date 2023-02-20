/**
 * 
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and 
 * removing all non-alphanumeric characters, it reads the same forward and backward. 
 * Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
 */

export const isPalindrome = (s: string): boolean => {
  // cleaned string
  const cleanedSting = s
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  //
  for (let i = 0; i < cleanedSting.length - 1; i++) {
    if (cleanedSting[i] !== cleanedSting[cleanedSting.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
