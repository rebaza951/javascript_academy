class Person {
    firstName: string;
    constructor(firstName: string) {
        this.firstName = firstName;
    }
    introduceMyself() {
        return `hi, my name is ${this.firstName}`;
    }
}

const carlos = new Person("carlos");
console.log(carlos.introduceMyself());

//inheritance
class Animal {
    public name: string;
    private size: number;
    readonly id: string;

    constructor(name: string, size: number, id: string = "0001") {
        this.name = name;
        this.size = size;
        this.id = id;
    }

    public isBig() {
        return this.size > 10;
    }

    updateSize(value) {
        this.size = value;
    }

}

class Snake extends Animal {
    constructor(name: string, size: number) {
        super(name, size);
    }
}

let snake = new Snake("serpiente", 11);
snake.isBig();


// Enums
enum Direction {
    up,
    down,
    right,
    left
}

interface Ball {
    size: number;
    initPosition: Direction;
}

const ball: Ball = {
    size: 4,
    initPosition: Direction.down
}