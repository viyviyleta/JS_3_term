function basicOperation(operation, value1, value2) {
    
    if (operation == "+"){
        return value1 + value2;
    }
    if (operation == "-"){
        return value1 - value2;
    }
    if(operation == "*"){
        return value1 * value2;
    }
    if(operation == "/"){
        return value1 / value2;
    }
    return "Cannot parse the operator."
}

alert(basicOperation("*", 4, 5));