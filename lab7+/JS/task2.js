/*Создайте объект car, который имеет свойства model и
year, а также метод getInfo, 
который выводит информацию о машине. */

const car = {
    model: "BMW",
    year: 2020,

    getInfo() {
        console.log("Model:", this.model, "year:", this.year);
    }
};

car.getInfo();