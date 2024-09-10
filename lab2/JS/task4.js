function ReversedEnglishString(str){
    let result = "";
    for (i = str.length; i >= 0; i--){
        if (str[i] > "A" && str[i] < "z")
        result += str[i];
    }
    return result;
}

alert(ReversedEnglishString("JavaScr53э? ipt"));