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
