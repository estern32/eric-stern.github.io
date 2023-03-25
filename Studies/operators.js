/* 
*OPERATORS:
*0. Operators are special symbols that perform some operation on single or multiple operands (data value) 
and produces a result. Operators are used to perform specific mathematical and logical computations on 
operands. Operators are used to compare values and perform arithmetic operations. 
*/
 
//1. ASSIGNMENT OPERATORS // 
//Assignment operators assign a value to its left operand based on the value of its right operand. 
 
//1. assignment operator 
//The simple assignment operator, =, is used to assign value to a variable. 
let x = 10; 
console.log(x); prints => 10 
 
//2. addition assignment operator 
/* The addition assignment operator, +=, adds a value to a variable and assigns the result to the 
variable. The types of the two operands determine the behavior of the addition assignment operator. 
*/
let y = 'Operation '; 
y += 'Spark'; 
console.log(y); //prints => ‘Operation Spark’ 
 
//3. subtraction assignment operator 
//The subtraction assignment operator, -=, subtracts a value from a variable and assigns the result to the variable. 
let num = 10; 
num -= 4; 
console.log(num); //prints => 6 
 
//4. multiplication assignment operator 
//The multiplication assignment operator, *=, multiplies a variable and assigns the result to the variable. 
let number = 10; 
number *= 4; 
console.log(number); //prints => 40 
 
//5. division assignment operator 
//The division assingment operator, /=, divides a variable and assigns the result to the variable. 
let divide = 10; 
divide /= 5; 
console.log(divide); //prints => 2 
 
//6. remainder assignment operator 
/* The remainder assignment operator, %=, divides a variable by the value of the right operand and 
assigns the remainder to the variable. 
*/
let remainder = 10; 
remainder %= 5; 
console.log(remainder); //prints => 0 
 
//7. exponential assignment operator 
//The exponentiation assignment operator, **=, raises a variable to the power of the operand. 
let exponent = 2; 
exponent **= 3; 
console.log(exponent); //prints => 8 //2 * 2 * 2 
 
//2. ARITHMETIC OPERATORS // 
/* Arithmetic operators are operators that operate upon numerical values and return a numerical 
value. Any kind arithmetic operations performed required these operators. A typical arithmetic 
operation operates on two numbers. 
*/
 
//1. addition operator 
//The addition operator, +, adds numbers. 
let x = 5; 
let y = 2; 
console.log(x + y); //prints => 7 
 
//2. subtraction operator 
//The subtraction operator, -, subtracts numbers. 
let x = 5; 
let y = 2; 
console.log(x - y); //prints => 3 
 
//3. multiplication operator 
//The multiplication operator, *, multiplies numbers. 
let x = 5; 
let y = 2; 
console.log(x * y); //prints => 10 
 
//4. division operator 
//The division operator, /, divides numbers.  
let x = 5; 
let y = 2; 
console.log(x / y); //prints => 2.5 
 
//5. exponentiation operator 
//The exponentiation operator, **, raises the first operand to the power of the second operand. 
let x = 5; 
let y = 2; 
console.log(x ** y); //prints => 25 //5 * 5 
 
//6. modulus operator  
//The modulus operator, %, returns the division remainder. 
let x = 5; 
let y = 2; 
console.log(x % y); //prints => 1 // remainder of 1 
 
//7. increment operator 
/* The increment operator, ++, increments (adds one to) its operand and returns the value before 
or after the increment, depending on where the operator is placed. 
*/
let x = 5; 
x++; 
console.log(x); //prints => 6 //5 + 1 
 
//8. decrement operator 
/* The decrement operator, --,  decrements (subracts 1 from) its operand and returns the value before 
or after the increment, depending on where the operator is placed. 
*/
let x = 5; 
x--; 
console.log(x); //prints => 4 //5 - 1 
 
//3. COMPARISON OPERATORS // 
/* Comparison operators compare data and return booleans. Comparison operators can compare numbers or strings, 
and perform evaluations. Expressions that use comparison operators do not return a number value as do arithmetic 
expressions. Comparison expressions return either 1, which represents true, or 0, which represents false. 
*/
 
//1. equality operator 
//The equality operator, ==, returns true if the operands are equal. 
let x = '34'; 
let y = 34; 
console.log(x == y); //prints => true 
 
//2. strict equality operator  
//The strict equality operator, ===, returns true if the operands are true AND of the same type. 
let x = '34'; 
let y = 34; 
console.log(x === y); //prints => false //false because one is a string and the other a number 
 
//3. inequality operator 
//The inequality operator, !=, returns true if the operands are not equal. 
let x = '34'; 
let y = 34; 
console.log(x != y); //prints => false //false because they are equal 
 
//4. strict inequality operator 
//The strict inequality operator, !==, if the operands are not equal AND/OR not of the same type. 
let x = '34'; 
let y = 34; 
console.log(x !== y); //prints => true //true because they are not of the same type 
 
