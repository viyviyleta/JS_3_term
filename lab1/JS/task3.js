let i = 2;
//сначала действие, потом возврат
let a = ++i;
console.log(i);
console.log(a);
// сначала возврат,  потом действие 
let b = i++;
console.log(b);
console.log(i);
// вывод результата
console.log(a==b);