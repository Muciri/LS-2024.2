export function calc(a,b,op){
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

export function circ(r){
    let pi = 3.131592653589793;
    let a = r**2 * pi;
    return a;
}

export function check(A1, A2, A3){
    if (A1 <= 0 || A2 <= 0 || A3 <= 0) {
        return 'none';
    }
    if (A1 === A2 && A1 === A3) {
        return 'equilateral';
    }
    if (A1 === A2 || A1 === A3 || A2 === A3) {
        return 'isosceles';
    }
    return 'scalene';
}