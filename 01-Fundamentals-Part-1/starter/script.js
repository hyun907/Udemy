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

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to the poser of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// 템플릿 문자열 ``
// typeof 연산자 -> 종류

// 연산자 종류
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x ++; // x = x +1
x --;
console.log(x);

// 비교 연산자
console.log(ageJonas > ageSarah);
console.log(ageJonas < ageSarah);
// >, <. >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);