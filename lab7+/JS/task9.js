/* 9. Создайте массив, в котором будет три числа. 
Используя Object.defineProperty, 
добавьте свойство sum (геттер), 
которое будет возвращать сумму всех элементов массива. 
Сделайте это свойство доступным только для чтения.*/

const numbers = [1, 2, 3];

Object.defineProperty(numbers , 'sum', {
    get(){
        return this.reduce((acc, num) => acc + num, 0);
    },
    enumerable: true,
    configurable: false
});

console.log(numbers.sum);

numbers.sum = 10;
console.log(numbers.sum);

numbers.push(10);
console.log(numbers.sum);