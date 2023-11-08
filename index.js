let language = 'JavaScript';

let score = 10;

let length = 10;
let width = 5;
let area = length*width

console.log(`the are of the rectangle is ${area} where it was calculated`)

// let num1 = 10
// let num2 = 4
// function remainder {
//     console.log (`d`)
// }
let num1 = 10;
let num2 = 4;

let remainder = num1 % num2;

console.log(`num1 / num2 = ${remainder}`);

// array
let person = ['Jake', 22, 2.3, 'Richard']

// object
let user = {
    name: 'Jake',
    age: 43,
    occupation: 'politician',
    car: 'BMW'
}
console.log(person[0])
console.log(person[1])
console.log(person[2])
console.log(person[3])

console.log(user)

console.log(typeof person);
console.log(typeof person[0]);
console.log(typeof person[1]);
console.log(typeof person[2]);
console.log(typeof person[3]);

console.log(typeof(user))
console.log(typeof(user.name))
console.log(typeof(user.age))
console.log(typeof(user.occupation))
console.log(typeof(user.car))

let deRate = 0.054
let peRate = 0.044
let eeRate = 0.051
const rand = 1000

console.log(`${deRate*rand}$`)
console.log(`${peRate*rand}#`)
console.log(`${eeRate*rand}E`)

function amountWIthVat(num){
    vat = num * 0.15;
    return vat
}

console.log(`The amount after tax is  R${amountWIthVat(400)}`);


let num1st = 8;
let num2nd = 20;
let numb3rd = 14

if(num1st>num2nd){
    console.log(`${num1st}`)
} else if(num2nd>num1st) {
    console.log(`${num2nd}`)
} else {
    console.log ('value equal')
}

function isOdd(num1st) {
    if (num1st % 2 !== 0) {
      return true; // It's odd
    } else {
      return false; // It's even
    }
  }
  if (isOdd(num1st)) {
    console.log(`${num1st} is an odd number.`);
  } else {
    console.log(`${num1st} is an even number.`);
  }
  function sortNumbersDescending(num1st, num2nd, num3rd) {
    if (num1st >= num2nd && num1st >= num3rd) {
      if (num2nd >= num3rd) {
        console.log(`Sorted numbers: ${num1st}, ${num2nd}, ${num3rd}`);
      } else {
        console.log(`Sorted numbers: ${num1st}, ${num3rd}, ${num2nd}`);
      }
    } else if (num2nd >= num1st && num2nd >= num3rd) {
      if (num1st >= num3rd) {
        console.log(`Sorted numbers: ${num2nd}, ${num1st}, ${num3rd}`);
      } else {
        console.log(`Sorted numbers: ${num2nd}, ${num3rd}, ${num1st}`);
      }
    } else {
      if (num1st >= num2nd) {
        console.log(`Sorted numbers: ${num3rd}, ${num1st}, ${num2nd}`);
      } else {
        console.log(`Sorted numbers: ${num3rd}, ${num2nd}, ${num1st}`);
      }
    }
  }  