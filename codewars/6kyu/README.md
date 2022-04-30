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
