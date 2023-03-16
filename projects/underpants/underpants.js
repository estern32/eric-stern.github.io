// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
//argument any value
//function has any value as argument
_.identity = function(value) {
    //return value unchanged
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
//function argument is any value
_.typeOf = function(value) {
    //if array return 'array
    if (Array.isArray(value)) {
        return 'array';
        //if undefined return 'undefined'
    } else if (value === undefined) {
        return 'undefined';
        //if null return 'null'
    } else if (value === null) {
        return 'null';
        //else return typeof value
    } else {
        return typeof value;
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
//function arguments are an array and a number
_.first = function(array, number) {
    //if array is not an array return []
    if (Array.isArray(array) === false) {
        return [];
        //if number is NaN return the first element
    } else if (isNaN(number) === true) {
        return array[0];
        //else return the first number of items of array
    } else {
        return array.splice(0, number);
    }
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
//function arguments are an array and a number
_.last = function(array, number) {
    if (Array.isArray(array) === false) {
        return [];
        //if number is NaN return the last element
    } else if (isNaN(number) === true) {
        return array[array.length - 1];
        //if number > array length return entire array
    } else if (number > array.length) {
        return array;
        //else return the last number of items of array
    } else {
        return array.splice(array.length - number, array.length - 1);
    }
}




/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
//function has arguments of array and value
_.indexOf = function(array, value) {
    //if value is not in array return -1
    if (array.includes(value) === false) {
        return -1;
        //else return index of first occurrance 
    } else {
        //loop through
        for (let i = 0; i < array.length; i++) {
            //return index of first occurance
            if (array[i] === value) {
                return i;
            }
        }
      
        }
    
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
//function has arguments of an array and a value
_.contains = function(array, value) {
    //use ternary operator to see if array include value
    return array.includes(value) ? true : false;
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
//function has arguments of a collection and a function
_.each = function(collection, func) {
    //if collection is an array, call function once for each element with given arguments
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
        //else it's an object
    } else {
        //call function once for each property with given arguments
        for (let key in collection) {
            func(collection[key], key, collection);
        }
    }
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
//function has an argument of an array
_.unique = function(array) {
    //create new array
    let newArr = [];
    //return a new array with all duplicates removed from array
    //loop through array
    for (let i = 0; i < array.length; i++) {
        //if newArr does not include element push to newArr
        if (newArr.includes(array[i]) === false) {
            newArr.push(array[i]);
        }
    }
    //return newArr
    return newArr;
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
//function has arguments of an array and a function
_.filter = function(array, func) {
    //create new array
    let newArr = [];
    //loop through array to see if test passes for each
    for (let i = 0; i < array.length; i++) {
        //call func for each element to see if truthy
        if (func(array[i], i, array)) {
            //if func call returns true push element into newArr
            newArr.push(array[i]);
        }
    }
    //return newArr
    return newArr;
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
//function has arguments of an array and a function
_.reject = function(array, func) {
    //create new array
    let newArr = [];
    //call func for each element of array passing given arguments
    for (let i = 0; i < array.length; i++) {
        //if calling function returns false push element to new array
        if (func(array[i], i, array) === false) {
            newArr.push(array[i]);
        }
    }
    //return newArr
    return newArr;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
//function has arguments of an array and a function
_.partition = function(array, func) {
    //create new array consisting of two sub arrays
    let newArr =[[], []];
    //call func for each element in array passing given arguments
    for (let i = 0; i < array.length; i++) {
        //if func returns something truthy push to one sub array
        if (func(array[i], i, array)) {
            newArr[0].push(array[i]);
            //if func returns something false push to the other sub array
        } else {
            newArr[1].push(array[i]);
        }
    }
    //return newArr
    return newArr;
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
//function has arguments of a collection and a function
_.map = function(collection, func) {
    //create new array
    let newArr = [];
    //call func for each element in collection passing the given arguments
    //if collection is an array
    if (Array.isArray(collection) === true) {
        //use for loop to iterate
        for (let i = 0; i < collection.length; i++) {
            //push return values to newArr
            newArr.push(func(collection[i], i, collection));
        }
        //if object
    } else {
        //iterate through object
        for (let key in collection) {
            //push return values to newArr
            newArr.push(func(collection[key], key, collection))
        }
    }
    //return newArr
    return newArr;
}

// for each???? collection.forEach((name, index, array) => func(name, index, array))
/*
let students = ['John', 'Sara', 'Jack'];

// using forEach
students.forEach(myFunction);

function myFunction(item) {

    console.log(item);
}
*/

/*
   newArr = collection.map(function(o) {
        return o[prop];
    });
*/



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
//function has arguments of an array of objects and a property
_.pluck = function(array, prop) {
    //create new array
    let newArr =[];
    //use .map to return the object values
    newArr = array.map(function(o) {
        return o[prop];
    });

    //return newArr
    return newArr;
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
//function has arguments of a collection and a function
_.every = function(collection, func) {
    //create base variable
    let allItemsPass = true;
    //determine if func did not receive a value
    if (func === undefined) {
        //is collection an array
        if (Array.isArray(collection)) {
            //loop through
            for (let i = 0; i < collection.length; i++) {
                //determine if current value is falsey
                if (!collection[i]) {
                    //change base variable
                    allItemsPass = false;
                }
            }
            //if object
        } else {
            for (let key in collection) {
                //determine if current value is not truthy
                if (!collection[key]) {
                    allItemsPass = false;
                }
            }
        }
    } else {
        //detemine if array
        if (Array.isArray(collection)) {
            //loop
            for (let i = 0; i < collection.length; i++) {
                //determine if the result of invoking function on current element, index and collection is not truthy
                if (!func(collection[i], i, collection)) {
                    allItemsPass = false;
                }
            }
            //if object
        } else {
            //loop
            for (let key in collection) {
                //determine if the result of invoking function on current value, key and collection is not truthy
                if (!func(collection[key], key, collection)) {
                    allItemsPass = false;
                }
            }
        }
        //return allItemsPass
    } return allItemsPass;
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
//function has arguments of a collection and a function
_.some = function(collection, func) {
    //create base variable
    let allItemsPass = false;
    //determine if func did not receive a value
    if (func === undefined) {
        //is collection an array
        if (Array.isArray(collection)) {
            //loop through
            for (let i = 0; i < collection.length; i++) {
                //determine if current value is truthy
                if (collection[i]) {
                    //change base variable
                    allItemsPass = true;
                }
            }
            //if object
        } else {
            for (let key in collection) {
                //determine if current value is not truthy
                if (collection[key]) {
                    allItemsPass = true;
                }
            }
        }
    } else {
        //detemine if array
        if (Array.isArray(collection)) {
            //loop
            for (let i = 0; i < collection.length; i++) {
                //determine if the result of invoking function on current element, index and collection is truthy
                if (func(collection[i], i, collection)) {
                    allItemsPass = true;
                }
            }
            //if object
        } else {
            //loop
            for (let key in collection) {
                //determine if the result of invoking function on current value, key and collection is truthy
                if (func(collection[key], key, collection)) {
                    allItemsPass = true;
                }
            }
        }
        //return allItemsPass
    } return allItemsPass;
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
//function has arguments of an array, a function and a seed
_.reduce = function(array, func, seed) {
    //create base variable result
    let result;
    //if seed is undefined use the first element of array
    if (seed === undefined) {
        result = array[0];
        //loop through array
        for (let i = 1; i < array.length; i++) {
            //reassign result to invoking function on result, element, index, and array
            result = func(result, array[i], i, array);
        }
        //else seed is defined
    } else {
        result = seed;
        //loop through array
        for (let i = 0; i < array.length; i++) {
            //reassign result
            result = func(result, array[i], i, array);
        }
    }
    //return result
    return result;
}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
