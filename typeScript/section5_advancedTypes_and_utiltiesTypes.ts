interface Bird {
    fly(): void;
    layEggs(): void;
}

interface  Fish {
    swim(): void;
    layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();

//user type warn

function isFish (pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined; //casting
}

if(isFish(pet)) {
    pet.swim();
}else{
    pet.fly();
}

// DECLARE TYPES: INTERFACES VS TYPES

// 1. interfaces
// can be re-edited

interface Animal {
    foot: number;
}
enum Genders {
    male ,
    female
}
// 1.1 inheritance with interfaces
interface Tiger extends  Animal {
    gender: Genders
}

// 1.2 modify the interface
interface Animal {
    lungs: boolean;
}

const leopard: Tiger = {
    foot: 4,
    gender: Genders.female,
    lungs: true
}


//2. types
// is not open to modifications

type Person = {
    gender: Genders;
}

//2.1 inheritance with types
type Peruvian = Person & {
    country: string
}

//2.2 modify the type is not allowed
//type Person = {
//    lungs: boolean;
//}

const carlos: Peruvian = {
    country: "peru",
    gender: Genders.male
}

//UTILITY TYPES
