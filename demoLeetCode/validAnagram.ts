/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 typically using all the original letters exactly once.
 Input: s = "anagram", t = "nagaram"
Output: true
 */

// common way big-o: O(nlogn)
export const isAnagram = (s: string, t: string): boolean => {
  const arrays = s.split("");
  arrays.sort();
  const arrayt = t.split("");
  arrayt.sort();
  if (arrays.join("") === arrayt.join("")) {
    return true;
  }
  return false;
};

// the way by hashmap with big-o: O(1)
export const isAnagramHashmap = (s: string, t: string): boolean => {
  const hashMap: Map<string, number> = new Map();

  for (const string of s) {
    const match = hashMap.get(string);
    if (match !== undefined) {
      hashMap.set(string, match + 1);
      continue;
    }
    hashMap.set(string, 1);
  }

  for (const string of t) {
    const match = hashMap.get(string);
    if (match === undefined) {
      hashMap.set(string, 1);
      break;
    } else if (match === 1) {
      hashMap.delete(string);
      continue;
    }
    hashMap.set(string, match - 1);
  }
  if (hashMap.size === 0) {
    return true;
  }
  return false;
};