//5. greater than operator 
//The greater than operator, >, returns true if the left operand is greater than the right operand.  
let x = 10;  
let y = 2; 
console.log(x > y); //prints => true 
 
//6. less than operator 
//The less than operator, <, returns true if the left operand is less than the right operand. 
let x = 10;  
let y = 2; 
console.log(x < y); //prints => false 
 
//7. greater than or equal operator 
//The greater than or equal operator, >=, returns true if the left operand is greater than or equal to the right operand. 
let x = 10;  
let y = 10;  
console.log(x >= y); //prints => true  
 
//8. less than or equal to operator 
//The less than or equal to operator, <=, returns true if the left operand is less than or equal to the right operand. 
let x = 10;  
let y = 5; 
console.log(x <= y); //prints => false 
 
//4. LOGICAL OPERATORS // 
/* Logical operators allow you to compare variables and do something based on the result of that 
comparison. If the result of the comparison is true, you can run a block of code, if it’s false, 
you can execute another code block. 
*/
 
//1. logical AND operator 
//The logical AND operator, &&, returns true if both operands are truthy, and false otherwise. 
console.log(1 === 1 && 1 === '1'); //prints => false 
  
console.log('Eric' === 'Eric' && 'Stern' !== 'Eric'); //prints => true 
 
//2.. logical OR operator 
//The logical OR operator, ||, returns true if EITHER of the operands are true, and false otherwise. 
console.log(1 === 1 || 1 === '1'); //prints => true 
 
 
//5. UNARY OPERATORS //
/* A unary operation is an operation with only one operand. This operand comes either before or after
the operator. Unary operators are more efficient than standard JavaScript function calls. 
Additionally, unary operators can not be overridden, therefore their functionality is guaranteed.
*/

//1. logical NOT operator 
/* The logical NOT operator, !,  also called the bang operator, is typically used with boolean values. 
The logical NOT operator is a logical operator that will convert a value to its opposite boolean. 
Since JavaScript will coerce values, the operator will “convert” a value to its truthy/falsey form and 
return the opposite boolean value. When we perform the ! operation on a number other than 0 it returns 
false. This is because all numbers other than 0 are truthy values. The ! operator used on 0, null, undefined, 
and NaN returns true, since they are falsey values. 
*/

let a; 
console.log(!a); // prints => true //true because a is undefined 
 
let a = 5; 
console.log(!a); //prints => false 


//2. unary plus operator
/* The unary plus operator, +, precedes its operand and evaluates to its operand, but attempts to 
convert it to a number if it isn’t already. It can convert all string representations of numbers, 
boolean values (true and false), and null to numbers. If the operand cannot be converted into a number, 
the unary plus operator will return NaN.
*/
let x = false;
console.log(+x); // prints => 0


let word = 'word';
console.log(+word); // prints => NaN


//3. unary negation operator
/* The unary negation operator, -, works like the unary plus operator in that it attempts to convert a value 
to a number, but it then negates it. If the operand cannot be converted into a number, it will return NaN.
*/
let number = ‘3’;
console.log(-number); // prints => -3


let word = ‘bird’;
console.log(-word); // prints +. NaN


//4. typeof operator
/* The typeof operator returns the datatype of the value in the form of a string. The typeof operator 
can tell you if your value is a string, number, boolean, undefined or a function. The shortcoming of the 
typeof operator is that an array, an object and null will all return an object datatype.
*/
let arr = [1, 2, 3, 4];
console.log(typeof arr); // prints => object (even though it is an array)


console.log(typeof arr[0]); // prints => number


//5. delete operator
/* The delete operator used to delete an object’s property that already exists. it returns true and 
removes the property from the object. However, deleting an object property that doesn’t exist will not 
affect the object, but will still return true. The only time false will be returned is when the delete 
operator is used to delete a variable or a function.
*/
let fullName = {
	firstName: 'Eric', 
	lastName: 'Stern'
}
console.log(fullName.firstName); // prints => ‘Eric’
delete fullName.firstName;
console.log(fullName.firstName); // prints => undefined

//6. void operator
/* The void operator iis used when the function is not return anything. It means the void result is undefined. 
A function always returns something. In some situations we do not need to return anything so we must specify 
void operator in front of the function.
*/
let numb = void 32;
console.log(numb); // prints => undefined
let animal = void 'elephant';
console.log(animal); // prints => undefined

//6. TERNARY OPERATOR (a ? b : c) //
/* The ternary operator is a conditional operator which evaluates either of two expressions, 
a true expression and a false expression, based on a conditional expression that you provide. 
You have the condition which returns a truthy or falsy value. After the condition, you have 
the question mark (which you can think of as questioning the condition), followed by the true 
expression. This expression is executed if the condition expression evaluates to true. After 
the true expression, you have a colon, followed by the false expression. This expression is 
executed if the condition expression evaluates to false.
*/
let grade = 80;
let feedback = grade > 75 ? 'Great job': 'Could improve';
console.log(feedback); // prints => ‘Great job’
