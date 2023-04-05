/* FUNCTIONS:
*0. Functions allow us to encapsulate a block of code, and execute that block of code whenever 
we want and how ever many times we want. You can think of them as predefined commands for performing 
an action. A function can accept inputs, processes those inputs, and return a new data value. A f
unction will always be undefined if there is no return statement.
*/

/* 1. There are two phases to using functions. First we must declare, or define, the function which can 
be thought of as creating the function. Next we can execute the function. This can also be called calling 
or invoking the function. This can be thought of as using the function. Before you can use your function, 
you must first define your function. This is simply the process of designing code that you want to 
execute when your function is called. The keyword to declare a function is function. There are up to four 
parts to a function declaration, the name, parameter(s), function body, and return statement. The syntax 
for a named function is: 

	function name(parameter) {
		<function body>
		return statement
	}
*/

/* 2. Functions can OPTIONALLY take parameters. So they can take no parameters or as many as required. 
Parameters are just placeholders for arguments that are later “passed” or given to the function at call 
time. If a function takes parameters, they go inside the parentheses, if not, leave the parentheses empty. 
Functions can also OPTIONALLY use a return statement to return value by using the keyword return followed 
by a value. A return statement stops the execution of the function and returns a value. If no return 
statement is used, by default the function will return a value of undefined. Return statements can only 
be used in a function body. 
*/

function faveColor() {
	'favorite color is green';
} 
// => will return undefined because no return statement is used


function addNums(num1, num2) { //function name addNums with parameters in parentheses
	return num1 + num2;
}
// => will return the values of num1 and num2 added together


/* 3. A function call instructs the computer to execute the code in the body and perform that 
action once. Every function call takes the form of: nameOfFunction(). If there were parameters, 
what goes into the parentheses are arguments. If the parameters are placeholders, the arguments 
are the data inputs passed into those placeholders. Arguments can be any data type. Not all 
function calls require arguments. If the function needs arguments, put them in the parentheses, 
if not leave the parentheses empty. 
*/

function addNums(num1, num2) {
	return num1 + num2;
} 
addNums(1, 2); //function call with arguments passed in in place of num1 and num2
console.log(addNums(1, 2)); // prints => 3


function faveColor(color) {
  return color + ' is my favorite color.'
}
faveColor('green'); // function call with green as the argument
console.log(faveColor('green')); // prints => ‘green is my favorite color.’


//4. function expressions
/* A function expression is used to define a function inside any expression. The function expression 
allows us to create an anonymous function that doesn’t have any function name which is the main 
difference between function expression and function declaration. A function expression has to be stored 
in a variable and can be accessed using the variable name. 
*/
var multiply = function(num1, num2) {
  return num1 * num2;
}
var times = multiply(2, 4);
console.log(times); // prints => 8


//5. scope
/* Scope refers to what variables or constants are accessible, and where they are accessible. Global 
scope is the scope that contains, and is visible in, all other scopes. Local scope, or function scope, 
refers to declarations that happen within the body of the function. These declarations are only available 
withing the function itself and any functions declared within it. Generally, functions enclose as scope 
and protect their variables from parent scopes, including the global scope. Functions can access the 
variables in their parent scopes, but parent scopes cannot access variables in child scopes. Block scope 
refers to a type of local scope that involves any pair of curly braces. Only variables declared with let 
or const are block scoped.
*/
let a = 5;
function number() {
  let b = 2; 
  return b;
}
console.log(number()); // prints => 2
console.log(a); // prints => 5 (because variable a is global scope)
console.log(b); // prints => ReferenceError: b is not defined (b only available inside the function)

//Functions can modify variables from the global scope
let bigCat = 'tiger'; //global variable
function newAnimal() {
  bigCat = 'jaguar';
}
newAnimal();
console.log(bigCat); // prints => 'jaguar'


//6. closure
/* A function definition can carry within its body references to variables in its parent scope. This 
is called closure. The function definition forms a closure around the environment in which it was defined. 
This means the invocation of the function has access to variables of its parent scope. In JavaScript, 
closures are created every time a function is created. Closures are useful when returning functions from 
functions. They keep variables alive in returned functions. Closure not only gives you access to a value 
from the parent scope, it also allows you to hold onto it and modify it. 
*/
function doSomething() { 
  var outerFunc = 'here i am'; 
  return function() { 
  	console.log(outerFunc); 
  } 
} 
var example = doSomething(); //creates function 
console.log(example()); // prints => ‘here i am’
