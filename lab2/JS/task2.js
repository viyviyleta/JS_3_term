function getSummOfKubs(number){
    let summ = 0;
    for(i = 1; i <= number; i++){
        summ += i * 3;
    }
    return summ;
}

alert(getSummOfKubs(3));
