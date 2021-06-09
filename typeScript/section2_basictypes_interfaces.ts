// BOOLEAN
let isDone: boolean = true;

// NUMBER
let decimal: number = 123;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// @ts-ignore
let big: bigint = 100n;

// STRING
let fullName: string = 'Rey misterio';
let age: number = 12;
let phrase: string = fullName + age;
console.log(phrase);

// ARRAY
// first way
let list: Array<number> = [1,2,3];
// second way
let list2: number[] = [1,2,3];

//TUPLE
let x: [string, number];
// wrong
// x = [123, "hello"];
//ok
x = ["hello", 123];

//ENUM
enum Color{
    red,
    green,
    blue,
}
let c: Color = Color.blue;

//UNKNOWN - ANY
let notSure: unknown = 4;
notSure = "let's change for a string";
notSure = false;

// void
function hello(): void{
    console.log("hello")
}

// NULL
let n: null = null;
// UNDEFINED
let u: undefined = undefined;

// NEVER


// INTERFACES

//@implicit interface
function printLabel( obj: { label: string}) {
    console.log( obj.label );
}
const testObject = { name: "ana", label: "enginner"};
printLabel(testObject)

//@explicit interface
interface User {
    readonly id: number;
    name: string;
    age?: number;
}
function printUser( user: User) {
    console.log( user.name );
}
const userTest: User = { id: 1, name: "ana"};
// userTest.id = 123; property now allowed to be modified
printUser(userTest)

