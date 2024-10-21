/*3. Создайте функцию-конструктор Book,которая 
создает объекты с методами getTitle и getAuthor*/

function Book(title, author){
    this.title = title;
    this.author = author;

    this.getTitle = function() {
        return this.title;
      };
    
      this.getAuthor = function() {
        return this.author;
      };
}

const myBook = new Book("1984", "George Orwell");

console.log(myBook.getTitle());  
console.log(myBook.getAuthor()); 