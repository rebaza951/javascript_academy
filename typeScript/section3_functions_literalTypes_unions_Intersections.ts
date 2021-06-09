//  FUNCTIONS
function sum(x: number, y: number): number {
    return x + y;
}

const sum2 = function (x:number, y:number = 0): number {
    //predefining parameter Y
    return x + y;
}

const sum3 = ( x:number, y?:number):number => {
    // making param Y not required
    return x + y;
}

sum(1,2);
sum2(1)
sum3(1);

// LITERAL TYPES

type Color = "green" | "red" | "yellow";
const color: Color = "red"; // validate expected color

interface MapConfig {
    long: number;
    lat: number;
    titleSize: 8|16|32;
}

// UNION TYPES
// ensure that only common attributes are
// are present in the object reference
interface SuccessResponse {
    success: true;
    message: null;
}

interface ErrorResponse {
    success: false;
    message: string;
}

type ResponseI = SuccessResponse | ErrorResponse;

const result: ResponseI = {
    success: true,
    message: null
}

//another example of union
interface Bird{
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;
const pet = getSmallPet();
pet.layEggs()
//pet.swim() error

// INTERCEPTION TYPES
// it ensure that all attributes are present
// in the object
type Person = {
    firstName: string;
    lastName: string;
}

type User = {
    id: string;
}

type UserPerson = Person & User;

const newUser: UserPerson = {
    firstName: "miguel",
    lastName: "perez",
    id: "111222"
}