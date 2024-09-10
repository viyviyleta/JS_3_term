let a = 5;
let b = 6;

// function task(a,b)
// {
//     if(a==b || b == undefined)
//     {
//         alert("Периметр квадрата равен ");
//         return a*4;
//     }
//     else
//     {
//         alert("Площаьдь прямоугольника равна ");
//         return a*b;
//     }
// }

// let task = function task(a,b)
// {
//     if(a==b || b == undefined)
//     {
//         alert("Периметр квадрата равен ");
//         return a*4;
//     }
//     else
//     {
//         alert("Площаьдь прямоугольника равна ");
//         return a*b;
//     }
// }

let task = (a, b) => {
    if(a==b || b == undefined)
    {
        alert("Периметр квадрата равен => ");
        return a*4;
    }
    else
    {
        alert("Площаьдь прямоугольника равна =>");
        return a*b;
    }
}

alert(task(a, b))
