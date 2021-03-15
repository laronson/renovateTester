const _ = require("lodash")
var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

console.log(_.pluck(users, "user"))
