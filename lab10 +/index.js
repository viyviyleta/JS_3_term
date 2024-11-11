// 1. Set 
console.log("1 задание: ");
const set = new Set([1, 1, 2, 3, 4]);
console.log(set); // Set {1, 2, 3, 4}

// 2. Delete
console.log("2 задание: ");
const name = "Lydia";
age = 21;
console.log(delete name); // false 
console.log(delete age);  // true 

// 3. Деструктуризация 
console.log("3 задание: ");
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;
console.log(y); // 1

// 4. spread
console.log("4 задание: ");
const user = { name: "Lydia", age: 21};
const admin = { admin: true, ...user };
console.log(admin); // { admin: true, name: "Lydia", age: 21 }

// 5. свойства с дескриптором
console.log("5 задание: ");
const person = { name: "Lydia"};
Object.defineProperty(person, "age", { value: 21});
console.log(person); // { name: "Lydia", age: 21}
console.log(Object.keys(person)); // ["name"]

// 6. Присваивание объектов как ключей
console.log("6 задание: ");
const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a[b]); // 456 

// 7. Функции с инкрементом
console.log("7 задание: ");
let num = 10;
const increaseNumber = () => num++;
const increasePassedNumber = (number) => number++;

const num1 = increaseNumber();          
const num2 = increasePassedNumber(num1); 
console.log(num1); // 10
console.log(num2); // 10

// 8. функция  с мутацией объекта
console.log("8 задание: ");
const value = { number: 10 };
const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));
};

multiply();       // 20 
multiply();       // 20
multiply(value);  // 20 
multiply(value);  // 40 

// 9. Reduce без начального значения
console.log("9 задание: ");
[1, 2, 3, 4].reduce((x, y) => {
    console.log(x, y); // 1 2, 3 3, 6 4

});
