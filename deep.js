// if (!Object.is || true) {
// 	Object.is = function ObjectIs(x, y) {
// 		let xNegZero = isItNegZero(x);
// 		let yNegZero = isItNegZero(y);

// 		if (xNegZero || yNegZero) {

// 		} else if (isItNaN(x) && isItNaN(y)) {
// 			return true;
// 		} else { return x === y; }

// 		// *******************

// 		function isItNegZero(v) {
// 			return v == 0 && (1 / v) == -Infinity;
// 		}

// 		function isItNaN(v) {
// 			return v !== v;
// 		}

// 	}
// }

// // tests:
// console.log(Object.is(42, 42) === true);
// console.log(Object.is("foo", "foo") === true);
// console.log(Object.is(false, false) === true);
// console.log(Object.is(null, null) === true);
// console.log(Object.is(undefined, undefined) === true);
// console.log(Object.is(NaN, NaN) === true);
// console.log(Object.is(-0, -0) === true);
// console.log(Object.is(0, 0) === true);

// console.log(Object.is(-0, 0) === false);
// console.log(Object.is(0, -0) === false);
// console.log(Object.is(0, NaN) === false);
// console.log(Object.is(NaN, 0) === false);
// console.log(Object.is(42, "42") === false);
// console.log(Object.is("42", 42) === false);
// console.log(Object.is("foo", "bar") === false);
// console.log(Object.is(false, true) === false);
// console.log(Object.is(null, undefined) === false);
// console.log(Object.is(undefined, null) === false);

// ----------------------------------
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.toString()); // 1,2,3,4,5

// const arr2 = [];
// console.log(arr2.toString()); // ''

// const str = '';
// console.log(Number(str)); // 0

// const arr3 = ['3'];
// console.log(Number(arr3)); // 3

// const str2 = [''];
// console.log(Number(str2)); // 0 - becouse empty str was 0.

// const students1 = '22';
// const students2 = '20';
// console.log(students1 > students2); // true

// let arr1 = [2];
// let arr2 = [2];
// console.log(arr1 == arr2); // false

// ------------------------------------------------

// TODO: write the validation functions

// function isValidName(name) {
//   if (typeof name === "string" && name.length > 0 && name.trim().length >= 3) {
//     return true;
//   }
//   return false;
// }

// function hoursAttended(attended, length) {
//   if (typeof attended == "string" && attended.trim() > 0) {
//     attended = Number(attended);
//   }
//   if (typeof length == "string" && length.trim() > 0) {
//     length = Number(length);
//   }
//   if (typeof attended == "number" && typeof length == "number" && attended <= length && attended >= 0 && length >= 0 && Number.isInteger(attended) && Number.isInteger(length)) {
//     return true;
//   }
//   return false;
// }

// // tests:
// console.log(isValidName("Frank") === true);
// console.log(hoursAttended(6, 10) === true);
// console.log(hoursAttended(6, "10") === true);
// console.log(hoursAttended("6", 10) === true);
// console.log(hoursAttended("6", "10") === true);

// console.log(isValidName(false) === false);
// console.log(isValidName(null) === false);
// console.log(isValidName(undefined) === false);
// console.log(isValidName("") === false);
// console.log(isValidName("  \t\n") === false);
// console.log(isValidName("X") === false);
// console.log(hoursAttended("", 6) === false);
// console.log(hoursAttended(6, "") === false);
// console.log(hoursAttended("", "") === false);
// console.log(hoursAttended("foo", 6) === false);
// console.log(hoursAttended(6, "foo") === false);
// console.log(hoursAttended("foo", "bar") === false);
// console.log(hoursAttended(null, null) === false);
// console.log(hoursAttended(null, undefined) === false);
// console.log(hoursAttended(undefined, null) === false);
// console.log(hoursAttended(undefined, undefined) === false);
// console.log(hoursAttended(false, false) === false);
// console.log(hoursAttended(false, true) === false);
// console.log(hoursAttended(true, false) === false);
// console.log(hoursAttended(true, true) === false);
// console.log(hoursAttended(10, 6) === false);
// console.log(hoursAttended(10, "6") === false);
// console.log(hoursAttended("10", 6) === false);
// console.log(hoursAttended("10", "6") === false);
// console.log(hoursAttended(6, 10.1) === false);
// console.log(hoursAttended(6.1, 10) === false);
// console.log(hoursAttended(6, "10.1") === false);
// console.log(hoursAttended("6.1", 10) === false);
// console.log(hoursAttended("6.1", "10.1") === false);

// -------------------------------------------------------------------------------
// FUNCTION EXPRESSION
// function printRecords(recordIds) {
// 	let matchedStudents = [];
// 	let result = [];

