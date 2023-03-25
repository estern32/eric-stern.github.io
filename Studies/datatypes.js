/* 
*DATA TYPES: 
*0. Data types describe the different types or kinds of data that we're going to be working 
with and storing in variables.  A data type is a classification that specifies which type of 
value a variable has and what type of operations can be applied to it without causing an error.
*/   
 
//1. number // 
/* A primitive data type that refers to numeric data. It can refer to whole numbers or decimal 
numbers. They can be used to perform mathematical calculations.  
*/
let added = 2 + 2; 
console.log(added); //prints => 4 
 
//2. string 
/* A string is a sequence of one or more characters that may consist of letters, numbers, or symbols, 
surrounded by single or double quotes. Strings are a primitive data type. They are immutable, which 
means they are unchanging, although the variable that holds it may be reassigned another value. 
*/
let sentence = 'My name is Eric.'; 
console.log(sentence); prints => 'My name is Eric.' 
 
let myVar = 'Eric'; 
myVar.toUpperCase(); 
console.log(myVar); // prints => ‘Eric’ 
 
let myVar = 'Eric'; 
let newVar = myVar.toUpperCase(); 
console.log(newVar); //prints => ‘ERIC’ 
 
//3. boolean 
//A primitive data type that represents one of two values: true or false. Can be thought of as an on/off switch.  
console.log(10 > 4); // prints => true 
console.log(10 < 4); // prints => false 
 
//4. array 
/* An ordered collection that allows us to store a list of values of any data type as one variable. 
Each value is called an element specified by an index starting with index 0. An array is a complex 
data type and array size is dynamic. You can access and manipulate arrays using indexes and bracket 
notation.  The values are enclosed in square brackets. 
*/

let array = ['a', 'b', 'c']; 
console.log(array[1]); //prints => ‘b’ 
 
let array = ['a', 'b', 'c']; 
array[1] = 32;  
console.log(array); //prints => [‘a’, 32, ‘c’] 
 
//5. object 
/* A complex data type that collects data in the form of key/value pairs called properties.  
A property is an association between a name (or key) and a value. Unlike arrays, values inside 
of an object are not ordered so they don't have indexes. Instead you can think of the key as 
the position of the value in an object.  You can access and manipulate an object using dot notation 
if you know the name of the key, or bracket notation. Keys are considered strings, so if using 
bracket notation the key name needs to be wrapped in quotes. The object is enclosed in curly braces. 
*/
let obj = { 
  firstName: 'Eric', 
  lastName: 'Stern' 
} 
obj.Name = 'Tom'; 
console.log(obj['firstName']); //prints => ‘Tom’ 
 
let obj = { 
  firstName: 'Eric', 
  lastName: 'Stern' 
} 
obj['age'] = 34; 
console.log(obj.age); //prints => 34 
 
//6. function 
/* A block of reusable code that performs a specific task. A function can be defined using 
the function keyword, followed by the name of a function and parentheses. Optionally, a list 
of input parameters can be included within the parentheses. The code block that needs to be 
executed when the function is called is written within curly braces.  To use the function we 
need to call it by typing the function name followed by parentheses. If the function declaration 
included parameters, to call we pass in values, called arguments, to the parentheses. Functions 
can be passed as arguments to other functions, assigned to variables, and even returned to other 
functions. Functions return a single output. By default, functions will return undefined. 
*/ 
//function declaration 
function greeting(name) { 
console.log('Hello ' + name); 
} 
//function call 
greeting('Eric'); // prints => ‘Hello Eric’ 
 
function add(num1, num2) { 
console.log(num1 + num2); 
} 
add(3, 7); // prints => 10 
 
//7. undefined 
/* Represents the primitive value undefined. A variable that has not been assigned a value 
is of type undefined. A method or statement also returns undefined if the variable that is being 
evaluated does not have an assigned value. A function returns undefined if a value was not returned. 
*/
let name; 
console.log(name); //prints => undefined 
 
function add(num1, num2) { 
num1 + num2; 
}  
console.log(add(3, 7)); //prints => undefined because no return keyword 
 
