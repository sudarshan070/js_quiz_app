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

createUserInffo = {
  incrementScore: function() {
    return ++this.score;
  },
  decrementScore: function() {
    return --this.score;
  },
  changeName: function(newName) {
    return (this.name = newName);
  }
};

function createUser(name) {
  var obj = {};
  obj = Object.create(createUserInffo);
  obj.name = name;
  obj.score = 0;
  return obj;
}
