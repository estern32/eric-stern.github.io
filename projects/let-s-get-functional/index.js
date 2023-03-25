// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 * 
 *    npm start --prefix ./eric-stern.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //use _.filter to return an array of only the male customers
    let males = _.filter(array, function(customer) {
        return customer.gender === 'male';
    })
    //return the length of the males array
    return males.length;
};

var femaleCount = function(array) {
    //use _.reduce to accumulate the number of female customers
    let females = _.reduce(array, function(accumulator, current) { 
        //if customer is female add to accumulator
        if (current.gender === 'female') {
            accumulator += 1;
        }
        //return accumulator
        return accumulator;
    }, 0)
    
    return females;
};


var oldestCustomer = function(array) {
    //use reduce to find the oldest person
    let person = _.reduce(array, function(currentOldest, current) {
        //if current person is greater than current oldest return current
        if (currentOldest.age < current.age) {
            return current;
        }
        //return oldest
        return currentOldest;
    })
    //return oldest person's name 
    return person.name;
}; 

var youngestCustomer = function(array) {
    //use reduce to find the oldest person
    let person = _.reduce(array, function(youngest, current) {
        //if current is less than current youngest return current
        if (youngest.age > current.age) {
            return current;
        }
        //return youngest
        return youngest;
    })
    //return youngest person's name
    return person.name;
};

var averageBalance = function(array) {
    let balance = _.reduce(array, function(total, current) { 
        //find the total balance and divide by array length
        total += current.balance.replace(/\$/g,'');
        return total / array.length;
    }, 0)
    return balance;

};

var firstLetterCount = function(array, letter) {
    //see which customer names begin with letter
    let firstLetters = _.filter(array, function(customer) {
        //make sure it works no matter what case the letter is
        return customer.name[0].toUpperCase() === letter.toUpperCase();
    })
    //return number of customers that name begins with letter
    return firstLetters.length;
};

var friendFirstLetterCount = function(array, customerName, letter) {
    
};

/*
 - **Objective**: Find how many friends of a given customer have names that start with a given letter
 - **Input**: `Array`, `Customer`, `Letter`
 - **Output**: `Number`
 */

var friendsCount = function(array, name) {
    let friends = _.reduce(function(accumulator, current) {
        for (let i = 0; i < current.friends.length; i++) {
            if (current.friends[i].includes(name)) {
                accumulator.push(current.name);
            }
        }
    }, []);
    return friends;
};

/*### 8: `friendsCount`
 - **Objective**: Find the customers' names that have a given customer's name in their friends list
 - **Input**: `Array`, `Name`
 - **Output**: `Array`
 */

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
