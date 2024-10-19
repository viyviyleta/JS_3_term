/*2 Реализуйте каррированную функцию, которая рассчитывает 
объем прямоугольного параллелепипеда. 
Выполните преобразование функции для неоднократного расчёта 
объема прямоугольных параллелепипедов, у которых одно ребро 
одинаковой длины.*/

const calculateVolume = (length) => (width) => (height) => length * width * height;

const volumeWithLength = calculateVolume(5);

let volume1 = volumeWithLength(2)(3);
console.log("Объем с длиной 5, шириной 2 и высотой 3: ", volume1);

let volume2 = volumeWithLength(1)(1);
console.log("Объем с длиной 5, шириной 1 и высотой 1: ", volume2);


