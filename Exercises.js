let x = 23;
console.log(x) // 23
console.log(x++) // 24
console.log(x) // 23
console.log(++x) // 22
console.log(x) // 23

let c = '5';
console.log(c + 1) // 51

let t = [];
let y = Symbol('kareem');

let x = typeof t;
console.log(typeof x == 'string');

x = '5'
y = x + 1;
console.log(y) // 51
y = x - 1;
console.log(y) // 4
console.log(null === undefined) // false

console.log(a)
var a;
a = 78

x = [1, 2, 3];
var y = x;
var z = y;
console.log(x == y); // true
console.log(x === y); // true

console.log(x == z); // false
console.log(x === z); // false

console.log(y == z); // false
console.log(y === z); // false

let a = [1, 2, 3];
console.log(a === x); // true
console.log(a == x); // true

3 + 5 = 8
9 + 2 = 11
10 * 20 = 200
a * b = c
10 / 'a' = ?
let x = 10 / 'a'; // Nan

if (!isNaN(x)) {
	console.log('x is a number')
} else { console.log('x is not a number!') }

let y = 1 - 'a'; // Nan

if (!isNaN(y)) {
	console.log('y is a number')
} else { console.log('y is not a number!') }

console.log(x == y);

var l = -0
var u = 0
Object.is(l, u);
console.log(1 < 2) // true
console.log(2 < 3) // true
console.log(1 < 2 < 3) // false 
console.log(3 > 2 > 1) // false

console.log(undefined > 0) // true
console.log(undefined < 0) // false
console.log(undefined == 0) // false

console.log(null > 0) // false
console.log(null < 0) // false
console.log(null >= 0) // true

console.log(String(-9)) // '-9'
console.log('25' > '12') // true

console.log([] == ![]); // true
console.log(+[] == +![]) // true
console.log(0 == +false) // true
console.log(0 == 0) // true

console.log(true == 0) // false
console.log(true == []) // false
console.log(true == ![]) // false

console.log(false == []) // true
console.log(false == ![]) // true

console.log(!!'false' == !!'true') // true
console.log(!!'false' === !!'true'); // true

console.log("b" + "a" + +"a" + "a") // baNaNa
console.log(NaN == NaN) // false
console.log(Object.is(NaN, NaN)); // true

console.log(+![]) // 0
console.log(+!![]) // 1

console.log(null == false) // false

console.log([1, 2, 3] + [4, 5, 6]) // 1,2,34,5,6

console.log([undefined] == 0); // true
console.log(10000000000000000 + 1) // 10000000000000000
