/*5.Создайте функцию, которая принимает несколько объектов 
в качестве параметров и возвращает НОВЫЙ объект 
со всеми свойствами из входных объектов. 
Для объединения объектов и создания НОВОГО объекта использовать 
метод assign*/
function extend(...objects) 
{
  return Object.assign({}, ...objects);
}

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3 };
let obj3 = { d: 4 };

let mergedObj = extend(obj1, obj2, obj3);
console.log(mergedObj);