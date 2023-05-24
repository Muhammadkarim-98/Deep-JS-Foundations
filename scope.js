var x = 1;

{
	var x = 2;
}
console.log(x);
//
var teacher = "Kyle";

function otherClass() {
	var teacher = "Suzy";

	function ask(question) {
		console.log(teacher, question);
	}
	ask("Why?");
}
otherClass();
// ask() // ReferenceError: ask is not defined.
//
function teacher() { };
let myTeacher = function anotherTeacher() { console.log(anotherTeacher) };
console.log(teacher);
console.log(myTeacher);
console.log(anotherTeacher); // ReferenceError: anotherTeacher is not defined.
//
let fun1 = function () { }; // This is FUNCTION EXPRESSION;
let fun2 = function express123() { }; // This is NAMED FUNCTION EXPRESSION;
