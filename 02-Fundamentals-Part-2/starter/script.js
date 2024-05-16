'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if = 23;

// function

/*
function logger() {
    console.log('My name is Hyun');
}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// 함수 선언문
function calcAge1(birthYear) {
    // const age = 2037 - birthYear;
    // return age;
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// 익명함수
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

// 함수는 값이라 변수에 저장할 수 있다
// 함수 선언은 호이스팅 프로세스 때문에 먼저 호출할 수 있다
// 익명함수는 함수식 이전에 호출할 수 없다

// 화살표 함수

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Hyun'));

*/

// 중첩 함수
// 기능 속에 기능 넣기

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

/*
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {

        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
    // return 시 함수 즉시 끝남
}
console.log(yearsUntilRetirement(1991, 'Hyun'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

///////////////////////////////////////
// Coding Challenge #1
/* Write your code below. Good luck! 🙂 */
// DATA 1
// const calcAverage = (first, second, third) => (first + second + third)/3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         return console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         return console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         return console.log(`No team wins...`);
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// // DATA 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins, scoreKoalas);

// Array

// const friend1 = 'Hyun';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Hyun', 'Steven', 'Peter'];

// const y = new Array(1991, 1984, 2008 , 2020);
// console.log(y);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// // friends = ['Bob', 'Alce'];

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// Basic Array Operations (Method) ⭐️

// const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// Remove elements
// friends.pop(); // Last
// const popped = friends.pop(); // Last
// console.log(friends);
// console.log(popped);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }

///////////////////////////////////////
// Coding Challenge #2
/* Write your code below. Good luck! 🙂 */

// const a = function(b) {
//     return b >= 50 && b <= 300 ? b * 0.15 : b * 0.2;
// }

// const calcTip = function(total) {
//     if (total > 50 && total < 300) {
//         return total * 0.15;
//     } else {
//         return total * 0.2;
//     }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], tips[2] + bills[2]];
// console.log(bills, tips, total);

// Object

// const jonasArray = [
//     'Jonas',
//     'Schemdtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// key : value
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// 5 프로퍼티 (속성)을 가짐

// Object - Dot vs. Bracket Notation

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas)

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const intersetedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// console.log(jonas.intersetedIn); // undefined

// if(jonas[intersetedIn]) {
//     console.log(jonas[intersetedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonass';
// console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

// Object Method
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },


//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
    
// };


// console.log(jonas['calcAge'](1991));
// this 키워드를 사용하면 객체 이름을 바꿀 때도 편하다!

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

// console.log(jonas.getSummary());

///////////////////////////
// Coding Challenge #3
/* Write your code below. Good luck! 🙂 */

// BMI = mass / (height * height)

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`)
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`)
}