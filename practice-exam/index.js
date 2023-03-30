// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
var greeting = function(greeting, location, time) {
    console.log(greeting + ' ' + location + ' ' + time);
};


/*
1. Since this is an intergalatic event, many of our patrons speak different languages!
    Assign a function to our our `greeting` variable that takes 3 inputs: `greeting`, `location` and `time`. 
    Concatanate these values together to form a viable sentence and log it to the console.
    Don't forget the spaces!
    */


// 2.
var contestants = function(array) {
    return array.length;
};


// 3.
var filterSpecies = dogs.filter(function(contestant) {
         return contestant.species === 'dog';
    });

/*
3. Oh no! Some of our contestants aren't even dogs!
    Using the native filter method with our `dogs` array, create an array called `filterSpecies` 
    that will filter out all of the species that are not dogs! 
*/


// 4. 
var dogContestants = [...filterSpecies];

/*4. For safty purposes, let's create a copy of our array. Using the spread operator, 
assign a copy of our `filterSpecies` array to our `dogContestants` variable.
*/



// 5. 
var dogsWithClasses = dogContestants.map(function(dog) {
    if (dog.weight >= 0 && dog.weight <= 10) {
        return dog.class = 'red';
    } else if (dog.weight >= 11 && dog.weight <= 20) {
        return dog.class = 'yellow';
    } else if (dog.weight >= 21) {
        return dog.class = 'green';
    }
});

/*5. Now that we have our `dogContestants` array, we need to add a `class` property to each dog object.
    Using the native map method, add a key of `class` with the value:
        - "red" if the dog's weight is between 0 and 10.
        - "yellow" if the dog's weight is between 11 and 20.
        - "green" if the dog's weight is 21 or over.
        */
    


// 6. // want all objects combined to one
var firstInClass = function(array, output = {}) {

};

/*
6. The votes are in! We have an array of the top dogs in each class
    Using recursion, copy all of the properties into one object and return that object. 
    If you'd like an idea of our data structure, look in the dogData.js file.
*/


// 7.
var votes = dogs.reduce(function(accumulator, current) {
    accumulator += current.votes;
    return accumulator;
}, 0);

/*
7. For statistical reasons, lets count all of the votes we recieved for our dog and non-dog contestants!
    Using reduce, find the sum of the votes casted.
    */