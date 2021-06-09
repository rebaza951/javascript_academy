/*
* How to copy an object with taking the same reference.
*
*
* 1 - The object only has primitive values ( shallow copy / copiado superficial).
*
* 1.1 First way:
*/
const person = { name: "luis", lastname: "perez", age: 23, adult: true};
const copyPerson = Object.assign({}, person);
copyPerson; // this is a new reference

/*
* 1.2 Second way:
*/
const otherPerson = {...person};
otherPerson; // this is a new reference

/*
* 2 - The object has more objects inside
*
* 2.1 First way: the object does NOT has functions inside
*/
const student = {name: "juan", pets: ["dog", "fish"]};
const copyStudent = JSON.parse(JSON.stringify(student));
copyStudent; // this is a new reference

/*
* 2.2 Second way: the object has functions inside ( deep clone/ copiado profundo )
* problem: functions are good for transforming into string.
* options:
*
* - loop recursively each property from the object into new object
* - use deepClone method from lodash: https://lodash.com/docs/#cloneDeep
* */