// 	for (let i = 0; i < studentRecords.length; i++) {
// 		if (recordIds.includes(studentRecords[i].id)) {
// 			matchedStudents.push(studentRecords[i]);
// 		}
// 	}
// 	result = matchedStudents.map(v => `${v.name} (${v.id}): ${v.paid ? 'Paid' : 'Not Paid'}`).sort();
// 	return result;
// }
// //#################
// function remindUnpaid(recordIds) {
// 	let matchedOnes = [];
// 	let unpaid = [];

// 	for (let i = 0; i < studentRecords.length; i++) {
// 		if (recordIds.includes(studentRecords[i].id)) {
// 			matchedOnes.push(studentRecords[i]);
// 		};
// 	};
// 	unpaid = matchedOnes.filter(v => v.paid === false).map(el => `${el.name} (${el.id}): ${el.paid ? 'Paid' : 'Not Paid'}`).sort();
// 	return unpaid;
// }

// var currentEnrollment = [410, 105, 664, 375];

// var studentRecords = [
// 	{ id: 313, name: "Frank", paid: true, },
// 	{ id: 410, name: "Suzy", paid: true, },
// 	{ id: 709, name: "Brian", paid: false, },
// 	{ id: 105, name: "Henry", paid: false, },
// 	{ id: 502, name: "Mary", paid: true, },
// 	{ id: 664, name: "Bob", paid: false, },
// 	{ id: 250, name: "Peter", paid: true, },
// 	{ id: 375, name: "Sarah", paid: true, },
// 	{ id: 867, name: "Greg", paid: false, },
// ];

// printRecords(currentEnrollment);
// console.log(printRecords(currentEnrollment));
// currentEnrollment = paidStudentsToEnroll();
// printRecords(currentEnrollment);
// console.log("----");
// console.log(remindUnpaid(currentEnrollment));

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/

// (function () {
// 	// Your code here
// 	var x = 10;
// 	var y = 20;
// 	console.log(x + y - 15);
// })();

// BLOCK SCOPE ------------------------------------------------------
// let t = 20; {
// 	let t = 30;
// 	console.log(t)
// }
// console.log(t)

// HOISTING ---------------------------------------------------
// one(10); // Cannot access 'one' before initialization
// two(20); // Cannot access 'two' before initialization
// const one = function (v) {
// 	console.log(1 + v);
// };

// const two = function (v) {
// 	console.log(2 + v);f
// };

// SCOPE #######################################################
// var teacher = 'Kyle';
// var myTeacher = function () { console.log(teacher) };
// teacher = "Suzy";
// myTeacher();

// for (var i = 1; i <= 3; i++) {
// 	setTimeout(function () { console.log(`i: ${i}`) }, i * 1000)
// };

// this KEYWORD ###################################################
// function ask(question) { console.log(this.teacher, question) };

// function otherClass() {
// 	var myContext = { teacher: 'Suzy' };
// 	ask.call(myContext,
// 		'Why?')
// };
// otherClass();

// PROTOTYPES: AS "CLASSES"
// function Workshop(teacher) { this.teacher = teacher; }
// Workshop.prototype.ask = function (question) { console.log(this.teacher, question) };
// var deepJS = new Workshop('Kyle');
// var reactJS = new Workshop('Suzy');

// deepJS.ask('Is this bad?');
// reactJS.ask('Is this React JS?');

// -------------------------------
// function User(email, name) {
// 	(this.email = email), (this.name = name), this.online = false;
// };
// User.prototype.login = function () { this.online = true, console.log(this.email, 'logged in') };
// User.prototype.logout = function () { this.online = false, console.log(this.email, 'logged out') }
// const userOne = new User('uzbek@mail.com', 'muhammadkarim');
// userOne.login();
// userOne.logout();

// ---------------------------------
// PROTOTYPE INHERITANCE

function User(name, birthYear) {
	this.name = name;
	this.birthYear = new Date().getFullYear() - birthYear;

	// this.acceptance = function () {
	// 	if (this.birthYear > 65) { console.log(`You are in ${this.birthYear} and you are too old!`) } else if (this.birthYear < 18) { console.log(`You are in ${this.birthYear} and you are too young!`) } else { console.log(`You are Accepted!`) }
	// };
}

User.prototype.acceptance = function () {
	if (this.birthYear > 65) { console.log(`You are in ${this.birthYear} and you are too old!`) } else if (this.birthYear < 18) { console.log(`You are in ${this.birthYear} and you are too young!`) } else { console.log(`You are Accepted!`) }
};

const user1 = new User("Sara", 1957);
const user2 = new User("Kareem", 1998);

user1.acceptance();


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//PRACTISE ON "https://github.com/denysdovhan/wtfjs"

