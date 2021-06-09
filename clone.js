const people = [
  {name: "juan", age: 18, country: "peru"},
  {name: "luciano", age: 20, country: "ecuador"},
  {name: "marco", age: 22, country: "ee.uu"}
];
console.log("people:", people);

// first way: spread operator (...)
const spreadArr = [...people]; // cloning into array
const spreadObj = {...people}; // cloning into object

console.log("spreadArr:", spreadArr);
console.log("spreadObj:", spreadObj);

// second way: assign method
const assignArr = Object.assign([],people);
const assignObj = Object.assign({},people);

console.log("assignArr:", assignArr);
console.log("assignObj:", assignObj);

//third way: JSON
const json = JSON.parse(JSON.stringify(people));
console.log("json:", json);


//source: https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/


