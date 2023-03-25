/*CONTROL FLOW:
*0. The control flow is the order in which the computer executes statements. Code is run in 
order from the first line in the file to the last line, unless the computer runs across the 
structures that change the control flow, such as conditionals, functions or loops. Control flow 
means that when you read a script, you must not only read from start to finish, but also look 
at program structure and how it affects order of execution.
*1. We can make decisions in our code by asking true or false questions. Based on our answer, 
we decide which code runs if the question is true, and which code if the question is false. In 
JavaScript, conditional statements boil down comparison and values based on their truthyness or 
falseyness. Values will be changed into a boolean. This means the value is evaluated in a boolean context. 
*/

//1. if statement //
//An if statement executes a block of code if a specified condition is truthy.
var firstName = 'Eric';
if (firstName === 'Eric') {
  console.log('Raise your hand'); 
}
// prints => ‘Raise your hand’


//2. else statement
/* You can use an else statement to add a second block of code to run if the specified condition 
in the if statement does NOT return truthy. You can add the else statement onto the end of the if statement.
*/
if (10 < 2) {
  console.log(true);
} else {
  console.log(false);
}
// prints => false (because 10 is not less than 2)


//3. else-if statement
/* If you want to chain multiple code options together you can do so using else if statements. 
You want to make sure that you list your else if statements in an order such that the control flow 
makes sense. For example, if you were trying to return a certain grade for a certain score on a test, 
you would want to make the first if condition represents highest score and the lower scores as you 
proceed down your else if statements. The first truthy condition will get executed.
*/
var score = 91;
if (score > 60) {
  console.log('D');
} else if (score > 70) {
  console.log('C');
} else if (score > 80) {
  console.log('B');
} else if (score > 90) {
  console.log('A');
}
//prints => ‘D’
/* In this example we wanted to log ‘A’ to the console since the score is greater than 90. However, 
the first truthy condition reached is if (score > 60) so ‘D’ is logged.
*/

//4. switch statement
/* While if else statements will usually work just fine sometimes it will make for cleaner code to use 
a switch statement. The switch statement evaluates an input expression, matching the expression’s value 
to a case clause, and evaluates statements associated with that case. A break statement should end the 
case. Failing to add a break at the end of the block associated with a case will cause the next block 
to execute, whether that is what you intended or not. You can use a default clause which will be executed 
if no case matches the expression’s value. 
*/
var score = 80;
switch (score) {
  case 90:
      console.log('A');
      break;
  case 80:
      console.log('B');
      break;
  case 70:
      console.log('C');
      break;
  case 60:
      console.log('D');
      break;
  default: 
    console.log('F');
}
// prints => ‘B’
