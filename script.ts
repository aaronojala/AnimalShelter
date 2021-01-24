// Interface

// interface Pet {
//     type: string,
//     name: string,
//     age: number,
//     weight: number,
//     height?: number,
//     microChipped: boolean,
//     spayedOrNeutered: boolean,
//     breed: string
// }

// interface Dog extends Pet {
//     sporty: boolean,
//     bark: () => void
// }

// interface Cat extends Pet {
//     purr: () => void
// }

// Type

type Dog = {
    type: string,
    name: string,
    age: number,
    weight: number,
    height?: number,
    microChipped: boolean,
    spayedOrNeutered: boolean,
    breed: string,
    sporty: boolean,
    bark: () => void
}

type Cat = {
    type: string,
    name: string,
    age: number,
    weight: number,
    height?: number,
    microChipped: boolean,
    spayedOrNeutered: boolean,
    breed: string,
    purr: () => void
}


const dogArray: Array<Dog> = [];
const catArray: Array<Cat> = [];
const petArray: Array<Dog|Cat> = [];

const bingo: Dog = {
    type: 'dog',
    name: 'Bingo',
    age: 2,
    weight: 5,
    height: 10,
    microChipped: true,
    spayedOrNeutered: false,
    breed: 'german shephard',
    sporty: true,
    bark: () => console.log('woof woof')
}

const max: Dog = {
    type: 'dog',
    name: 'Max',
    age: 4,
    weight: 6,
    height: 11,
    microChipped: false,
    spayedOrNeutered: true,
    breed: 'sausage dog',
    sporty: false,
    bark: () => console.log('bark bark')
}

const catA: Cat = {
    type: 'cat',
    name: 'catA',
    age: 1,
    weight: 100,
    height: 10,
    microChipped: true,
    spayedOrNeutered: false,
    breed: 'big cat',
    purr: () => console.log('miau miau')
}

const catB: Cat = {
    type: 'cat',
    name: 'catB',
    age: 2,
    weight: 10,
    height: 5,
    microChipped: false,
    spayedOrNeutered: true,
    breed: 'small cat',
    purr: () => console.log('purrpurr')
}

dogArray.push(bingo, max);
console.log(dogArray);
catArray.push(catA,catB);
console.log(catArray);
petArray.push(bingo,max,catA,catB);
console.log(petArray);


function adopt(animal):void {
    let response:string = `We have adpoted a ${animal.type}: ${animal.name}, he is ${animal.age} years old, vaccinated${animal.sporty ? ' and is sporty':''}.`
    console.log(response);
}

dogArray.forEach(animal => {
    adopt(animal)
});

petArray.forEach(animal => {
    adopt(animal)
});