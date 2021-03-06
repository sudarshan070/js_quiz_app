// data
// score
// name
// question

// Method
// incrementScore
// decrementScore
// changeName
// accessQuestion
// deleteQuestion

// function createUser(name, score = 0) {
//   var obj = {};
//   obj.name = name;
//   obj.score = score;

//   obj.incrementScore = function() {
//     return ++obj.score;
//     // return obj;
//   };
//   obj.decrementScore = function() {
//     return --obj.score;
//     // return obj;
//   };
//   obj.changeName = function(newName) {
//     obj.name = newName;
//   };
//   return obj;
// }
// var nameUser = createUser("sudarshan", (score = 0));

// console.log(nameUser);

// ==================================

// createUserInffo = {
//   incrementScore: function() {
//     return ++this.score;
//   },
//   decrementScore: function() {
//     return --this.score;
//   },
//   changeName: function(newName) {
//     return (this.name = newName);
//   }
// };

// function createUser(name) {
//   var obj = {};
//   obj = Object.create(createUserInffo);
//   obj.name = name;
//   obj.score = 0;
//   return obj;
// }

// ========================
// Factory Pattern
// add question
// function createQuestion(title, option = [], answerIndex) {
//   let question = {};
//   question.title = title;
//   question.option = option;
//   question.answerIndex = answerIndex;
//   question.checkAnswer = function(value) {
//     return question.option[answerIndex] === value;
//   };
//   question.getAnswer = function() {
//     return question.option[answerIndex];
//   };
//   return question;
// }
// let questionOne = createQuestion(
//   "who is the vice captain of india in test cricket",
//   ["Ajinkya Rahane", "Rohit Sharma", "Virat Kohli", "Ishant Sharma"],
//   0
// );
// console.log(questionOne);
// console.log(questionOne.checkAnswer("Rohit Sharma"));
// console.log(questionOne.checkAnswer("Ishant Sharma"));
// console.log(questionOne.getAnswer());

// =====================

//  __proto__

// var questionMethod = {
//   checkAnswer: function(value) {
//     return this.option[this.answerIndex] === value;
//   },
//   getAnswer: function() {
//     return this.option[this.answerIndex];
//   }
// };

// function createQuestion(title, option = [], answerIndex) {
//   let question = Object.create(questionMethod);
//   question.title = title;
//   question.option = option;
//   question.answerIndex = answerIndex;

//   return question;
// }
// let questionOne = createQuestion(
//   "who is the vice captain of india in test cricket",
//   ["Ajinkya Rahane", "Rohit Sharma", "Virat Kohli", "Ishant Sharma"],
//   0
// );
// console.log(questionOne);
// console.log(questionOne.checkAnswer("Rohit Sharma"));
// console.log(questionOne.checkAnswer("Ishant Sharma"));
// console.log(questionOne.getAnswer());

//======================
// pesudoclasical

// function createQuestion(title, option = [], answerIndex) {
//   this.title = title;
//   this.option = option;
//   this.answerIndex = answerIndex;
// }

// createQuestion.prototype.checkAnswer = function(value) {
//   return this.option[this.answerIndex] === value;
// };

// createQuestion.prototype.getAnswer = function() {
//   return this.option[this.answerIndex];
// };

// let questionOne = new createQuestion(
//   "who is the vice captain of india in test cricket",
//   ["Ajinkya Rahane", "Rohit Sharma", "Virat Kohli", "Ishant Sharma"],
//   0
// );
// console.log(questionOne);
// console.log(questionOne.checkAnswer("Rohit Sharma"));
// console.log(questionOne.checkAnswer("Ishant Sharma"));
// console.log(questionOne.getAnswer());

// ================================

// class createQuestion {
//   constructor(title, option = [], answerIndex) {
//     this.title = title;
//     this.option = option;
//     this.answerIndex = answerIndex;
//   }
//   checkAnswer(value) {
//     return this.option[this.answerIndex] === value;
//   }
//   getAnswer() {
//     return this.option[this.answerIndex];
//   }
// }

// let questionOne = new createQuestion(
//   "who is the vice captain of india in test cricket",
//   ["Ajinkya Rahane", "Rohit Sharma", "Virat Kohli", "Ishant Sharma"],
//   0
// );
// console.log(questionOne);
// console.log(questionOne.checkAnswer("Rohit Sharma"));
// console.log(questionOne.checkAnswer("Ishant Sharma"));
// console.log(questionOne.getAnswer());

//
//============----------=======
//

// function createQuestion(t, o = [], ai) {
//   var question = {};
//   question.titel = t;
//   question.option = o;
//   question.answerIndex = ai;
//   question.getAnswer = function() {
//     return question.option[ai];
//   };
//   question.checkAnswer = function(value) {
//     return question.option[ai] === value;
//   };
//   return question;
// }
// var questionOne = createQuestion(
//   "Who is finance minister of India",
//   ["Amit Shaha", "Nitin Gadkari", "Nirmala Sitharaman", "Rajnath Singh"],
//   2
// );
// console.log(questionOne.checkAnswer("Nitin Gadkari"));
// console.log(questionOne.checkAnswer("Nirmala Sitharaman"));

//
// =============================
// dunder proto

// var questionMethod = {
//   checkAnswer: function(value) {
//     return this.option[this.answerIndex] === value;
//   },
//   getAnswer: function() {
//     return this.option[this.answerIndex];
//   }
// };

// function createQuestion(t, o = [], ai) {
//   var question = Object.create(questionMethod);
//   question.titel = t;
//   question.option = o;
//   question.answerIndex = ai;
//   return question;
// }

// var questionOne = createQuestion(
//   "Who is finance minister of India",
//   ["Amit Shaha", "Nitin Gadkari", "Nirmala Sitharaman", "Rajnath Singh"],
//   2
// );
// console.log(questionOne.checkAnswer("Nitin Gadkari"));
// console.log(questionOne.checkAnswer("Nirmala Sitharaman"));

// ============

// function createQuestion(t, o = [], ai) {
//   this.titel = t;
//   this.option = o;
//   this.answerIndex = ai;
// }
// createQuestion.prototype.checkAnswer = function(value) {
//   return this.option[this.answerIndex] === value;
// };
// createQuestion.prototype.getAnswer = function() {
//   return this.option[this.answerIndex];
// };

// var questionOne = new createQuestion(
//   "Who is finance minister of India",
//   ["Amit Shaha", "Nitin Gadkari", "Nirmala Sitharaman", "Rajnath Singh"],
//   2
// );
// console.log(questionOne.checkAnswer("Nitin Gadkari"));
// console.log(questionOne.checkAnswer("Nirmala Sitharaman"));

// ============

class createQuestion {
  constructor(t, o = [], ai) {
    this.titel = t;
    this.option = o;
    this.answerIndex = ai;
  }
  checkAnswer(value) {
    return this.option[this.answerIndex] === value;
  }
  getAnswer() {
    return this.option[this.answerIndex];
  }
}

var questionOne = new createQuestion(
  "Who is finance minister of India",
  ["Amit Shaha", "Nitin Gadkari", "Nirmala Sitharaman", "Rajnath Singh"],
  2
);
console.log(questionOne.checkAnswer("Nitin Gadkari"));
console.log(questionOne.checkAnswer("Nirmala Sitharaman"));
console.log(questionOne.checkAnswer("Rajnath Singh"));
