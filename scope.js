var x = 9; {
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
ask() // ReferenceError: ask is not defined.
    //
function teacher() {}
let myTeacher = function anotherTeacher() {
    console.log(anotherTeacher);
};
console.log(teacher);
console.log(myTeacher);
console.log(anotherTeacher); // ReferenceError: anotherTeacher is not defined.
//
let fun1 = function() {}; // This is FUNCTION EXPRESSION;
let fun2 = function express123() {}; // This is NAMED FUNCTION EXPRESSION;
// EXERCISE:

let getStudentById = (studentId) => studentRecords.find((record) => record.id == studentId);

// function getStudentById(studentId) {
// 	return studentRecords.find(function matchId(record) {
// 		return record.id == studentId;
// 	});
// }

let printRecords = (recordIds) =>
    recordIds
    .map(getStudentById)
    .sort((record1, record2) => (record1.name < record2.name ? -1 : record1.name > record2.name ? 1 : 0))
    .forEach((record) => console.log(`${record.name} ${record.id}: ${record.paid ? "Paid" : "Not Paid"}`));

// function printRecords(recordIds) {
// 	let records = recordIds.map(getStudentById);
// 	records.sort(function sortByNameAsc(record1, record2) {
// 		if (record1.name < record2.name) {
// 			return -1;
// 		} else if (record1.name > record2.name) {
// 			return 1;
// 		} else {
// 			return 0;
// 		}
// 	});
// 	records.forEach(function printRecord(record) {
// 		console.log(`${record.name} ${record.id}: ${record.paid ? "Paid" : "Not Paid"}`);
// 	});
// }

let paidStudentsToEnroll = () => [...currentEnrollment, ...(studentRecords.filter((record) => (record.paid && !currentEnrollment.includes(record.id))).map(record => record.id))];

// function paidStudentsToEnroll() {
// 	let idsToEnroll = studentRecords.filter(function needsToEnroll(record) {
// 		return (record.paid && !currentEnrollments.includes(record.id)).map(function getStudentById(record) {
// 			return record.id;
// 		});
// 	});
// 	return [...currentEnrollment, ...idsToEnroll];
// }

let remindUnpaid = recordIds => printRecords(recordIds.filter(studentId => !getStudentById(studentId).paid))

// function remindUnpaid(recordIds) {
// 	let unpaidIds = recordIds.filter(function isUnpaid(studentId) {
// 		let record = getStudentById(studentId);
// 		return !record.paid;
// 	});
// 	printRecords(unpaidIds);
// }

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
    { id: 313, name: "Frank", paid: true },
    { id: 410, name: "Suzy", paid: true },
    { id: 709, name: "Brian", paid: false },
    { id: 105, name: "Henry", paid: false },
    { id: 502, name: "Mary", paid: true },
    { id: 664, name: "Bob", paid: false },
    { id: 250, name: "Peter", paid: true },
    { id: 375, name: "Sarah", paid: true },
    { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

// EXPECTED: 👇🏼
/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
