'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * Identity: Function takes in an input value and returns the input value unchanged.
 * 
 * @param { Any value } value: Function takes in any value.
 * @returns { Any value }: Function returns input value unchanged.
 */

function identity(value) {
    return value;
}

module.exports.identity = identity;

/**
 * TypeOf: Function takes any value and returns the type of value as a string.
 * 
 * @param { Any value } value: Function takes in any value.
 * @returns { String }: Function returns the datatype of the value as a string.
 */

function typeOf(value) {
    if (Array.isArray(value)) {
        return 'array';
    } else if (value === undefined) {
        return 'undefined';
    } else if (value === null) {
        return 'null';
    } else {
        return typeof value;
    }
}

module.exports.typeOf = typeOf;

/**
 * First: Function takes an array and a number and returns the first number items of array.
 * 
 * @param { Array } array: The array containing the items to be returned.
 * @param { Number } number: The number of items of array to return.
 * @returns { Any datatype that can be stored in an array }: If array is not an array, return []. If number is not given or not a number, 
 * return just the first element in array. Otherwise, return the first number items of array.
 */

function first(array, number) {
    if (Array.isArray(array) === false) {
        return [];
    } else if (isNaN(number) === true) {
        return array[0];
    } else {
        return array.splice(0, number);
    }
}

module.exports.first = first;

/**
 * Last: Function takes an array and a number and returns the last number of items of array.
 * 
 * @param { Array } array: The array over which to iterate.
 * @param { Number } number: The number of items of array to return.
 * @returns { Any datatype that can be stored in an array }: If array is not an array, return []. If number is not given or not a number, 
 * return just the last element in array. Otherwise, return the last number items of array.
 */

function last(array, number) {
    if (Array.isArray(array) === false) {
        return [];
    } else if (isNaN(number) === true) {
        return array[array.length - 1];
    } else if (number > array.length) {
        return array;
    } else {
        return array.splice(array.length - number, array.length - 1);
    }
}

module.exports.last = last;


/**
 * IndexOf: Function takes an array and a value and returns the index of array 
 * that is the first occurrance of value if value is in array.
 * 
 * @param { Array } array: The array over which to iterate.
 * @param { Value } value: The value to be checked when iterating through array.
 * @returns { Number }: Returns the index of array that is the first occurrence of value. 
 * Returns -1 if value is not in array.
 */

function indexOf(array, value) {
    if (array.includes(value) === false) {
        return -1;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return i;
            }
        }  
     } 
}

module.exports.indexOf = indexOf;

/**
 * Contains: Function takes an array and a value and returns true if array
 * contains value and false otherwise using the ternary operator.
 * 
 * @param { Array } array: The array to be checked for value. 
 * @param { Value } value: The value to be checked when iterating through array.
 * @returns { Boolean }: Returns true if array contains value, false otherwise.
 */

function contains(array, value) {
    return array.includes(value) ? true : false;
}

module.exports.contains = contains;

/**
 * Each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 */

function each (collection, func) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            func(collection[key], key, collection);
        }
    }
}

module.exports.each = each;

/**
 * Unique: Function takes an array and returns a new array of all elements 
 * from array with duplicates removed.
 * 
 * @param { Array } array: The array over which to iterate.
 * @returns { Array }: Returns a new array of all elements from array with duplicates removed
 */

function unique(array) {
        let newArr = [];
        for (let i = 0; i < array.length; i++) {
            if (array.indexOf(array[i]) === i) {
                newArr.push(array[i]);
            }
        }
        return newArr;
    }

module.exports.unique = unique

/**
 * Filter: Function takes an array and a function, func, and calls func for each element
 * in array passing the arguments: the element, its index and array, returning a new 
 * array of elements for which calling func returned true.
 * 
 * @param { Array } array: The array over which to iterate. 
 * @param { Function } func: The function that is called for each element of array.
 * @returns { Array }: Returns a new array of elements for which calling func returned true.
 */

function filter(array, func) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

module.exports.filter = filter;

/**
 * Reject: Function takes an array and a function, func, and calls func for each element
 * in array passing the arguments: the element, its index and array, returning a new 
 * array of elements for which calling func returned false.
 * 
 * @param { Array } array: The array over which to iterate.
 * @param { Function } func: The function that is called for each element of array.
 * @returns { Array }: Returns a new array of elements for which calling func returned false.
 */

function reject(array, func) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === false) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

module.exports.reject = reject;

/**
 * Partition: Function takes an array and a function, func, and calls func for
 * each element in array passing it the arguments: element, key and array, 
 * returning a new array made up of two sub arrays, one containing all the values
 * for which func returned something truthy and the other containing all the values
 * for which func returned something falsy.
 * 
 * @param { Array } array: The array over which to iterate.
 * @param { Function } func: The function that is called for each element in array.
 * @returns { Array }: Returns a new array that is made up of two sub arrays, one for truthy
 * values and the other for falsy values.
 */

