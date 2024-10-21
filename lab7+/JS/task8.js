/*8. Создайте объект car с тремя свойствами: 
make, model, и year. Сначала определите их \
с параметрами, разрешающими изменение и удаление. 
Затем переопределите дескрипторы, 
чтобы все свойства стали неизменяемыми. */

const car = {};
Object.defineProperty(car, 'make',
    {
        value: "Lamborghini",
        writable: true,
        configurable: true
    });

Object.defineProperty(car, 'model',
    {
        value: "urus",
        writable: true,
        configurable: true
    });

Object.defineProperty(car, 'year',
    {
        value: 2021,
        writable: true,
        configurable: true
    });

console.log(car);
delete car.year;
console.log(car.year);
console.log(car.model);

Object.defineProperty(car, 'make',
    {
        value: "Lamborghini",
        writable: false,
        configurable: false
    });

Object.defineProperty(car, 'model',
    {
        value: "urus",
        writable: false,
        configurable: false
    });

Object.defineProperty(car, 'year',
    {
        value: 2021,
        writable: false,
        configurable: false
    });

console.log(car);
delete car.year;
car.model = "diablo";
console.log(car);
console.log(car.model);
