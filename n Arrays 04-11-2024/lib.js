export function minimo(array){
    let min = 9999999;
    for(let a of array){
        if(a<min){
            min = a;
        }
    }
    return min
}

export function maximo(array){
    let max = -9999999;
    for(let a of array){
        if(a>max){
            max = a;
        }
    }
    return max
}

export function range_simples(n) {
    let arr = []
    for(let a = 0; a<n; a++){
        arr[a] = a;
    }
    return arr
}

export function range_composto(n1, n2) {
    let arr = []
    let a = 0
    for(n1; n1<n2; n1++){
        arr[a] = n1;
        a++;
    }
    return arr;
}

export function range_pulo(n1, n2, n3) {
    let arr = []
    let a = 0
    for(n1; n1<n2; n1+= n3){
        arr[a] = n1;
        a++;
    }
    return arr;
}