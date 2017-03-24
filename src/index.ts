function isPalindrome(str: string) {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

import * as assert from 'assert';
assert(isPalindrome('radar'));
assert(isPalindrome('madam'));
assert(isPalindrome('toot'));
assert(!isPalindrome('toots'));

function isAnyPermutationPalindrome(str: string) {
  const unmatched = new Set<string>();
  str.split('').forEach(char => {
    if (unmatched.has(char)) unmatched.delete(char);
    else unmatched.add(char);
  });
  const count = Array.from(unmatched.entries()).length;
  return count === 0 || count === 1;
}

assert(isAnyPermutationPalindrome('civic'));
assert(isAnyPermutationPalindrome('vicic'));
assert(isAnyPermutationPalindrome('toot'));
assert(isAnyPermutationPalindrome('toots'));
assert(!isAnyPermutationPalindrome('civil'));
