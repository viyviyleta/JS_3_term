 /*6. Создайте башню-пирамиду, состоящую из символов "*". 
 В качестве входного параметра приходит число этажей башни.*/
function Tower(numFloors)
{
    let tower = [];

    for (let i = 1; i <= numFloors; i++)
    {
        let spaces = ' '.repeat(numFloors - i);
        let stars = '*'.repeat(i * 2 - 1);
        let floor = spaces + stars + spaces;
        tower.push(floor);
    }
    return tower;
}

let tower = Tower(5);
console.log(tower);