/// this
function ask(question) {
	console.log(this.teacher, question);
}

function otherFun() {
	var context = { teacher: "Kareem" };
	ask.call(context, "Why?");
}
otherFun();

/// class
class workshop {
	constructor(teacher) {
		this.teacher = teacher;
	}
	ask(question) {
		console.log(this.teacher, question);
	}
};

var deepJs = new workshop('Majeed');
var nodeJs = new workshop('Ali');

deepJs.ask('Howdy!')
nodeJs.ask('Howdy!')
//
class workshop {
	constructor(teacher) {
		this.teacher = teacher;
	}
	ask(question) {
		console.log(this.teacher, question);
	}
};

class anotherWorkshop extends workshop {
	speakUp(msg) {
		this.ask(msg)
	}
};

var jsPart = new anotherWorkshop('Danish');
jsPart.speakUp("what's up?")

//

const fullName = "Oluwatobi Sofela";

// Nested functions containing two more fullName variables:
function profile() {
	const fullName = "Tobi Sho";

	function sayName() {
		const fullName = "Oluwa Sofe";

		function writeName() {
			return fullName;
		}
		return writeName();
	}
	return sayName();
};

console.log(profile())

console.log(sumFun(2, 4))
console.log(sumCon(2, 4))

function sumFun(a, b) { return a + b }; // 6
const sumCon = function sumFun(a, b) { return a + b }; // ReferenceError: Cannot access 'sumCon' before initialization

function Animal(name, kind, age) {
	this.name = name;
	this.kind = kind;
	this.age = age;
}

const dog = new Animal('amma', 'satta', 'doddy');
console.log(dog.kind);

const myObject = {
	city: "Madrid",
	greet() {
		console.log(`Greetings from ${this.city}`);
	},
};

console.log(myObject) // Greetings from Madrid
