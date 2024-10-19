/*5.Массив [1, 2, 3] передайте в качестве 
параметра функции sumValues. 
Используйте spread оператор.*/

let array = [1, 2, 3];

function sumValues(x, y, z){
    return x + y + z;
}

console.log(sumValues(...array));