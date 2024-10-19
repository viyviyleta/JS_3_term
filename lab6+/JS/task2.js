/*2.Объект user имеет свойства name, age. 
Создайте объект admin, у которого есть 
свойства admin и все свойства объекта user. 
Используйте spread оператор.*/

let user =
{
    name: "Violetta",
    age: 18
};

let admin = {
    id: 1,
    ...user
}

console.log(admin);