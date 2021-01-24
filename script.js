// Interface
var dogArray = [];
var catArray = [];
var petArray = [];
var bingo = {
    type: 'dog',
    name: 'Bingo',
    age: 2,
    weight: 5,
    height: 10,
    microChipped: true,
    spayedOrNeutered: false,
    breed: 'german shephard',
    sporty: true,
    bark: function () { return console.log('woof woof'); }
};
var max = {
    type: 'dog',
    name: 'Max',
    age: 4,
    weight: 6,
    height: 11,
    microChipped: false,
    spayedOrNeutered: true,
    breed: 'sausage dog',
    sporty: false,
    bark: function () { return console.log('bark bark'); }
};
var catA = {
    type: 'cat',
    name: 'catA',
    age: 1,
    weight: 100,
    height: 10,
    microChipped: true,
    spayedOrNeutered: false,
    breed: 'big cat',
    purr: function () { return console.log('miau miau'); }
};
var catB = {
    type: 'cat',
    name: 'catB',
    age: 2,
    weight: 10,
    height: 5,
    microChipped: false,
    spayedOrNeutered: true,
    breed: 'small cat',
    purr: function () { return console.log('purrpurr'); }
};
dogArray.push(bingo, max);
console.log(dogArray);
catArray.push(catA, catB);
console.log(catArray);
petArray.push(bingo, max, catA, catB);
console.log(petArray);
function adopt(animal) {
    var response = "We have adpoted a " + animal.type + ": " + animal.name + ", he is " + animal.age + " years old, vaccinated" + (animal.sporty ? ' and is sporty' : '') + ".";
    console.log(response);
}
dogArray.forEach(function (animal) {
    adopt(animal);
});
petArray.forEach(function (animal) {
    adopt(animal);
});
