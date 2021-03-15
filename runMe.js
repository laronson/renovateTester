const isOdd = require("is-odd");
const _ = require("lodash")

console.log("hello world");
console.log(isOdd(2));


var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

console.log(_.pluck(users, "user"))
