// // FUNCTION SCOPE
const teacher = 'Anwar'; // !!!

function a() {
	const teacher = 'Ahmad'; // !!!
	console.log(teacher)
}
a();
console.log(teacher);

// IIFE
const teacher = 'Adham';
(function (teacher) { console.log(teacher) })('Ibrohim');
console.log(teacher);
// Ibrohim
// Adham

// // BLOCK SCOPING
const student = 'Ismail'; {
	const student = 'Ishaq';
	console.log(student)
}

console.log(student)

teacher = 'Sulayman';
// var teacher;

console.log(teacher)

function getTeacher() {
	return teacher;
}

function ask(question) { setTimeout(function waitASec() { console.log(question) }, 1000) }
ask('savol')

var teacher = 'Kyle';
var myTeacher = function () {
	console.log(teacher)
};
var teacher = 'Anwar';
myTeacher(); // Anwar

for (var i = 1; i <= 3; i++) {
	let j = i;
	setTimeout(function () {
		console.log(`j: ${j}`)
	}, j * 1000);
};
// Module Pattern
var workshop = { teacher: 'Armaan', ask(quiz) { console.log(this.teacher, quiz) } }
workshop.ask('howdy?')
