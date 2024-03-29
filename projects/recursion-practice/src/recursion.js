// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base //if n === 0 return 1
  if (n === 0) {
    return 1;
  //if n is negative return null
  } else if (n < 0) {
    return null;
  }
  //call function until base is hit
  return n * factorial(n - 1);
};


// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

var sum = function(array, output = 0) {
  //base
  if (array.length === 0) {
    return output;
  }
  //recursion
  output += array[0];

//remove first element from the array each function call until base is hit
  return sum(array.slice(1), output);
};


// 3. Sum all numbers in an array containing nested arrays.  //SKIP FOR NOW (BLUE)
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  //if n is positive
  if (n >= 0) {
  //if n ends at 1 will be odd and should return false
    if (n === 1) {
      return false;
    //if n ends at 0 will be even and should return true
    } else if (n === 0) {
      return true;
   } 
   //subtract 2 each call for positive numbers
   return isEven(n - 2);
  //if n is negative
  } else {
    if (n === 1) {
      return false;
    } else if (n === 0) {
      return 0;
    }
    //add 2 each call for negative numbers
    return isEven(n + 2);
  }
};


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, output = 0) {
  //if n is positive
  if (n >= 0) {
    //base
    if (n === 0) {
      return output;
    }
    //recursion
    output += n - 1;
    //call function until base is hit
    return sumBelow(n - 1, output);
    //if n is negative
  } else {
    //base
    if (n === 0) {
      return output;
    }
    //recursion
    output += n + 1;
    //call function until base is hit
    return sumBelow(n + 1, output);
  }
};


// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output = []) {
  if (x === y) {
    return [];
  } else if (x > y) {
    //base
    if (x - 1 === y) {
      return output;
    }
    //recursion
    output.push(x - 1);
    return range(x - 1, y, output);
  } else if (x < y) {
      //base
      if (x + 1 === y) {
        return output;
      }
      //recursion
      output.push(x + 1);
      return range(x + 1, y, output);
  }
  
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp, output = 1) {
  //if exp is positive
  if (exp >= 0) {
    //base
    if (exp === 0) {
      return output;
    }
    //recursion //multiply base times itself until exp is 0
    output *= base;
    return (exponent(base, exp - 1, output));
    //if exp is negative
  } else if (exp < 0) {
    if (exp === 0) {
      return output; 
    }
    //recursion
  return 1 / exponent(base, -exp);
  }
};
// return power(base, exponent+1)/base

      

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //if n is 0 return false
  if (n === 0) {
    return false;
    //if n is 1 or 2 return true
  } else if (n === 1 || n === 2) {
    return true;
    // n > 2 use recursion
  } else {
    //divide n by 2 if it's now less than 2 it is not a power of 2
    let result = n / 2;
    if (result < 2) {
        return false;
        //if n / 2 is 2 then it is a power of 2
    } else if (result === 2) {
        return true;
        //otherwise call the function with n divided by 2
    } else {
        return powerOfTwo(n / 2);
    }
  }
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, output = '') {
  //base
  if (string.length === 0) {
    return output;
  }
  //recursion
  // add last character from string to output
  output += string[string.length - 1];
  //call function after removing last character
  return reverse(string.slice(0, -1), output);

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string, output = true) {
  //remove spaces and make all lower case
  let newStr = string.replace(/[^a-z0-9]/i, '').toLowerCase();
      //if string length is 1 return true
  if (newStr.length === 1) {
    return true;
      //if string length is 2 and both characters are the same return true
  } else if (newStr.length === 2) {
    return newStr[0] === newStr[1];
  }
  if (newStr.length > 2) {
    //if first and last letter arent equal return false
    if (newStr[0] !== newStr[newStr.length - 1]) {
      return false;
        //if they are output = true
    } else if (newStr[0] === newStr[newStr.length - 1]) {
      output = true
    } 
    //call function with first and last character of string removed
    return palindrome((newStr.substring(1, newStr.length - 1)), output);
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the   //SKIP FOR NOW (BLUE)
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y, output = 0) {
  if (x < 0 && y < 0) {
    if (y === 0) {
      return output + output + output;
    }
    output -= x;
    return multiply(x, y + 1, output);
  } else if (x < 0 && y >= 0) {
    if (y === 0) {
      return output;
    }
    output += x;
    return multiply(x, y - 1, output);
  } else if (x >= 0 && y < 0) {
    if (y === 0) {
      return output;
    }
    output -= x;
    return multiply(x, y + 1 , output);
  } else if (x >= 0 && y >= 0) {
  if (y === 0) {
    return output;
  }
  output += x;
  return multiply(x, y - 1 , output);
}
};



//multiply(2, 4); 2 + 2 + 2 + 2


// 13. Write a function that divides two numbers without using the / operator  or   //SKIP FOR NOW (BLUE)
// JavaScript's Math object.         
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two   //SKIP FOR NOW (BLUE)
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2, output = false) {
  //if string lengths arent equal output is false
  if (str1.length !== str2.length){
    output = false;
    //if both are empty strings output is true
  } else if (str1 === '' && str2 === '') {
    output = true;
  }
  //base
  if (str1.length === 0) {
    return output;
  }
  //if str1 === str 2 output is true, else return false
  if (str1[0] === str2[0]) {
    output = true;
  } else {
    return false;
  }
  //call function with first characters of each string removed
  return compareStr(str1.slice(1), str2.slice(1), output);
  
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, output = []) {
  //base
  if (str.length === 0) {
    return output;
  }
  //recursion //push first character of string to output array
  output.push(str[0]);
  //call function with first character removed from str
  return createArray(str.slice(1), output);
};

