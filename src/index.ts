function isPalindrome(str: string) {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

import * as assert from 'assert';
assert(isPalindrome('radar'));
assert(isPalindrome('madam'));
assert(isPalindrome('toot'));
assert(!isPalindrome('toots'));
