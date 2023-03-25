/*LOOPS:
*0. Loops are used to perform repeated tasks based on a condition. Conditions typically return 
true or false. A loop will continue running until the defined condition returns false. Loops 
are built in constructs that allow us to run a block of code as many times as needed. 
*1. The three main types of loops are the for, while and for-in loops. 
*/

//1. for loops //
/* The for loop consists of the initialization expression, the condition and the updated expression, 
followed by a code block. The initialization, or the start, is the variable that counts the number of 
repetitions. We initialize it where we want to start counting. The condition is checked each time before 
the loop runs. If it evaluates to true, the statement or code in the loop is executed. If it evaluates 
to false, the loop stops. While the condition is true, keep running the code block. If the condition 
starts as false, your loop will never execute, and if the condition never becomes false then your loop 
will run infinitely. The updated expression is executed after each iteration of the loop. This is usually 
used to increment a counter, but can be used to decrement a counter instead. Without this, an infinite 
loop would occur. For loops come in handy when we know the exact number of times we want to execute the code block.
*/

var numbers = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// prints => 1 2 3 4 5 6


var numbers = [0, 1, 2, 3, 4, 5, 6];
for (var i = numbers.length - 1; i >= 0; i -= 2) {
  console.log(numbers[i]);
}
//prints => 6 4 2 0


//2. while loops
/* The while loop starts by evaluating a condition. If the condition evaluates to true, the 
code in the code block gets executed. If the condition evaluates to false, the code in the 
code block is not executed and the loop ends. While loops are most fitting for instances where 
you want to loop based on whether or not a condition is true, or when you need to repeat an 
action but not for a definite number of times each time. Like in the for loop, failing to 
increment your variable will cause an infinite loop. 
*/

var count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
// prints => 0 1 2 3 4

var count = 4;
while (count >= 0) {
  console.log(count);
  count--;
}
// prints => 4 3 2 1 0


//3. for-in loops
/* There is another loop that is used specifically to iterate over objects in Javascript called 
a for-in loop. Like the name suggests, it allows you to iterate over all of the keys in an object 
that you designate. You must use bracket notation when looping over object properties. 
*/

var object = {  
  firstName: 'Eric',
  lastName: 'Stern',
  homeTown: 'New Orleans'
} 

for (var key in object) { 
  console.log(key); 
  console.log(object[key]); 
} 
/* prints =>
firstName
Eric
lastName
Stern
homeTown
New Orleans
*/
