These are all of the 6kyu's I've solved as well as my solutions
#
#
Highest Scoring Word: 
-[solution](./6kyujs/highest-scoring-word.js)
-[tests](./6kyujs/highest-scoring-word.test)
-[other-solutions](https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/solutions/javascript/all/best_practice)
                        
                        #Rules: 
                        
#Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc. You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string. All letters will be lowercase and all inputs will be valid.
#
#
Persistent Bugger: 
-[solution](./6kyujs/persistent-bugger.js)
-[tests](./6kyujs/persistent-bugger.test)
-[other-solutions](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/solutions/javascript)
                        
                        #Rules: 
                        
#Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
For example (Input --> Output):
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
#
#
Who Likes It: 
-[solution](./6kyujs/who-likes.js)
-[tests](./6kyujs/who-likes.test)
-[other-solutions](https://www.codewars.com/kata/5266876b8f4bf2da9b000362/solutions/javascript)
                        
                        #Rules: 
                        
#You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
#
#
Breaking camelCase: 
-[solution](./6kyujs/breaking-camel-case.js)
-[tests](./6kyujs/breaking-camel-case.test)
-[other-solutions](https://www.codewars.com/kata/5208f99aee097e6552000148/solutions/javascript)
                        
                        #Rules: 
                        
#Complete the solution so that the function will break up camel casing, using a space between words.
Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
#
#
Array.diff: 
-[solution](./6kyujs/array-diff.js)
-[tests](./6kyujs/array-diff.test)
-[other-solutions](https://www.codewars.com/kata/523f5d21c841566fde000009/solutions/javascript)
                        
                        #Rules: 
                        
#Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
#
#
Two Sum: 
-[solution](./6kyujs/two-sum.js)
-[tests](./6kyujs/two-sum.test)
-[other-solutions](https://www.codewars.com/kata/52c31f8e6605bcc646000082/solutions/javascript)
                        
                        #Rules: 
                        
#Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
#
#