function partition(array, func) {
    let newArr =[[], []];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            newArr[0].push(array[i]);
        } else {
            newArr[1].push(array[i]);
        }
    }
    return newArr;
}

module.exports.partition = partition;

/**
 * Map: Function takes a collection and a function, calls the function
 * for each element in collection and saves the return value of each 
 * function call in a new array.
 * 
 * @param { Array or Object } collection: The array or object over which to iterate. 
 * @param { Function } func: The function that is called for each element in collection.
 * @returns { Array }: Returns a new array containing the return values of each function call.
 */

function map(collection, func) {
    let newArr = [];
    if (Array.isArray(collection) === true) {
        for (let i = 0; i < collection.length; i++) {
            newArr.push(func(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            newArr.push(func(collection[key], key, collection))
        }
    }
    return newArr;
}

module.exports.map = map;

/**
 * Pluck: Function takes an array of objects and a property, and returns a 
 * new array containing the value of property for every element in array.
 * 
 * @param { Array } array: Array of objects containing properties.
 * @param { Property } prop: Property in an element in array.
 * @returns { Array }: Returns a new array containing the value of property for every 
 * element in array
 */

function pluck(array, prop) {
    return _.map(array, function(object) {
        for (let key in object) {
            return object[key];
        }
    })
}

module.exports.pluck = pluck;

/**
 * Every: Function takes a collection and a function, calling the function for 
 * every element of collection, and returns true if the return value of calling
 * function for every element is truthy, otherwise returns false.
 * 
 * @param { Array or Object } collection: The array or object over which to iterate.
 * @param { Function } func: The function that is called for every element in collection.
 * @returns { Boolean }: Returns true if the return value for calling function for every element is 
 * truthy, otherwise returns false.
 */

function every(collection, func) {
    let allItemsPass = true;
    if (func === undefined) {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (!collection[i]) {
                    allItemsPass = false;
                }
            }
        } else {
            for (let key in collection) {
                if (!collection[key]) {
                    allItemsPass = false;
                }
            }
        }
    } else {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (!func(collection[i], i, collection)) {
                    allItemsPass = false;
                }
            }
        } else {
            for (let key in collection) {
                if (!func(collection[key], key, collection)) {
                    allItemsPass = false;
                }
            }
        }
    } return allItemsPass;
}

module.exports.every = every;

/**
 * Some: Function takes a collection and a function, calling the function for 
 * every element of collection, and returns false if the return value of calling
 * function for every element is falsy, otherwise returns true.
 * 
 * @param { Array or Object } collection: The array or object over which to iterate.
 * @param { Function } func: The function that is called for every element in collection.
 * @returns { Boolean }: Returns false if the return value for calling function for every element is 
 * falsy, otherwise returns true.
 */

function some(collection, func) {
    let allItemsPass = false;
    if (func === undefined) {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (collection[i]) {
                    allItemsPass = true;
                }
            }
        } else {
            for (let key in collection) {
                if (collection[key]) {
                    allItemsPass = true;
                }
            }
        }
    } else {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (func(collection[i], i, collection)) {
                    allItemsPass = true;
                }
            }
        } else {
            for (let key in collection) {
                if (func(collection[key], key, collection)) {
                    allItemsPass = true;
                }
            }
        }
    } return allItemsPass;
}

module.exports.some = some;

/**
 * Reduce: Function takes an array, a function and seed, and calls function for 
 * every element in array using the return value of function as the previous result
 * for the next iteration. It uses seed as previous result on the very first iteration.
 * If no seed is given, it uses the first element of collection as seed. It returns the
 * return value of the final function call.
 * 
 * @param { Array } array: The array over which to iterate.
 * @param { Function } func: The function called for every element in collection.
 * @param { Value } seed: Value used as the previous result for the first iteration.
 * @returns { String, Number, Array, Object }: Returns the return value of the final function call.
 */

function reduce(array, func, seed) {
    let result;
    if (seed === undefined) {
        result = array[0];
        for (let i = 1; i < array.length; i++) {
            result = func(result, array[i], i, array);
        }
    } else {
        result = seed;
        for (let i = 0; i < array.length; i++) {
            result = func(result, array[i], i, array);
        }
    }
    return result;
}

module.exports.reduce = reduce;

/**
 * Extend: Function takes two objects and copies properties from object 2 to 
 * object 1. If more objects are passed in, it copies their properties to object 1
 * as well, in the order they are passed in. It returns the updated object 1.
 * @param { Object } object1: The object properties are copied to.
 * @param { Object } object2: The object whose properties are copied to object 1.
 * @param  { ...possibly more object } moreObjects: Possible objects passed in also whose 
 * properties are copied to object 1.
 * @returns { Object }: Returns the updated object 1.
 */

function extend(object1, object2, ...moreObjects) {
    var newObj = Object.assign(object1, object2);
    Object.assign(newObj, ...moreObjects);
    return newObj;
}

module.exports.extend = extend;