/*7. Создайте объект circle, который имеет 
свойство radius. Добавьте геттер для вычисления 
площади круга на основе радиуса, 
геттер и сеттер для изменения радиуса */

const circle = {
    _radius : 0,

    get radius(){
        return this._radius;
    },

    set radius(value){
        if(value > 0)
        {
            this._radius = value;
        }
        else 
        {
            console.log("Радиус должен быть положительным!");
        }
    },

    get Area()
    {
        return Math.PI*Math.pow(this._radius, 2);
    }
};

circle.radius = 2;

console.log(circle.radius);
console.log(circle.Area);

circle.radius="dsf";



