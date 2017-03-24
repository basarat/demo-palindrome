# Algorithm to determine if a string is a palindrome
> A palindrome is a string that reads the same forward and backward, for example, radar, toot, and madam. In this lesson we discuss how to approach the palindrome problem using TypeScript / JavaScript.

```js
/**
 * A palindrome is a string that reads the same forward and backward, for example, 
 * - radar, toot, madam.
 * - Write a function that checks if a given string is a palindrome.
 */
```

* We will start by creating our isPalindrome function 

```js
function isPalindrome(str: string) {
}
```

To check a string against it's reverse we will simply
* split the string into an array, 
* reverse the array
* join it back.
* Now that we have the reversed array we can simply check if the reversed value is equal to the original string and return it.
```js
function isPalindrome(str: string) {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}
```