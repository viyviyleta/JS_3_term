function difference(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            arr1.splice(i, 1);
            i--;  
        }
    }
    return arr1;
}


const arr1 = ["apple", "banana", "orange", "grape"];
const arr2 = ["banana", "grape"];

const arr3 = difference(arr1, arr2);
alert(arr3);