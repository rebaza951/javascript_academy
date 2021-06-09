// Definition:
//syntactically compact alternative to a regular function expression
//not use for: constructors, methods
// Methods:
//Arrow functions do not have their own this
// New:
//Arrow functions cannot be used as constructors and will throw an error when used with new.
// Prototype:
//Arrow functions do not have a prototype property.
// rest paramaters
const rest = (a,b,c, ...z) => {console.log(z)};
rest(1,2,3,4,5,6);

