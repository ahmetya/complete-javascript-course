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

