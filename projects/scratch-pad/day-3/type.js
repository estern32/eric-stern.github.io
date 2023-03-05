// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //if the value is an array, return true
    if (Array.isArray(value) === true) {
        return true;
    } else {
    //otherwise return false
        return false;
    // YOUR CODE ABOVE HERE //
    }
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {   //looking for an object literal
    // YOUR CODE BELOW HERE //
    //use typeof first
    //have to also make sure that it's not null, it's not an array and not date()
    // can create a list of if statements, but may be easier for one long if statement with &&
    if (typeof value === 'object' && value !== null && Array.isArray(value) === false && Object.prototype.toString.call(value) !== '[object Date]') {
        // return true if passes all tests
        return true;
    //else return false
    } else {
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {   //array or object
    // YOUR CODE BELOW HERE //
    //similar to above example except can be an array
    if ((typeof value === 'object' && value !== null && Object.prototype.toString.call(value) !== '[object Date]') || Array.isArray(value) === true) {
        //if all tests pass return true
        return true;
    //else return false
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if (typeof value === 'object') {
        //if array
        if (Array.isArray(value) === true) {
            return 'array';
        //if null
        } else if (value === null) {
            return 'null';
        //if date
        } else if (Object.prototype.toString.call(value) === '[object Date]') {
            return 'date';
        //if object literal
        } else {
            return 'object';
        }
    } else {
        //if something other than object
        return typeof value;
    }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
