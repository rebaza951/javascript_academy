/*
* Reference: https://medium.com/@jmz12/javascript-el-paradigma-de-poo-b04d19b6322c
* Section: Paradigm of Object OrientedProgramming
* */

class Pokemon {
  name = '';
  type = '';
  evolutions = [];

  constructor(name, type, evolutions) {
    this.name = name;
    this.type = type;
    this.evolutions = evolutions;
  }

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
