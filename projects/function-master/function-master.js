//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //use Object.values to return the values in an array
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //use object.keys to get an array of keys
    const keys = Object.keys(object);
    //return all keys in a string separated by a space
    return keys.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //create a base array
    var arr = [];
    //use for loop to run through values
    for (var key in object) {
        //if value is string push into array
        if (typeof object[key] === 'string') {
            arr.push(object[key]);
        }
    }
    //use join method to return values as a string separated by a space
    var joined = arr.join(' ');
    return joined;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //if collection is an array return 'array'
    if (Array.isArray(collection) === true) {
        return 'array';
    //else if collection is an object literal return 'object
    } else if (typeof collection === 'object' && collection !== null && Object.prototype.toString.call(collection) !== '[object Date]' && Array.isArray(collection) === false) {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //convert first character to upper case
    var a = string.charAt(0).toUpperCase();
    //use slice to separate from first character
    var b = string.slice(1);
    //concatenate a and b
    return a + b;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //split string
    var splitStr = string.split(' ');
    //create a base array to push new strings to
    var arr = [];
    //loop through strings
    for (var i = 0; i < splitStr.length; i++) {
        //capitalize first letter and slice rest and push the new strings to arr
      arr.push(splitStr[i][0].toUpperCase() + splitStr[i].slice(1));
    }
    //join new arry and return joined
    var joined = arr.join(' ');
    return joined;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) { 
    //capitalize first letter of name
    var capLetter = object.name[0].toUpperCase();
    //slice the rest of the name
    var slice = object.name.slice(1);
    //add together to come up with new name
    var newName = capLetter + slice;
        //return welcome message 
        return 'Welcome ' + newName + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //capitalize name
    var newName = object.name[0].toUpperCase() + object.name.slice(1);
    //capitalize species
    var newSpecies = object.species[0].toUpperCase() + object.species.slice(1);
    //return 'Name is a Species'
    return newName + ' is a ' + newSpecies;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //if object has a noises array with at lease one noise in it return the array as a string with spaces in between
    if (Array.isArray(object.noises) && object.noises.length > 0) {
        return object.noises.join(' ');
    //if not return 'there are no noises'
    } else {
        return 'there are no noises';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //create variable to be used as a base case
    var match = false;
    //use .split to turn string into array
    const splitStr = string.split(' ');
    //loop through array
    for (var i = 0; i < splitStr.length; i++) {
        //if word is in string of words change base variable to true
        if (word === splitStr[i]) {
            match = true;
        }
    }
    //return variable
    return match;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //add name to object's friends array
    object.friends.push(name);
    //return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //create base bool
    var bool = false;
    //make sure it isn't an empty object
    if (Object.keys(object).length > 0) {
        //loop through friends
        for (var i = 0; i < object.friends.length; i++){
            //if name is in friends array change bool to true
            if (name === object.friends[i]) {
                bool = true;
            }
        }
    }
    //if bool is true return true else return false
    if (bool === true) {
        return true;
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //create an array to store non friends
    var nonFriends = [];
    //loop through the outer array
    for (var i = 0; i < array.length; i++) {
        //create base bool
        var bool = false;
        //loop through inner array
        for (var j = 0; j < array[i].friends.length; j++) {
            //if name is in a friends array, bool is true
            if (name === array[i].friends[j]) {
                bool = true;
            }
        }
        //if bool is false and name does not equal a name in the array push to nonFriends
        if (bool === false && array[i].name !== name) {
            nonFriends.push(array[i].name);
        }
    }
    //return nonFriends
    return nonFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //update prop key with new value and add key if it doesnt exist
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //create base bool
    var bool = true;
    //loop through array
    for (var i = 0; i < array.length; i++) {
        //if object property is in array, delete property
        if (object.hasOwnProperty(array[i])) {
            delete object[array[i]];
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //create an array to push unique values
    var newArray = []; 
    //loop through array
    for(var i = 0; i < array.length; i++) {
        //push unique values into newArray
        if (newArray.includes(array[i]) === false) {
            newArray.push(array[i]);
        }
    }
    //return newArray
    return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}