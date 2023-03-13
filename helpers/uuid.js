
// This function can be used to generate a unique identifier (ID)
// Generates a random number between 0 and 1 using Math.random(), the resulting string is a random combination of numbers and lowercase letters
// Each time the function is called, a new unique string will be generated. Referenced from the excersizes: 22-Stu_Modular-Routing in helpers
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
  // represents the base-16 numbering system (hexadecimal).
    .toString(16)
    .substring(1);