//8. null 
/* A primitive value that represents the intentional absence of any object value. Programmers 
often assign null to a variable to denote that the variable is declared and initialized, but 
currently doesn't hold a value. Null is a falsy value. 
*/
function greeting(who) { 
  if (!who) { 
	return null; 
  } 
  return 'Hello ' + who; 
} 
console.log(greeting('Eric')); //prints => ‘Hello Eric’ 
console.log(greeting()); //prints null because the who parameter has no value 
 
//null is a falsy value 
if (null) { 
  console.log('null is truthy'); 
} else { 
  console.log('null is falsy'); // prints => 'null is falsy' 
} 
 
//9. NaN 
/* NaN stands for Not-a-Number, and it represents a value that is not a valid number. 
It can be used to check whether a number entered is a valid number or not a number. Since 
NaN always compares unequal to any number, including NaN, it is usually used to indicate an 
error condition for a function that should return a valid number. The isNaN() function 
determines whether a value is NaN when converted to a number. 
*/
if (isNaN('34')) { 
  console.log('Not a number'); 
} else { 
  console.log('Is a number'); 
}  
//prints => ‘Is a number’ 
 
if (isNaN('Eric')) { 
  console.log('Not a number'); 
} else { 
  console.log('Is a number'); 
}  
//prints => ‘Not a number’ 
 
//10. infinity and –infinity  
/* Infinity is a number that represents positive infinity. -Infinity represents negative infinity. 
A number reaches Infinity when it exceeds the upper limit for a number: 1.797693134862315e+308. 
A number reaches -Infinity when it exceeds the lower limit for a number: -1.797693134862316e+308. 
Dividing any number by zero will also equal infinity. 
*/
console.log(-1.8e+308) //prints => -Infinity 
 
console.log(1/0) // prints => Infinity 
 
//11. difference between primitive/simple and complex data types 
/* Primitive/simple data types include data types such as: string, number, boolean, undefined and null. 
Primitive data is simple because they have a definite size when stored in memory, and they cannot store 
or collect other values besides themselves. So strings cannot be stored within numbers or booleans and 
vice versa. All primitive data types are immutable, which means they cannot be altered although the variable 
that holds it may be reassigned another value. Complex data types, collections, are able to store multiple 
types and values of data within one value. They can contain any number of values. Complex data types include 
objects, arrays and functions. 
*/
let firstName = 'Eric'; 
firstName[1] = 'R'; 
console.log(name); //prints => ‘Eric’ because primitive values are immutable.  
//If you wanted to print ‘ERic’ would have to reassign the variable 
 
let arr = [1, 2, 3, 4]; 
arr.push(5); 
arr.push(6); 
console.log(arr); //prints => [1, 2, 3, 4, 5, 6] 
 
let obj = { 
  firstName: 'Eric', 
  lastName: 'Stern' 
} 
obj.lastName = 'Last Name'; 
console.log(obj); //prints  => { firstName: ‘Eric’, lastName: ‘Last Name’ } 
 
//12. primitive values are passed to a function BY COPY, complex values are BY REFERENCE 
/* Primitive types are copied by value. Whenever a variable that points to a primitive data type 
is referenced, a copy of the value that the variable is pointing to is created.  
*/
let a = 5; 
let b = a; 
console.log(b); //prints => 5 (the value stored in a is COPIED to b) 
 
let c = 5; 
let d = c; 
d = 10; 
console.log(c); //prints => 5 (changing the value of d doesn’t effect what is stored in c) 
 
/* Complex types are copied by reference. Whenever a variable that points to a complex data type 
is referenced, a copy of the reference that the variable is pointing to is created. When you compare 
the complex data types you are really comparing the references. 
*/
let x = { num: 5 }; 
let y = x; //the value stored in y is a REFERENCE to the value stored in x. They now both point to the same object.
y.num = 10;  
console.log(x.num); // prints => 10 
/* changing the value at y affects all references because variable y points to the reference in memory where 
object x is store 
*/ 
//x === y 
