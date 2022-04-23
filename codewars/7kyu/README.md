These are all of the 7kyu's I've solved as well as my solutions
#
#
Vowel Count
-[solution](./7kyujs/vowel-count.js)
-[tests](./7kyujs/vowel-count.test)
-[other-solutions](https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/javascript)

                        #Rules:

#Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or #spaces.
#
#
Complementary DNA
-[solution](./7kyujs/complementary-DNA.js)
-[tests](./7kyujs/complementary-DNA.test)
-[other-solutions](https://www.codewars.com/kata/554e4a2f232cdd87d9000038/solutions/javascript)

                        #Rules:

#Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
If you want to know more: http://en.wikipedia.org/wiki/DNA
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
Example: (input --> output)
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
#
#
Testing 1-2-3
-[solution](./7kyujs/testing-123.js)
-[tests](./7kyujs/testing-123.test)
-[other-solutions](https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/solutions/javascript)

                        #Rules:

#Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.
Examples:
number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
#
#
Reverse Words
-[solution](./7kyujs/reverse-words.js)
-[tests](./7kyujs/reverse-words.test)
-[other-solutions](https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/solutions/javascript)

                        #Rules:

#Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples:
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces" ==> "elbuod  secaps"
#
#
Binary Addition
-[solution](./7kyujs/binary-addition.js)
-[tests](./7kyujs/binary-addition.test)
-[other-solutions](https://www.codewars.com/kata/551f37452ff852b7bd000139/solutions/javascript)

                        #Rules:

#Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
The binary number returned should be a string.
Examples:(Input1, Input2 --> Output (explanation)))
1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
#
#
Ones and Zeros
-[solution](./7kyujs/ones-and-zeros.js)
-[tests](./7kyujs/ones-and-zeros.test)
-[other-solutions](https://www.codewars.com/kata/578553c3a1b8d5c40300037c/solutions/javascript)

                        #Rules:

#Given an array of ones and zeroes, convert the equivalent binary value to an integer.
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
Examples:
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
#
#
String Ends With
-[solution](./7kyujs/string-ends.js)
-[tests](./7kyujs/string-ends.test)
-[other-solutions](https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/solutions/javascript)

                        #Rules:

#Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
#
#
Sum of Lowest Positive Integers
-[solution](./7kyujs/sum-of-lowest-positive.js)
-[tests](./7kyujs/sum-of-lowest-positive.test)
-[other-solutions](https://www.codewars.com/kata/558fc85d8fd1938afb000014/solutions/javascript/all/best_practice)

                        #Rules:

#Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.
#
#
Isograms
-[solution](./7kyujs/isograms.js)
-[tests](./7kyujs/isograms.test)
-[other-solutions](https://www.codewars.com/kata/54ba84be607a92aa900000f1/solutions/javascript/all/best_practice)

                        #Rules:

#An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
Example: (Input --> Output)
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
#
#
Growth of a Population
-[solution](./7kyujs/growth-population.js)
-[tests](./7kyujs/growth-population.test)
-[other-solutions](https://www.codewars.com/kata/563b662a59afc2b5120000c6/solutions/javascript)

                        #Rules:

#In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants
At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213
It will need 3 entire years.
More generally given parameters:
p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
the function nb_year should return n number of entire years needed to get a population greater or equal to p.
aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
#
#
Money,Money,Money
-[solution](./7kyujs/money.js)
-[tests](./7kyujs/money.test)
-[other-solutions](https://www.codewars.com/kata/563f037412e5ada593000114/solutions/javascript)

                        #Rules:

#Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
Note to Tax: not the invested principal is taxed, but only the year's accrued interest
Example:
  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00
After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.
Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.
Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
#
#
Disemvowel Trolls
-[solution](./7kyujs/disemvowel.js)
-[tests](./7kyujs/disemvowel.test)
-[other-solutions](https://www.codewars.com/kata/52fba66badcd10859f00097e/solutions/javascript)

                        #Rules:

#Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.
#
#
Number of People in the Bus
-[solution](./7kyujs/people-on-bus.js)
-[tests](./7kyujs/people-on-bus.test)
-[other-solutions](https://www.codewars.com/kata/5648b12ce68d9daa6b000099/solutions/javascript)

                        #Rules:

#There is a bus moving in the city, and it takes and drop some people in each bus stop.
You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
Take a look on the test cases.
Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
The second value in the first integer array is 0, since the bus is empty in the first bus stop.
#
#
Descending Order
-[solution](./7kyujs/descending-order.js)
-[tests](./7kyujs/descending-order.test)
-[other-solutions](https://www.codewars.com/kata/5467e4d82edf8bbf40000155/solutions/javascript)

                        #Rules:

#Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
#
#

