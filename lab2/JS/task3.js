function getArithmeticAverage(numbers){
    let result = 0;
    for(i = 0; i < numbers.length; i++){
        result += numbers[i];
    }
    return result / numbers.length;
}

alert(getArithmeticAverage([2,4,6,8,10]))