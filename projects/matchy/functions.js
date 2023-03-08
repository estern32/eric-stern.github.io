/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//implement a function declaration called search that takes a parameter representing an array of animals and a parameter representing a string (animal name)
function search(arr, str) {
    //create variable to be used as a based return
    var ret = null;
    //loop through animals array
    for (var i = 0; i < arr.length; i++) {
        //if str is in animals array 
        if (str === arr[i].name) {
            //change ret to the object
            ret = arr[i];
        }
    } 
    //return ret
    return ret;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//write a function declaration called replace with animals (array), name (string) and replacement (object) as parameters
function replace(animals, name, replacement) {
    //loop through animal array
    for (var i = 0; i < animals.length; i++) {
        //if name is found in array replace with replacement
        if (name === animals[i].name) {
            animals.splice(i, 1, replacement);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//write a function called remove with parameters animals and name
function remove(animals, name) {
    //loop through array
    for (var i = 0; i < animals.length; i++) {
        //if name is in array remove it
        if (name === animals[i].name) {
            animals.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//write a function called add with parameters of animals and animnal
function add(animals, animal) {
    //create a variable as a base boolean value
    var name = false;
    //loop through array
    for (var i = 0; i < animals.length; i++) {
        //if the three given checks are true change boolean value to true
        if (animal.name.length > 0 && animal.species.length > 0 && animal.name === animals[i].name) {
            name = true;
        }
    } 
    //if name isnt in array push animal object
    if (name === false) {
        animals.push(animal);
    }
}



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
