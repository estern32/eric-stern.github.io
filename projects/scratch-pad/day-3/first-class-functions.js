// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    
    //return a function that tests whether a given value is greater than the base
    return function (value) {
        return value > base;
    }
    
    // YOUR CODE ABOVE HERE //
}
/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //return a function that tests whether a given value is less than the base
    return function(value) {
        return value < base;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //return a function that tests whether a given string starts with the startsWith character
    return function(string) {
        //make sure all characters are the same case
        var lowerString = string.toLowerCase();
        var lowerStarts = startsWith.toLowerCase();
        //return test with new variables
        return lowerString[0] === lowerStarts;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //return a function that tests whether a given string ends with the endsWith character
    return function(string) {
        //make sure all characters are the same case
        var lowerString = string.toLowerCase();
        var lowerEnds = endsWith.toLowerCase();
        //return test with new variables
        return lowerString[lowerString.length - 1] === lowerEnds;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //create an array
    var array = [];
    //loop over strings
    for (var i = 0; i < strings.length; i++) {
        //push strings to array
        array.push(modify(strings[i]));
    }
    //return array
    return array;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //create variable to hold boolean value
    var allTestsPass = true;
    //loop throught strings
    for (var i = 0; i < strings.length; i++) {
        //see if all strings pass test
        if (test(strings[i]) === false) {
            //if any test fails change variable
            allTestsPass = false;
        } 
    }
    //return variable
    return allTestsPass;

    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
