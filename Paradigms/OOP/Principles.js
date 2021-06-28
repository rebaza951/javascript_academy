/*
* Reference: https://medium.com/@jmz12/javascript-los-4-principios-de-poo-9b48c436ae69
* Section: Applying Principles of Object OrientedProgramming
* */

class Pokemon {
  /*
    Here we are saying that attributes are private,
    avoiding to be accessible from outside of the class
  */
  #name = '';
  #type = '';
  #evolutions = [];

  constructor(name, type, evolutions) {
    this.#name = name;
    this.#type = type;
    this.#evolutions = evolutions;
  }

  /*
    We can use the word "set", to specify that
    the method only modify attributes and will
    not return anything.
  */

  set name(value) {
    this.#name = value;
  }

  set type(value) {
    this.#type = value;
  }

  set evolutions(value) {
    this.#evolutions = value;
  }

  /*
    We can use the word "get", to specify that
    the method will not receive arguments and
    always will return something.
  */

  get name() {
    return this.#name;
  }

  get type() {
    return this.#type;
  }

  get evolutions() {
    return this.#evolutions;
  }

  /*
    Other methods
   */

  attack() {
    return `${this.name}, is attacking`;
  }

  evolve(level = 0) {
    const EVOLVE = this.evolutions[level] || '';
    let message = 'I\'m not able to evolve';
    if (EVOLVE) {
      message = `${this.name} has evolved to ${EVOLVE}`;
      this.name = EVOLVE;
    }
    return message;
  }
}

//Example:

const charmander = new Pokemon('charmander', 'fire', ['charmeleon', 'charizar']);

console.log(charmander.name);
console.log(charmander.attack());
console.log(charmander.evolve());
