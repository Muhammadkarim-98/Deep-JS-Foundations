// FUNCTION SCOPE
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

// BLOCK SCOPING
const student = 'Ismail';

{
	const student = 'Ishaq';
	console.log(student)
}


console.log(student)
