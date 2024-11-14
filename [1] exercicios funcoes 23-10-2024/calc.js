function calc(a,b,op){
    if (op == '+'){
        return a+b;
    }
    else if (op == '-'){
        return a-b;
    }
    else if (op == '*'){
        return a*b;
    }
    else if (op == '/'){
        return a/b;
    }
}

let c = '+'
console.log(calc(1,2,c))