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
        ((Number(total.balance.replace(/[^0-9.-]+/g,""))) + (Number(current.balance.replace(/[^0-9.-]+/g,""))));
    })
    //convert total from 
    let average = balance / array.length;
    //return average
    return average;
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
    //how many friends of a given customer's names begin with letter
    let customer = _.filter(array, function(person) {
        return person.name === customerName;
    });
    let friends = _.filter(customer.friends, function(customer) {
        let firstFriends = [];
        for (let i = 0; i < customer.friends.length; i++) {
            if (customer.friends[i].name[0].toUpperCase() === letter.toUpperCase()) {
                firstFriends.push(customer.friends[i]);
            }
        }
        return firstFriends;
    })
    //return number of friends that begin with letter
    return friends.length;
};

/*
 - **Objective**: Find how many friends of a given customer have names that start with a given letter
 - **Input**: `Array`, `Customer`, `Letter`
 - **Output**: `Number`
 */

var friendsCount;

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
