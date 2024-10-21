/*1.	Создайте объект person с методами greet 
(сообщение с приветствием пользователя) и 
ageAfterYears (принимает years и возвращает 
“текущий возраст” + years), которые используют this
 для доступа к свойствам объекта.*/
const person = {
    name: "Violetta",
  
    greet() {
      console.log(`Привет, ${this}!`);
    },

    ageAfterYears(years) {
        console.log("Текущий возраст: " + years); 
    }
  };

 person.greet(); 
 person.ageAfterYears(18);