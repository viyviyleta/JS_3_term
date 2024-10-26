const Shape = {
    type: '',
    color: '',
    size: '',
    get GetColor(){
        return this.color;
    }
};

const Circle = {
    type: 'circle',
    __proto__ : Shape
};

const Square = {
    __proto__ : Shape,
    type: 'square'
};

const Triangle = {
    __proto__ : Shape,
    type: 'triangle',
    sides: 3
};

const yellowSquare = {
    __proto__ : Square,
    color: 'yellow',
    size: 'large'
};

const smallYellowSquare = {
    __proto__ : Square,
    color: 'yellow',
    size: 'small'
};

const greenCircle = {
    __proto__ : Circle,
    color: 'green',
    size: 'large'
};

const triangleWithTwoLines = {
    __proto__ : Triangle,
    color: 'black',
    lines: 2
};

const triangleWithThreeLines = {
    __proto__ : Triangle,
    color: 'black',
    lines: 3
};

console.log(greenCircle.color); 
console.log(triangleWithThreeLines.lines);
console.log('color' in smallYellowSquare);