// console.log(Number("true")); // NaN
// console.log("B" + +"a"); // BNaN
// console.log(NaN === NaN); // false
// console.log([undefined] == 0); // true'
// console.log(Number([undefined])); // 0
// console.log(Number()); // 0
// console.log(parseInt(22.879999)); // 22
// console.log(typeof NaN); // number
// console.log("" + ""); // ''
// console.log(true + 1); // 2

// !!null; // -> false
// null == false; // -> false
// 0 == false; // -> true
// "" == false; // -> true

// let arr = [1, 2, 3, 4, 5];
// let nums1 = arr[0];
// let nums2 = arr[1];
// let nums3 = arr[2];

// let [a, b, c, ...rest] = arr;
// console.log(a, rest);

// function fn() {
// 	let t = 'lol';

// }

// {
// 	var g = 90;

// 	let d = "bro";
// };
// console.log(d)
// console.log(g);

// function fn2() {

// 	let s = 89;

// 	function fn3() {
// 		let a = 'll'
// 		console.log(s + a)

// 	}
// 	return fn3();
// }
// let concating = fn2();

// console.log(concating)

// function funExp() { }; // fn declation
// const namedFun = function funName() { }; // named fn expression;
// const anonim = function () { }; // anonim fn expression;
// () => { };

// !![] //  (exclamation mark)
// [] == true // false
// null == undefined;

// EXAMPLE FOR DYNAMIC SCOPE
// let y = 10;

// function foo() {
// 	console.log(y);
// }
// function bar() {
// 	y = 15;
// 	foo();
// }
// bar();

// EXAMPLE FOR HOISTING
// x = 90;
// var x;
// // and
// var x = 90;
// x = 90;
// are same!

// EXAMPLE FOR CLOSURE
// function outerFn() {
// 	let name = 'Rustam';
// 	function innerFn() {
// 		console.log(name)
// 	}
// 	innerFn();
// }
// outerFn(); // Rustam

// ###############################################################

// let x = 50;
// console.log(x)
// console.log(x++)
// console.log(x)

// console.log(typeof null); // object
// console.log(typeof undefined); // undefined

// x = [1, 2, 3];
// var y = x;
// var z = y;
// console.log(x == y); // true
// console.log(x === y); // true
// console.log(x == z); // false
// console.log(x === z); // false
// console.log(y == z); // false
// console.log(y === z); // false

// console.log([1, 2, 3] == [1, 2, 3]); // false
// console.log([1, 2, 3] === [1, 2, 3]); // false
// The comparisons are based on object references, not the content of the arrays.

// const number = 80;
// function inPureFn(a) {
// 	console.log(a + number);
// };
// console.log(adding(10));

// function pureFn(a, b) {
// 	return a * b
// }

// function recursionFn(a) {
// 	// base case
// 	if (a <= 0) {
// 		return 1;
// 	}
// 	// recursive case
// 	return a * (recursionFn(a - 1));
// };
// console.log(recursionFn(5))

// function recursion(n, name = []) {
// 	if (n <= 0) {
// 		return name
// 	}
// 	name.push('Kareem');
// 	return recursion(n - 1, name)
// };
// console.log(recursion(5));

// function recursion(n, number = []) {
// 	while (n > 0) {
// 		number.push(1);
// 		n = n - 1;
// 	}
// 	number.pop();
// 	return number;
// };
// console.log(recursion(5));

// const arr = [1, 2, 3, 4, 5];
// const added = arr.map(val => val + 2);
// console.log(added)

// when our parent fn returns  inner fn with it's lexical scope environment, even the parent fn is already returned, that's closure.

// function closure(a) {
// 	return function (b) {
// 		return a + b
// 	}
// };

// console.log(closure(5)(10));

// it's fn programming technic,fn
// function fn(callback) {
// 	return function (a) {
// 		return function (b) {
// 			return callback(a, b);
// 		};
// 	};
// }

// function add(a, b) {
// 	return a + b;
// }
// const result = fn(add);
// console.log(result(10)(10));

// const str = "string";
// const arr = [1, 2, 3, 4, 5];
// arr[3] = 0;
// console.log(arr);

// const compose = (a, b) => x => a(b(x));
// const addOne = (x) => x + 1;
// const double = (x) => x * 2;
// const composedFn = compose(addOne, double);
// console.log(composedFn(5));

// (function () {
// 	let d = 85;
// 	console.log(d)
// })()

// console.log(x); // Output: undefined
// var x = 5;
// console.log(x); // Output: 5

// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	this.hello = function () { console.log(`hello, my name ${name}`) }
// };
// const person1 = new Person('Kareem', 26);
// console.log(person1.name);
// person1.hello();
