function total(matriz) {
    let soma = 0;
    for (let n of matriz) {
        soma += n[1] * n[2];
    }
    return soma;
}

const products = [
    [1, 10.0, 2],
    [1, 10.0, 2],
    [1, 10.0, 2],
    [4, 10.0, 0]
]

console.log(total(products))