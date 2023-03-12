
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  //create base variable
  let pound = '';
  //loop through until you reach num and add a # 
  for (let i = '#'; i.length <= num; i += '#') {
    //print pound
    pound = console.log(i);
  }

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(num1, num2) {
  //loop through numbers 1-100
  for (let i = num1; i <= num2; i++) {
    //if divisible by 3 and 5 print FizzBuzz
    if (i % 3 === 0 & i % 5 === 0) {
      console.log('fizzbuzz');
      //if divisible by 5 print Buzz
    } else if (i % 5 === 0) {
      console.log('buzz');
      //if divisble by 3 print Fizz
    } else if (i % 3 === 0) {
      console.log('fizz');
      //else print i
    } else {
      console.log(i);
    }
  }
}


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(end) {
  //create base string
  let string = '';
  //create variable to hold the size
  let size = end;
  //loop through the lines
  for (let i = 0; i < end; i++) {
    //loop through the characters in each line
    for (let j = 0; j < end; j++) {
      //for lines where i is even start with a ' ', otherwise start with a #
      if (i % 2 === 0 && j % 2 === 0) {
        string += ' ';
      } else if (i % 2 === 0 && j % 2 === 1) {
        string += '#';
      } else if (i % 2 === 1 && j % 2 === 0) {
        string += '#';
      } else if (i % 2 === 1 && j % 2 === 1) {
        string += ' ';
      } 
    }
    //add new lines
    string += '\n';
  }
  //console.log and return string
  console.log(string);
  return string;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
