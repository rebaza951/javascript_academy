/*
* Reference: https://medium.com/@jmz12/javascript-los-cinco-principios-de-solid-a4f738bec325
* Section: solid principles
* */

class Pokemon {
  #name = '';
  #type = '';
  #evolutions = [];

  constructor(name, type, evolutions) {
    this.#name = name;
    this.#type = type;
    this.#evolutions = evolutions;
  }

  set name(value) {
    this.#name = value;
  }

  set type(value) {
    this.#type = value;
  }

  set evolutions(value) {
    this.#evolutions = value;
  }

  get name() {
    return this.#name;
  }

  get type() {
    return this.#type;
  }

  get evolutions() {
    return this.#evolutions;
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

