let js = 'amazing';
console.log(40 + 8 + 23 - 10);
console.log('Jonas');
console.log(23);
let firstName = "Jonas";
let first = 'jonas';
let firstNamePerson;
console.log(firstName);

// let 3year;  Varialble names cannot start with numreric values
// let new = 25; specila javascript keywords cant be used as varible names. if you really want to use use underscore or dollar sign with it
// let name is also kind of dangerous because it is also a soft keyword
// let Person is also not good because uppercase letter keywords are for classes no best practice

let PI = 3.1415;

// use descriptive variable names
let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

console.log(myCurrentJob);

let country = 'Turkey';
let continent = 'Europe';
let population = 80;

// 7 Primitive Data Types
// Numbers > all numbers are defined with same
// String > used for text
// Bolean > either true or false
// Undefined > variable is not defined, it is only declared
// Null > similar but it means 'empty'
// Symbol > value which is unique or cannot br change
// BigInt > very large number

// JS has dynamic data typing

true;
console.log(true);
let javasciptIsFun = true;
console.log(javasciptIsFun);
console.log(typeof true);
console.log(typeof javasciptIsFun);
console.log(typeof 'ahmet');
console.log(typeof 23);

// DYNAMIC TYPING
javasciptIsFun = 'YES!';
console.log(typeof javasciptIsFun);

// UNDEFINED
let year;
console.log(typeof year);

year = 1986;

console.log(typeof null);

let age = 30;
age = 31; // mutating a variable. let is used for variables to be mutated.

const birthYear = 1986; // immutable variable

// const job; // error because to use const needed to immediate assigning it should be const job = 'QA ENGINEER';
// by default const is much better to use
// var is should be compeletly avoided which is pretty much same as let

var job = 'programmer';
job = 'teacher';

// it acts same but below the surface it is very different
// learning is not linear
// never use var

// also you can directly create variables without any keyword, but this is a terrible idea
maternalName = 'something';
console.log(maternalName);


// OPEATORS

const now = 2022;
ourBirthYear = 1986
const ageAhmet = now - ourBirthYear;
const ageKubra = 2077 - birthYear;
console.log(ageAhmet, ageKubra);

console.log(ageAhmet * 2, ageAhmet / 10, 2 ** 3);

const myName = 'ahmet';
const myLastName = 'yalcinkaya';
console.log(myName + ' ' + myLastName);

// ASSIGNMENT OPERATOR "=" is the assignment operator
let x = 10 + 5;
console.log(x);

// there are also other assignment operator and math operators
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comperison operators
// There are four comparison operators >=, <=, <, >
console.log(ageAhmet > ageKubra);
console.log(ageKubra >= 18);

const isFullAge = ageKubra >= 17;
console.log(now - 1986 > now - 2018); // JS know math shoud be done first than the comparison

function operatorPrecedence() {
    const now = 2037;
    const ageAhmet = now - 1986;
    const ageKobra = now - 2018;
    console.log(now - 1991 > now - 2018);
}
operatorPrecedence();

function assignmentRightToLeft() {
    let x, y;
    x = y = 25 - 10 - 5
    console.log(x, y);
}
assignmentRightToLeft();


function grouping() {
    const averageAge = (ageAhmet + ageKubra) / 2;
    console.log(ageAhmet, ageKubra, averageAge);
}
grouping();

function codingChallenge() {
    const massAhmet = 78, massKubra = 92;
    const heightAhmet = 1.68, heightKubra = 1.95;
    let bmiAhmet, bmiKubra;

    bmiAhmet = massAhmet / (heightAhmet ** 2);
    bmiKubra = massKubra / (heightKubra ** 2);

    const markHigherBMI = bmiAhmet > bmiKubra

    console.log(bmiAhmet, bmiKubra, markHigherBMI);

    return { bmiAhmet, bmiKubra };
}

codingChallenge();

