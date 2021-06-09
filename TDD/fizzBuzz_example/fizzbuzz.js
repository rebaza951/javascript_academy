function fizzbuzz(number) {

    const divisible = (divisor, number) => number % divisor === 0;

    if (typeof number !== "number") {
        return null;
    }
    if (number === 0) {
        return 0;
    }
    if (divisible(3, number) && divisible(5, number)) {
        return 'fizzbazz'
    }
    if (divisible(3, number)) {
        return 'fizz'
    }
    if (divisible(5, number)) {
        return 'bazz'
    }
    return number
}

function print(number) {
    for (let i=0; i<= number; i++) {
        console.log(`${i}: ${fizzbuzz(i)}`);
    }
}

print(15);

module.exports = fizzbuzz;