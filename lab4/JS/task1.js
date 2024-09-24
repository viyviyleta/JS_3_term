/*1.	Имеется список товаров. Реализуйте функции, которые добавляют, удаляют товар из списка, проверяет наличие товара. 
Определите количество имеющего товара. Используйте коллекцию Set.  */
let products = new Set();

function addProduct(product)
{
    products.add(product);
}

function deleteProdut(product)
{
    products.delete(product);
}

function isProduct(product)
{
    return products.has(product);
}

function countOfProduct(product)
{
    return products.size;
}

addProduct("яблоко");
addProduct("арбуз");
addProduct("что-то еще вкусное");
console.log(isProduct("яблоко"));
deleteProdut("арбуз");
console.log(isProduct("арбуз"));
console.log(countOfProduct());
