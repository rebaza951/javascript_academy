var Person = /** @class */ (function () {
    function Person(firstName) {
        this.firstName = firstName;
    }
    Person.prototype.introduceMyself = function () {
        return "hi, my name is " + this.firstName;
    };
    return Person;
}());
var carlos = new Person("carlos");
console.log(carlos.introduceMyself());