// 17. Reverse the order of an array
var reverseArr = function (array, output = []) {
  //base
  if (array.length === 0) {
    return output;
  }
  //push last element of array to new array
  output.push(array[array.length - 1]);
  //call function with last element of array removed
  return reverseArr(array.slice(0, -1), output);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output = []) {
  //base
  if (length === 0) {
    return output;
  }
  //push value to array
  output.push(value);
  //call function with length - 1
  return (buildList(value, length - 1, output));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, output = 0) {
  //base
  if (array.length === 0) {
    return output;
  }
  //if first element in array === value add 1 to output
  if (array[0] === value) {
    output += 1;
  }
  //call function with first element removed
  return countOccurrence(array.slice(1), value, output);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output = []) {
  //base
  if (array.length === 0) {
    return output;
  }
  //push result of callback function on first element of array
  output.push(callback(array[0]));
  //call function with first element of array removed
  return rMap(array.slice(1), callback, output);
};

// 21. Write a function that counts the number of times a key occurs in an object.   //SKIP FOR NOW (BLUE)
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.   //SKIP FOR NOW (BLUE)
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename   //SKIP FOR NOW (BLUE)
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent   //SKIP FOR NOW (BLUE)
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //index 0 === 0
  if (n === 0) {
    return 0;
  //index 1 and 2 === 1
  } else if (n > 0 && n < 2) {
    return 1;
    //negative numbers return null
  } else if (n < 0) {
    return null;
  } else {
    //otherwise will equal the sum of the two indexes before
    return (nthFibo(n - 1)) + (nthFibo(n - 2));
  }
  
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output = []) {
  //base
  if (input.length === 0) {
    return output;
  }
  //push the first element of input capitalized to output array
  output.push(input[0].toUpperCase());
  //call function with first element of input removed
  return capitalizeWords(input.slice(1), output);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output = []) {
  //base
  if (array.length === 0) {
    return output;
  }
  //capitalize first letter of 0 index
  let cap = array[0].charAt(0).toUpperCase();
  //slice rest of 0 index
  let slice = array[0].slice(1);
  //push combined capitalized first letter and sliced rest to output
  output.push(cap + slice);
  //call function with first element of array removed
  return capitalizeFirst(array.slice(1), output);
};

// 28. Return the sum of all even numbers in an object containing nested objects.   //SKIP FOR NOW (BLUE)
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.            //SKIP FOR NOW (BLUE)
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  //base
  if (str.length === 0) {
    return obj;
  }
  //if obj[str[0]] exists add 1,
  if (obj[str[0]]) {
    obj[str[0]] += 1;
    //if not, create it with a value of 1
  } else {
    obj[str[0]] = 1;
  }
  //call function with first character of str removed
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output = []) {
  //base
  if (list.length === 0) {
    return output;
  }
  //if first element and second element arent the same push first element to output
  if (list[0] !== list[1]) {
    output.push(list[0]);
  }
  //call function with first element removed
  return (compress(list.slice(1), output));
};

// 32. Augment every element in a list with a new value where each element is an array   //SKIP FOR NOW (BLUE)
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, output = []) {
  //base
  if (array.length === 0) {
    return output;
  }
  //if first element is not 0 push to output array
  if (array[0] !== 0) {
    output.push(array[0]);
    //if the first element is 0 and the second element is not 0 push to output array
  } else if (array[0] === 0 && array[1] !== 0) {
    output.push(array[0]);
  }
  //call function with first element removed
  return minimizeZeroes(array.slice(1), output);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, output = []) {    
  //base
      if (array.length === 0) {
        return output;
      }
      //if first element is positive, make sure second element is negative. Push new elements to output
      if (array[0] > 0) {
        output.push(array[0]);
        if (array[1] > 0) {
          output.push(array[1] * -1)
        } else {
          output.push(array[1]);
        }
        //if first element is negative change to positive, and make sure second element is negative. Push to output
      } else if (array[0] < 0) {
        output.push(array[0] * -1);
        if (array[1] > 0) {
          output.push(array[1] * -1)
        } else {
          output.push(array[1]);
        }
      }
      //call function removing first two elements of array
      return alternateSign(array.slice(2), output);
    };

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, output = '') {
  //create array of number word strings 
  let numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  //split string to array
  let strArr = str.split(' ');
  //create a string for callback function
  var backToStr = (strArr.slice(1)).join(' ');
  //base
  if (str.length === 0) {
    return output;
  }
  // if first element in strArr is a number add the word equivalent to output
  if (Number(strArr[0]) > 0) {
    output += (numWords[Number(strArr[0])] + ' ');
    //if strArr[0] is last element add it to output without a space at the end
  } else if (strArr[0] === strArr[strArr.length -1]) {
    output += strArr[0];
    //else add it to output with a space at the end
  } else {
    output += (strArr[0] + ' ');
  }
  //call function until no more characters remaining
  return numToText(backToStr, output);

};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
