/** 
*VARIABLES: 
*0. Variables are named identifiers that point to values of different types, and holds those values in memory.  
Variables are called so because, unless created with the const keyword, can be reassigned to *another value. 
Variables are able to either contain value, in the case of primitive value types such as strings and numbers, 
or point to a location in memory where we have stored a complex value such as an array or object.                                                                                                                                                   
*1. To create a variable we use a keyword, var, let  or const, followed by a name for our variable.     
*2. There are two phases of using variables: declaration and initialization (or assignment).                         
*/ 
 
// 1. declaration // 
// At the declaration phase, the variable myName is undefined because we have not initialized it to anything.  
var myName; 
console.log(myName); // prints => undefined 
 
// 2. initialization or assignment  
// When you assign a value to an undeclared variable 
myName = 'Eric'; 
console.log(myName); // prints => Eric 
 
// 3. reassignment 
// Changing or updating the value of a previously assigned variable 
myName = 'Tom'; 
console.log(myName); // prints => Tom 
 
// 4. var keyword 
/* Var variables are initialized with a value of undefined. They are globally or functionally scoped.  
They can be reassigned and updated.  
*/
var age; 
var age = 34; 
console.log(age); // prints => 34 
 
// 5. let keyword 
/* Let comes as an improvement to the var keyword. Variables declared with let are block scoped 
so let variables are only available for use in the block that they are declared. Let can be 
reassigned, but not redeclared. 
*/
let greeting = 'Hi'; 
if (bool = true) { 
let otherGreeting = 'Hello';  
console.log(otherGreeting); // prints => ‘Hello’ 
} 
console.log(greeting); // ReferenceError: otherGreeting is not defined 
 
// 6. const keyword 
/* Variables declared with const maintain constant values. They cannot be redeclared OR reassigned. 
They also can only be accessed in the block they were declared. Every const declaration, therefore, 
must be initialized at the time of declaration.  
*/
const color = 'red'; 
color = 'green'; 
console.log(color); // Error: Assignment to constant variable 
 
const colorTwo = 'red'; 
const colorTwo= 'green'; 
console.log(colorTwo); // Error: color has already been declared 
 
// 7. hoisting 
/* Hoisting is a process where the interpreter loads variable and function declarations 
into memory during the compile phase before executing the code. Variable declarations (name only) 
and function declarations (name AND body) are taken to the top of their scope. Let and const 
variables are hoisted, only they are hoisted without a default initialization. This makes them inaccessible. 
Variables declared with var, on the other hand, are hoisted with a default initialization of undefined. 
*/
animal = 'dog'; 
var animal; 
console.log(animal); // prints => ‘dog’ 
 
animal = 'dog'; 
let animal; 
console.log(animal); // ReferenceError: Cannot access ‘animal’ before initialization 
