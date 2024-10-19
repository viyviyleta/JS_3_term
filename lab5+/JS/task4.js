/*4. Какие переменные и функции сохраняются в глобальный объект window? 
Получите значения всех созданных переменных и функции, 
которые хранятся в глобальном объекте window. 
Переопределите переменные через глобальный объект.*/

var globalVal1 = "Violetta";
let globalVal2 = "Nelli";

alert(window.globalVal1); // Violetta
alert(window.globalVal2); // undefined

window.globalVal2 = {
    name: "Nelli",
    age: 22
};

alert(window.globalVal2.name); // Nelli

window.globalVal1 = "New global value";
alert(globalVal1);

function globalFunction(){
    return "I`m global function!"
}
alert(window.globalFunction());

window.globalFunction = function(){
    return "New function!";
}
alert(globalFunction());