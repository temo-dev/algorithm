/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Input: s = "()"
Output: true
*/

//using stack datastructure
export const isValidParenthese = (s: string): boolean => {
  // init stack
  const stack: string[] = [];
  // create hashMap
  const map = new Map([
    ["}", "{"],
    ["]", "["],
    [")", "("],
  ]);
  // create array with value in hashmap
  const openingBraces = Array.from(map.values());
  // init isMatch
  let mismatchedBrace = false;

  // loop for every char in string
  for (let i = 0; i < s.length; i++) {
    if (openingBraces.includes(s[i])) {
      // push in stack when ch in s
      stack.push(s[i]);
    } else {
      const openingBrace = stack.pop(); // pop ch in stack
      const expectedBrace = map.get(s[i]); //use key get value in hashmap
      if (openingBrace !== expectedBrace) {
        mismatchedBrace = true;
        break;
      }
    }
  }
  return !mismatchedBrace && !stack.length; // return true if stack is empty
};
