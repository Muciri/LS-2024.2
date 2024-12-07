function check(A1, A2, A3){
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

console.log(check(3, 4, 4))