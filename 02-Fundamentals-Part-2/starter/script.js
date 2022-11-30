// activate strict, should be the first line of the script for more secure coding.
// it forbits us and create visible errors.
// without use strict js just fail silently
'use strict';

let hasDriversLicence = false;
const passTest = true;

if (passTest) {
    hasDriversLicence = true;
}

if (hasDriversLicence) {
    console.log('i can drive');
}

// also it wont allow to use some words as variable names which have possiblity use on some for some feature in the future
// const interface = 'Audio'; 

// FUCTIONS
function logger() {
    console.log('my name is ahmet');
}

//calling, running or invoking
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(typeof num);


// Function declaration
// you can call declared functions before they are declared.

console.log(calcAgeDeclared(1900));

function calcAgeDeclared(birthYear) {
    return 2037 - birthYear;
}
const age = calcAgeDeclared(1986);
console.log(age);

// Function expression
// calling a expression function before is not possible.
const calcAgeExpressed = function (birthYear) {
    return 2037 - birthYear;
}

const ageNext = calcAgeExpressed(1986);
console.log(ageNext);

console.log(typeof calcAgeExpressed);
console.log(`my age is ${calcAgeExpressed(1000)}`);
console.log(`my age is ${calcAgeDeclared(1)}`);


// ARROW FUNCTION *******
// Arrow function does not benefit from this keyword.
const calcAgeArrow = birthYear => 2037 - birthYear;
const shouter = () => console.log('SHOOUT');
const ageArrow = calcAgeArrow(1923);
console.log(ageArrow);
shouter();

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1986, 'ahmet'));
console.log(yearsUntilRetirement(1986, 'kubra'));


const cutFruitPieces = (fruit) => {
    return fruit * 4;
}

function fruitProcessorAdvanced(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}

console.log(fruitProcessorAdvanced(5, 5));

// Dont repeat yourself, dry codding...

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirementAdvanced = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    let retirement = 65 - age;

    return retirement = retirement > 0 ? retirement : -1;
    // console.log(`${firstName} has ${retirement} years until retirement.`);

    // return retirement;
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirementAdvanced(1986, 'ahmet'));
console.log(yearsUntilRetirementAdvanced(1955, 'kubra'));


// FUNCTION CODE CHALLENGE

const calcAverage = (a, b, c) => (a + b + c) / 3;

// const averageDolphins = calcAverage(44, 23, 71);
// const averageKoalas = calcAverage(65, 54, 49);

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {

    console.log(`Average Dolphins is: ${avgDolphins}`);
    console.log(`Average Koalas is ${avgKoalas}`);

    if (avgDolphins / avgKoalas >= 2) {
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;

    } else if (avgKoalas / avgDolphins >= 2) {
        return `Koalas win (${avgKoalas} vs ${avgDolphins}`;

    } else {
        return 'NO ONE WINS';
    }
}

console.log(checkWinner(avgDolphins, avgKoalas));

// Arrays and Object 2 important data structures

const friends = ['Michale', 'Steven', 'Peter']; //literal syntax
console.log(friends);

const years = new Array(1991, 1986, 2008, 2020); //using array function
console.log(years);
console.log(friends[0]);
console.log(friends.length); //length is the property of the array
console.log(friends[friends.length - 1]); //expresion is a line that returns a value, inside bracket javascript expect a espression not a statement
// change or mutate array
friends[2] = 'Ahmet';
console.log(friends);

// when you declare array with const you can change, only primitive values are immutable.
// but you can not do friends = ['Mehmet', 'Metin'];

const firstName = 'ahmet';
const ahmet = [firstName, 'Kubra', 2036 - 1986, friends];
console.log(ahmet);

const calcAgeArray = function (birthYear) {
    return 2037 - birthYear;
}

const yearsForArray = [1986, 1923, 2002, 2001];
const age1 = calcAgeArray(yearsForArray[yearsForArray.length - 1]);
console.log(calcAgeArray(yearsForArray[0]));
console.log(age1);

const calcAgeArrowForArray = (birthYear) => {
    return 2037 - birthYear;
}

console.log(calcAgeArrowForArray(1986));

const newLength = friends.push('Kubra'); // push adds to the end of the array.
console.log(friends);
console.log(friends);
console.log(newLength);

friends.unshift('Emre'); // unshift add to the end of the array
console.log(friends);

// Remove from array
// Pop removes item at the end of the array
const popReturn = friends.pop(); // pop removes and returns the removed element of the array
console.log(friends);
console.log(popReturn);

console.log(friends);
const shiftReturn = friends.shift(); // shift removes the first value of the array and retunrs the removed value
console.log(friends);
console.log(shiftReturn);

console.log(friends.indexOf('Ahmet'));


friends.push(23);
console.log(friends.includes('Ahmet')); // returns only true or false
console.log(friends.includes('Zart')); // returns only true or false
console.log('23'); //return false because this checks strict equality

if (friends.includes('Ahmet')) {
    console.log('you have a friend called ahmet');
}


const tipCalculatorArray = (billValue) => {

    // let tip;
    // if (billValue > 50 && billValue < 300) {
    //     tip = billValue * 0.15;
    // } else {
    //     tip = billValue * 0.20;
    // }
    // return tip;

    const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
    return tip;
}

const tipCalculatorArrayArrow = billValue => billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;

console.log(tipCalculatorArray(100));

const bills = new Array(125, 555, 44);
const tips = new Array;
const totals = new Array;
console.log(bills);

for (let i in bills) { // you can use anything for i for (bill in bills) it is just a index
    console.log(bills[i]);
    tips.push(tipCalculatorArray(bills[i]));
    totals.push(tipCalculatorArray(bills[i]) + bills[i])
}

console.log(tips);
console.log(totals);

// const tips = new Array[tipCalculatorArray(bills[0]), tipCalculatorArray(bills[1]), tipCalculatorArray(bills[2])];

const ahmetObject = {
    firstName: 'Ahmet',
    lastName: 'Yalcinkaya',
    job: 'qa',
    age: 36,
    friends: ['Kubra', 'Mert', 'Emre'],
    bestFriend: 'Emre'
}

console.log(ahmetObject);
console.log(ahmetObject.lastName); // dot is the operator here
console.log(ahmetObject['firstName']);
const nameKey = 'Name';
console.log(ahmetObject['first' + nameKey]); //in square brackets accepts expression so we can do this like it, this wont work with dot notation
console.log(ahmetObject['last' + nameKey]);

const interestedIn = 'age'
// const interestedIn = prompt('What do you want to know about Ahmet? Choose between firstName, lastName, age, job and friends');
console.log(ahmetObject[interestedIn]);

if (ahmetObject[interestedIn]) {
    console.log(ahmetObject[interestedIn]);
} else {
    console.log('Wrong request');
}

ahmetObject.location = 'Malta';
ahmetObject['twitter'] = '@ykahmet';
console.log(ahmetObject);

console.log(`${ahmetObject.firstName} has ${ahmetObject.friends.length} friends and his best friends is ${ahmetObject.bestFriend} and his wife is ${ahmetObject.friends[0]}`);