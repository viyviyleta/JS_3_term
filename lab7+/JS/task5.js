/*5. Создайте модуль counter, который инкапсулирует
переменную count и предоставляет методы 
для инкрементации, декрементации и 
получения текущего значения. 
Используйте this для доступа к свойствам. */

function Counter() {
    this.count = 0;

    this.increment = function() {
        return ++this.count;
    };

    this.decrement = function() {
        return --this.count;
    };

    this.getCount = function() {
        return this.count;
    };
}

const counter = new Counter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1
