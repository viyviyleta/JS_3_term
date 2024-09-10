function RepeatedString(n, str){
    let result = "";
    for (i = 0; i < n; i++){
        result += str;
    }
    return result;
}

alert(RepeatedString(4, "boo"));