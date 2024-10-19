//1*1

function makeCounter()
{
    let currentCount = 1;

    return function()
    {
        return currentCount++;
    };
}

let counter = makeCounter();

alert(counter()); //1
alert(counter()); //2
alert(counter()); //3

let counter2= makeCounter();
alert(counter2()); //1

//1*2

let current = 1; 
function makeCounter2() {
    return function() {
        return current++;
    };
}

let counter2_1 = makeCounter2();
let counter2_2 = makeCounter2();

alert(counter2_1()); // 1
alert(counter2_1()); // 2

alert(counter2_2()); // 3
alert(counter2_2()); // 4
