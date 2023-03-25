/* STRING MANIPULATION:
*0. In JavaScript, strings are immutable and help us to store text that includes characters, numbers, and letters.  
JavaScript includes many built-in functions for creating and manipulating strings in various ways.
*1. Strings, like arrays, have indexes starting from 0. The first character is in position 0, the second is in 
position 1 and so on. We can use these indexes to manipulate strings with string methods.
*/

//1. String manipulation with operators //
/* A string operator is an operator that operates on a string. There are two operators used for modifying strings, 
and they are called concatenate, +, and concatenate assignment, +=. These operators allow you to join one string 
to another easily. 
*/
let firstName = 'Eric';
let lastName = 'Stern';
let fullName = firstName + ' ' + lastName;
console.log(fullName); // prints => ‘Eric Stern’


var intro = 'My name is ';
var myName = intro += 'Eric';
console.log(myName); // prints => ‘My name is Eric’


//2. String manipulation with methods //
//Strings can also be manipulated with certain methods built into JavaScript. 


//1. length property
//This property returns the numbers of characters in a given string.
var intro = 'My name is Eric';
console.log(intro.length); // prints => 15


//2. toUpperCase and toLowerCase methods
/* The toUpperCase() method returns the string value converted to upper case. The toLowerCase() 
method works like the toUpperCase() method, except ot converts the string to lower case. 
*/
var word = 'upper';
console.log(word.toUpperCase()); // prints => ‘UPPER’


var small = 'SMALLER';
console.log(small.toLowerCase()); // prints => ‘smaller’


//3. slice() method
/* The slice() method extracts a section of a string and returns it as a new string, without 
modifying the original string.
*/
var sentence = 'Take part of it';
var slice = sentence.slice(5, 9);
console.log(sentence);//  prints => ‘Take part of it’
console.log(slice); // prints => ‘part’


//4. split() method
//The split() method divides a string into an ordered list of substrings, and returns them in an array.
var sentence = 'Split this sentence.';
var split = sentence.split(' ');
console.log(sentence); // prints => ‘Split this sentence.’
console.log(split); // prints => [‘Split’, ‘this’, ‘sentence.’]


//5. replace() method
/* The replace() method returns a new string with some or all of the string replaced. Only the first 
occurrence will be replace.
*/
var sentence = 'Replace part of this sentence.';
console.log(sentence.replace('this', 'that')); // prints => “Replace part of that sentence.’


//6. concat() method
//The concat() method joins two or more strings.
var greeting = 'Hello';
var word = 'there';
console.log(greeting.concat(' ', word)); // prints => ‘Hello there’
