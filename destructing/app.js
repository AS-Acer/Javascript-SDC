// Destructing using 

let langs = ["c#", "C++", "JavaScript", "Python"];
let lang1, lang2, lang3, lang4;

// lang1 = langs[0];
// lang2 = langs[1];
// lang3 = langs[2];
// lang4 = langs[3];

[lang1, lang2, lang3, lang4] = langs

console.log(lang1, lang2, lang3, lang4);

//example 2
const calculate = (a, b) => {

    const collect = a + b;
    const extract = a - b;
    const multiply = a * b;
    const divide = a / b;

    const array = [collect, extract, multiply, divide];
    return array
}

let [a, b, c, d] = calculate(10, 2);
console.log(a, b, c, d);

//example 3

const person = {
    firstName: "Ahmet",
    lastName: "Acer",
    salary: 10000,
    age: 20

}

let { firstName: Name, lastName: Surname, salary: monthlyIncome, age: lifeTime } = person
console.log(Name, Surname, monthlyIncome, lifeTime);


