var i = 0;
for( i = 0; i < 5; i++){
    console.log(i);
    setTimeout(()=>{
        console.log(i);
    }, 100);
}

// Syntactic sugar
// In computer science, syntactic sugar is syntax within a programming language,
// that is designed to make things easier to read or to express.

const obj1 = {};
const obj2 = Object.create(Object.prototype);
console.log(Object.prototype.isPrototypeOf(obj1));
console.log(Object.prototype.isPrototypeOf(obj2));

// antipattern
Object.prototype.sayHi = function() {
    console.log('Hi my name is ' + this.name);
}

const juan = {
    name: 'juan',
    country: 'peru'
};

const manuel = {
    name: 'manuel',
    country: 'españa'
};

juan.sayHi();
manuel.sayHi();

console.log('is name property of juan ?', juan.hasOwnProperty('name')); // name is property of juan
console.log('is sayHi property of juan ?', juan.hasOwnProperty('sayHi')); // sayHi is not property of juan
console.log('is sayHi property of Object.prototype ?', Object.prototype.hasOwnProperty('sayHi')); // sayHi is property of Object.prototype

// Creando objetos
// Object.create()
const GameObject = {
    title: 'crash kart',
    genre: 'cars',
    play: function(){
        console.log('-> im playing ' + this.title);
        return this;
    }
};

const gamev1 = Object.create(GameObject); //
gamev1.version = '1.0.0';
gamev1.sayVersion = function(){
    console.log('and the version ' + this.version);
    return this;
};
gamev1.play().sayVersion();

console.log('is version property of gamev1 ?', gamev1.hasOwnProperty('version'));
console.log('is title property of gamev1 ?', gamev1.hasOwnProperty('title'));
console.log('is title property of Game ?', GameObject.hasOwnProperty('title'));
console.log('is GameObject  prototype generator of gamev1 ?', GameObject.isPrototypeOf(gamev1));

// New
function GameFunction(){
    this.title = 'mortal kombat';
    this.year = 1990;
    this.run = function() {
        console.log('\n-> playing ' + this.title);
        return this;
    }
}

const mortalv1 = new GameFunction() // by calling "new" we are making a new copy of GameFunction with all it's properties.
mortalv1.type = 'arcade';
mortalv1.ShowType = function(){
    console.log('and is the type ' + this.type);
    return this;
}
mortalv1.run().ShowType();
console.log('is title property of gamev1 ?', mortalv1.hasOwnProperty('title'));
console.log('is title property of Game ?', GameFunction.hasOwnProperty('title'));
console.log('is GameFunction prototype generator of mortalv1 ?', GameFunction.isPrototypeOf(mortalv1));

// Diferences between Object.create vs New
// -> Object.create
console.log(gamev1); // only has "version" and "sayVersion" as its own properties
// the others one belongs to its prototpe.
// -> New
console.log(mortalv1); // the new copy of Gamefunction has its own properties

// Better way to implement inheritance
function GameFunction2(){
    this.title = 'mortal kombat2';
    this.year = 2020;
}
GameFunction2.prototype.run = function() {
    console.log('\n-> playing ' + this.title);
    return this;
}
const mortalv2 = new GameFunction2(); // title and year will be created but run will be inherited
console.log(mortalv2); //






