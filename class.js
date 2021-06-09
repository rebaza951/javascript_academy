// Classes Are Functions
// Initializing a function with a function expression
const x = function() {}

// Initializing a class with a class expression
const y = class {}

console.log(Object.getPrototypeOf(x));
console.log(Object.getPrototypeOf(y));
console.log(Function.prototype.isPrototypeOf(x));
console.log(Function.prototype.isPrototypeOf(y));

//The code declared with function and class both return a function [[Prototype]]

// Note: With prototypes, any function can become a constructor instance using the new keyword.
// Arrow Function doesnt have prototype, so we cannot use new keyword with arrows functions.

// constructor -----
function Hero(name, level) {
    this.name = name;
    this.level = level;
}

// Adding a method to the constructor
Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
}

// Creating a new constructor from the parent
function Mage(name, level, spell) {
    // Chain constructor with call
    Hero.call(this, name, level);

    this.spell = spell;
}

// class ---

// Initializing a class
class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}

// Creating a new class from the parent
class Mage extends Hero {
    constructor(name, level, spell) {
        // Chain constructor with super
        super(name, level);

        // Add a new property
        this.spell = spell;
    }
}
