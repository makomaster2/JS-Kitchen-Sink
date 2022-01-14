var name = 'Gage';
const amtStates = 50;
var nine = 5 + 4;

//calls to getLength function
wordLength = getLength('Hello World');
anotherLength = getLength('Hi world');

//calls to checkAge function
checkAge('charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('john', 17);


//array of 5 objects
let friends = [
    {
        name: 'Branwin', age: 26
    },
    {
        name: 'Cody', age: 26
    },
    {
        name: 'Bailey', age: 20
    },
    {
        name: 'Hunter', age: 27
    },
    {
        name: 'Kayleigh', age: 13
    }
];

//calls checkAge function for the 5 objects
for (let i = 0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
}

//pet object
let pet = {
    name: 'Mako',
    breed: 'Dragon'
};
console.log(pet);

//faveVeggies array
let faveVeggies = ['Lima Beans', 'Collard Greens', 'Peachy Keen', 'Veggie Tales!', 'Cauliflower', 'Sweet and sour', 'Half an hour', 'Veggie Tales!'];

// loop that lists everything in faveVeggies array
for (let i = 0; i < faveVeggies.length; i++) {
    console.log(faveVeggies[i]);
}



//calls to alert function
sayHello();

//alert function
function sayHello() {
    alert('Hello World!');
}

//checkAge function
function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ", you aren't old enough to view this page!");
    }
}

//getLength function
function getLength(word) {
    wordLength = word.length;
    if (wordLength % 2 == 0) {
        console.log('The world is nice and even!');
    } else {
        console.log('The world is an odd place!');
    }
}