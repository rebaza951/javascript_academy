//spread use cases:

//A).- concat case;

//normal array concat() method:
const arr1 = [1,2,3,4];
const arr2 = [2,3,4,5];
const concat = arr1.concat(arr2);
console.log("concat:", arr1.concat(arr2));

//spread operator doing the concat job:
//array
const spreadArr = [...arr1, ...arr2];//note: in a large data this way will work slowly
console.log("spreadArr:", spreadArr);

//objects
const obj1 = {name: 'juan', country: 'peru'};
const obj2 = {name: 'lucas', age: 29};
const spreadObj = { ...obj1, ...obj2 };
console.log("spreadObj", spreadObj);