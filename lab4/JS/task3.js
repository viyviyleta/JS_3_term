/*3.Используя коллекцию Map и ее методы, реализуйте хранилище товаров. В корзине хранится информация о товаре: id (ключ в коллекции Map), название, количество товара, цена. Разработайте функции, которые:  
- добавляют товар, 
- удаляют товар из списка по id, 
- удаляют товары по названию (учтите, что названия товаров могут повторяться), 
- изменяют количество каждого товара,
- изменяют стоимость товара.
Рассчитайте количество позиций в списке и сумму стоимости всех товаров.
*/
let products = new Map();

function addProduct(id, name, col, price)
{
  products.set(id, {name, col, price});
}

function deleteById(id)
{
    products.delete(id);
}

function deleteByName(name)
{
    for (let [id, product] of products) 
        {
          if (product.name === name) 
          {
            products.delete(id);
          }
        }
}

function updateCol(id, newCol) 
{
    if (products.has(id)) 
        {
          const product = products.get(id);
          product.col = newCol;
          products.set(id, product);
        }
}

function updatePrice(id, newPrice) 
{
    if (products.has(id)) 
    {
      const product = products.get(id);
      product.price = newPrice;
      products.set(id, product);
    }
}

function getProductCount() 
{
    return products.size;
}

function getTotalPrice() 
{
    let totalPrice = 0;
    for (const product of products.values()) 
    {
      totalPrice += product.col * product.price;
    }
    return totalPrice;
}

// Пример использования функций
addProduct(1, "Телефон", 2, 100);
addProduct(2, "Ноутбук", 1, 500);
addProduct(3, "Телевизор", 3, 200);

console.log(getProductCount()); // 3
console.log(getTotalPrice()); // 1300

deleteById(2);
console.log(getProductCount()); // 2
console.log(getTotalPrice()); // 800

deleteByName("Телефон");
console.log(getProductCount()); // 1
console.log(getTotalPrice()); // 600

updateCol(3, 5);
console.log(getTotalPrice()); // 1000

updatePrice(3, 250);
console.log(getTotalPrice()); // 1250