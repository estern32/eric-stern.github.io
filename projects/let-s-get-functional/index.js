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
    let totalBalance = _.reduce(array, function(accumulator, current) { 
        //format to a number
        var formattedNumber = Number(current.balance.replace("$", "").replace(",", ""))
        return accumulator + formattedNumber;
    }, 0)
    // find average balance
    var balance = Math.floor((totalBalance / array.length) * 100) / 100;
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
    var matchingCustomer = _.filter(array, function(customer){
        //if a customer is customer name
        return customer.name === customerName;
    })[0];
    // array[i] is equal to friend here
    var matches = _.filter(matchingCustomer.friends, function(friend) {
        return friend.name[0].toUpperCase() === letter.toUpperCase();
    });
    // return number of friends
    return matches.length;
};


var friendsCount = function(array, name) { 
    // add a customer's name to the return array if name is in that customer's friends array
    var returnArray = _.reduce(array, function(accumulator, current){
        // accumulator = []
        // current = array[i], customer object
        // if current.friends has name in it
        var nameMatches = _.filter(current.friends, function(friend){
            // current.friends[i] = friend object
            return friend.name === name;
        }) 
        if (nameMatches.length > 0) {
            accumulator.push(current.name);
        }
        return accumulator;
    }, []);
    // return array of customers names
    return returnArray;
};

var topThreeTags = function(array) {
    var tagsObj = _.reduce(array, function(accumulator, current) {
        current.tags.forEach(function(tag) {
            if (accumulator[tag]) {
                accumulator[tag] += 1;
            } else {
                accumulator[tag] = 1;
            }
        });
        return accumulator;
    }, {});
    var entries = Object.entries(tagsObj);
    var sorted = entries.sort(function(previous, current){
        return current[1] - previous[1];
    });
    let arr = [sorted[0][0], sorted[1][0], sorted[2][0]]
    return arr;
    //return an array of the 3 most common tags
};

/*
- **Objective**: Find the three most common tags among all customers' associated tags
- **Input**: `Array`
- **Output**: `Array`
*/
 
var genderCount = function(array) {
    let genderObj = _.reduce(array, function(accumulator, current) {
        //iterate through current customers gender
        //determine if gender exists in accumulator as a key
        // current.gender = 'female'
        // accumulator = {}
        // if (gender not in accumulator) {
        //     accumulator[current.gender] = 1;
        // } else {
            // accumulator[current.gender] += 1;
        // }


        if (accumulator[current.gender]) {
            accumulator[current.gender] += 1;
        } else {
            accumulator[current.gender] = 1;
        }
        return accumulator;
    }, {});
    //return object
    return genderObj;
};


/*- **Objective**: Create a summary of genders, the output should be:
```javascript
{
    male: 3,
    female: 4,
    non-binary: 1
}
```
 - **Input**: `Array`
 - **Output**: `Object`
 - **Constraints**: Use `reduce`
 */

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
