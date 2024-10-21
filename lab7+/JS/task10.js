const rectangle = {
    _width: 0,
    _height: 0,

    get width(){
        return this._width;
    },
    
    set width(value){
        if (value > 0)
        {
            this._width = value;
        }
        else 
        {
            console.log("Ширина должна быть положительной!");
        }
    },

    get height ()
    {
        return this._height;
    },

    set height(value){
        if (value > 0)
        {
            this._height = value;
        }
        else
        {
            console.log("Высота должна быть положительной!");
        }
    },

    get Area(){
        return this.height*this.width;
    }
};

rectangle.height = 2;
rectangle.width = 5;

console.log(rectangle.Area);
console.log(rectangle.height);
console.log(rectangle.width);

rectangle.height = "sdf";

console.log(rectangle.Area);