function stringIntroduction() {
    const firstName = 'ahmet';
    const job = 'engineer';
    const birthYear = 1986;
    const currentYear = 2037

    const ahmet = "i'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';
    console.log(ahmet);

    const ahmetNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`
    console.log(ahmetNew);

    console.log('String with \n\
    multiple create a new line than the liness \n\
    like this');

    console.log(`
    String with new line is 
    much easier 
    like this 
    with backticks`);
}

stringIntroduction();

function decisions() {
    const age = 11;
    const isOldEnough = age > 18;

    if (isOldEnough) {
        console.log('Sarah can start driving license 💖💖💖💖💖💖');
    }
    else {
        const yearsLeft = 18 - age;
        console.log('age is below eighteen 👀👀👀👀');
        console.log(`
        Sarah is too young. 
        Wait another ${yearsLeft} years!!!`);
    }

    const birthYear = 1986;
    let century;

    if (birthYear <= 2000) {
        century = 20;
    }
    else {
        century = 21;
    }
    console.log(century);
}

decisions();

function codingChallengeDecisions() {

    let bmi = codingChallenge();
    console.log(bmi.bmiKubra, bmi.bmiAhmet);

    if (bmi.bmiKubra > bmi.bmiAhmet) {
        console.log(`Kubra's BMI ${bmi.bmiKubra} is higher than Ahmet's ${bmi.bmiAhmet}!`);

    } else {
        console.log(`Ahmet's BMI ${bmi.bmiAhmet} is higher than Kubra's ${bmi.bmiKubra}!`);
    }
}

codingChallengeDecisions();


function typeConversions() {
    const inputYear = '1991';
    console.log(Number(inputYear), inputYear);
    console.log(Number(inputYear) + 18);
    console.log(Number("Ahmet")); //Returns NaN means mathematically not possible Not a Number
    console.log(typeof NaN); // it still returns a number as value but it means it is an invalid number.
    console.log(String(23), 23);
}

typeConversions();

function typeCoercian() {
    // automatic type conversions handled by javascript
    console.log("I'm " + 23 + " years old");
    console.log('23' - '10' - 3);
    console.log('23' * '2');
    console.log('23' / '2');

    let n = '1' + 1;
    n = n - 1;
    console.log(n);
    console.log(2 + 3 + 4 + '5');
    console.log("10" - "4" - "3" - 2 + "5 ");
}

typeCoercian();

function truthyFalsy() {
    // there are only 5 falsy value: 0, '', undefined, null, NaN
    // everything else is truthy. 
    console.log(Boolean(0));
    console.log(Boolean(''));
    console.log(Boolean(undefined));
    console.log(Boolean(null));
    console.log(Boolean(NaN));

    //ALL OTHERS ARE TRUTHY

    console.log(Boolean({}));
    console.log(Boolean('ahmet'));
    console.log(Boolean('1'));
    console.log(Boolean(1));

}

truthyFalsy();

function ifElseStatements() {

    const money = 0;
    if (money) {
        console.log("Don't spend it on! :)");
    } else {
        console.log("You should get a job!");
    }

    let height;

    if (height) {
        console.log("Height is defined...");
    } else {
        console.log("height is undefined...");
    }

}

ifElseStatements();

function equalityOperators() {

    // === strict equality operator
    // == loose equality operator

    const age = 18;
    if (age === 18) console.log("age is eighteen, === strict equality");
    if (age == 18) console.log("age is eighteen, == loose equality");

    const favourite = prompt("Whats your favourite number??")
    console.log(favourite);
    console.log(typeof favourite);
    if (favourite == 21) { // string comes from the prompt but == loose equal so if statemnt is working...
        console.log("COOL !!");
    } else if (Number(favourite) === 21) { // this strict equality works because we convert it to a number
        console.log("NOW YOUR FAV IS A NUMBE");
    } else if (favourite === 7) {
        console.log("7 is also a cool number");
    } else {
        console.log("THOSE NUMBERS ARE NOT THAT COOL !!");
    }

    if (favourite !== 23) console.log("why not it is 22");

}

// equalityOperators();


function booleanLogic() {
    // &&, ||, ! >> and, or and not operators.

    const hasDriversLicense = true; // variable A
    const hasGoodVision = true; // variable B

    console.log(hasDriversLicense && hasGoodVision);
    console.log(hasDriversLicense || hasGoodVision);
    console.log(!hasDriversLicense);

    const isTired = true;
    // const shouldDrive = hasDriversLicense && hasGoodVision;
    const conditions = hasDriversLicense && hasGoodVision && !isTired

    if (conditions) {
        console.log("kubra is able to drive !!");
    } else {
        console.log("she is not able to drive...");
    }
}

booleanLogic();

function codingChallengeStatements() {

    const averageDolphins = (96 + 108 + 89) / 3;
    const averageKoalas = (108 + 95 + 123) / 3;

    console.log(`average score of dolphins is: ${averageDolphins}`);
    console.log(`average score of koalas is: ${averageKoalas}`);

    if (averageDolphins > averageKoalas && averageDolphins >= 100) {
        console.log("DOLPHINS WINS !!");
    }
    else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
        console.log("KOALAS WINS !!!");
    }
    else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
        console.log("BOTH WIN THE TROPHY");
    } else {
        console.log("NO WINNER");
    }

}

codingChallengeStatements();

function switchStatements() {
    const day = 'monday';
    // if you forget break code continue executing until next break.
    // switch does a strict comparison.
    switch (day) {
        case 'monday':
            // iside case no curly bracelets are needed...
            console.log('its monday !!');
            console.log('go to coding meetup..');
            break;
        case 'tueasday':
            console.log('its tuesday !!');
            break;
        case 'wednesday':
        case 'thursday':
            console.log('those days are also good..');
            break;
        case 'friday':
            console.log('i record wideos');
            break;
        case 'saturday':
        case 'sunday':
            console.log('enjoy the weekend');
            break;
        default:
            console.log('i dont know what day that is...');
    }

}

switchStatements();

function switchStatementsIfElse() {
    const day = 'monday';
    if (day === 'monday') {
        console.log('its monday');
        console.log('go to coding meetup.');
    } else if (day === 'tuesday') {
        console.log('its tuesday');
    } else if (day === 'wednesday' || day === 'thursday') {
        console.log('those days are also good.');
    } else if (day === 'friday') {
        console.log('i record videos');
    } else if (day === 'saturday' || day === 'sunday') {
        console.log('enjoy the weekend');
    } else {
        console.log('i dont know what they are those..');
    }
}

switchStatementsIfElse();

function expressionVsStatements() {
    // Expressions produce value
    // right side here is the expression
    let expression = 3 + 4;

    // statements is a bigger piece of code those not particularly create a value;
    // statements or declaration is the whole sentence, expressions are more like the words.

    // whole if statement does not produce a value
    if (23 > 10) {
        const str = '23 is bigger'; // this whole line is also a statement.
    }
    // JS expect statements and expression on different places.

    // here the literal string only accepts an expression not a statement.
    console.log(`I'm ${2037 - 1986} years old and this literal string only accpet expressions not statements ${expression}`);
}

function tenaryConditionalOperators() {
    // basically if else in one line
    // operators are also expressions
    let age = 18;
    age >= 18 ? console.log('legal age can drink alcohol😁😁😁') : console.log('go drink water slum.🐱‍🐉🐱‍🐉🐱‍🐉');

    // ternary operators are actually expressions so we can use this ase expressions and can use it a tempelate literal.
    const drink = age >= 18 ? 'wine 🍷' : 'water 💧'
    console.log(drink);

    let drinkAnother;
    if (age < 18) {
        drinkAnother = 'wine 🍷';
    } else {
        drinkAnother = 'water 💧'
    }
    console.log(`i like to drink a ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

    // operators are expressions dont forget theese.
    // ternary is not a total replacement for if else, it just are a very good short and quick decisisons.
}

tenaryConditionalOperators();

function codingChallengeTernaryConditionalTipCalculator() {
    const billValue = 300;
    let tipValue;

    tipValue = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
    console.log(`The bill was ${billValue}, tip was ${tipValue}, and the total value ${tipValue + billValue}`);
}

codingChallengeTernaryConditionalTipCalculator();

