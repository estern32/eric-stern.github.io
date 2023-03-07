/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable named 'animal' and assign it to an empty object
var animal = {};
//using dot notation give animal a property called 'name' with a value of your animals name
animal.species = 'dog';
//using bracket notation give animal a property 'name' with a value of your animal's name
animal['name'] = 'Spot';
//give animal a property 'noises' with a value of []
animal.noises = [];
//print your animal object to console
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable named noises and assing it []
var noises = [];
//using bracket notation give noises its first element
noises[0] = 'bark';
//using an array function add another noise using push
noises.push('howl');
//use unshift to add another noise
noises.unshift('ruff');
//using bracket notation to add another element
noises[noises.length] = 'whine';
//log length
console.log(noises.length);
//log last element
console.log(noises.length -1);
//log the whole array
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//using bracket notation assign the noises property on animal to our new noises array
animal['noises'] = noises;
//Add another noise to the noises property in animal
animal.noises.push('growl');
//log animal
console.log('animal');


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Dot notation and bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 *Bracket notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable named animals and assign it to an empty array
var animals = [];
//push animal to animals
animals.push(animal);
//log animals
console.log(animals);
//create a variable called duck and assign it to the given data
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
}
//push duck to animals
animals.push(duck);
//log animals
console.log(animals);
//create two more animal objects each with a species, a name and at least two sounds
var cat = {
  species: 'cat',
  name: 'Roux',
  noises: ['meow', 'purr', 'hiss']
}
var tiger = {
  species: 'tiger',
  name: 'Tony',
  noises: ['roar', 'snort']
}
//add the two new animal objects to the animals array
animals.push(cat);
animals.push(tiger);
//log animals
console.log(animals);
//log the length of animals
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I chose to use an array for the list of friends because it's easy to use and easy to read
//create a variable called friends and assign it to the array
var friends = [];
//write a function getRandom that takes our animals array and returns a random index of the input array
function getRandom() {
  //use Math.random and Math.floor
  return Math.floor(Math.random() * animals.length)
}
//using a random index from the function, get a random animal and add its name to friends
friends.push(animals[getRandom()].name);
//log friends
console.log(friends);
//using bracket notation add the friends list as a property also named friends on one of the animals in the array
animals[2]['friends'] = friends;
//log your work
console.log(animals[cat]);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}