// let js = '프로그래밍 언어';
// if(js === '프로그래밍 언어') alert('Hello World!');
// console.log(40+8+23-10);

// console.log('Jonas');
// console.log(23);
// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// age = 31;

// const birthYear = 2002;
// birthYear = 1990; X 재할당 불가

// const job; X 초기 값 선언해야 함

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);

// // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// // 2 ** 3 means 2 to the poser of 3 = 2 * 2 * 2

// // const firstName = 'Jonas';
// // const lastName = 'Schmedtmann';
// // console.log(firstName + ' ' + lastName);

// // 템플릿 문자열 ``
// // typeof 연산자 -> 종류

// // 연산자 종류
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x ++; // x = x +1
// x --;
// console.log(x);

// // 비교 연산자
// console.log(ageJonas > ageSarah);
// console.log(ageJonas < ageSarah);
// // >, <. >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// // 연산자는 왼쪽에서 오른쪽으로
// console.log(25 - 10 - 5);
// console.log(`---------`);
// let y, z;
// y = z = 25 - 10 - 5; // y = z = 10, y = 10
// console.log(y, z);

// console.log(`averageAge`);
// const averageAge = ageJonas + ageSarah / 2
// console.log(ageJonas, ageSarah, averageAge);


// coading challange #1 ⭐️

// #Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// #Test Data 2
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn
// console.log(markHigherBMI);

// const name = 'hyun';
// const job = 'student';
// const birthYear = 2002;
// const year = 2024

// const hyun = "I'm " + name + ", a " + (year - birthYear) + ' years old ' + job + '!';

// console.log(hyun);

// const hyunNew = `I'm ${name}, a ${year - birthYear} years old ${job}!`
// console.log(hyunNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`)

// const age = 15;
// // const isOldEnough = age >= 18;

// if(age >= 18) {
//     console.log('Hyun can start driving license 🚗');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Hyun is too young. Wait another ${yearsLeft} years :)`)
// }

// let century;

// const birthYear = 1991;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

/*
//coading challenge #2 ⭐️
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

Write your code below. Good luck! 🙂 

if (BMIMark>BMIJohn){
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}

if (BMIMark>BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

*/
/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Hyun'));
console.log(typeof NaN); // number

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' + '10' - '2');

let n = '1' + 1; // 11이라는 문자열
n = n - 1; // 11 문자열 - 1 = 숫자형으로 변환, 10
console.log(n); // n = Number 형식의 10
// 연산자는 할 수 있는 것들을 한다 타입 강압 -는 숫자 +는 문자형으로 자동으로 변환
*/

// Boolean True False 🌸

// 5 falsy value: 0, '', undefined, null, NaN
// console.log(Boolean(0)); // F
// console.log(Boolean(undefined)); // F
// console.log(Boolean('Hyun')); // T
// console.log(Boolean({})); // T
// console.log(Boolean('')); // F

// const money = 0;
// if(money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log("You should get a job!");
// }

// let height = 0;
// if(height){
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)'); // 코드 블럭 하나면 중괄호 생략 가능
if (age == 18) console.log('You just became an adult :D (loose)'); 
// == 강압적임 , === 강압적이지 않음

const favorite = Number(prompt("What's your favorite number?"));
console.log(typeof favorite);

if (favorite === 23) { // '23' == 23
    console.log('Cool! 23 is an amazing number!')
} else if (favorite === 7) {
    console.log('7 is also a cool number!')
} else if (favorite === 9){
    console.log('9 is also a cool number!')
} else {
    console.log('Number is not 23 or 7 or 9')
}

if(favorite !== 23) console.log('Why not 23?');