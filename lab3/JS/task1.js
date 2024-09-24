/*Объедините два массива с вложенностью используя reduce().*/
let arr = [1, [1, 2, [3, 4]], [2, 4]];

let flattenedArray = arr.reduce((acc, curr) => acc.cocat(Array.isArray(curr) ? curr.flat() : curr), []);
console.log(flattenedArray);