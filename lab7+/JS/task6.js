/*6. Создайте объект item со свойством price. 
Сначала определите его с параметрами, 
разрешающими изменение и удаление. 
Затем переопределите дескрипторы так, 
чтобы свойство стало неизменяемым. */

const item  = {};
Object.defineProperty(item, 'price', 
    {
        value : 100,
        writable: true,
        configurable: true
    });

console.log(item.price);
item.price = 150;
console.log(item.price);
delete item.price;
console.log(item.price);

Object.defineProperty(item, 'price',
    {
        value : 200,
        writable : false,
        configurable : false
    });

console.log(item.price);
item.price = 100;
console.log(item.price);
delete item.price;
console.log(item.price);
