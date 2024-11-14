export function createlist_num(num,text){
    let lista = `<ul>`;
    for(let i = 1; i < num+1; i++){
        lista += `\n <li>${text} ${i} <li>`;
    }
    lista += '\n<ul>';
    return lista;
}

export function createlist_list(list){
    let lista = `<ul>`;
    for(let i of list){
        lista += `\n <li>${i}<li>`;
    }
    lista += '\n<ul>';
    return lista;
}