//criando uma nova classe
class pessoa{
    //construtor
    constructor(nome, idade, altura) {
        //variáveis de classe
        let id_n = 0
        //variáveis de instância
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.id = id_n + 1
    };
    //método
    ola(){
        return `olá, meu nome é ${this.nome}, tenho ${this.idade} anos e ${this.altura}CM de altura`
    }
};
//criando um novo objeto
const pessoa1 = new pessoa('Carlos', 19, 190);
//testando o objeto e seu método
console.log(pessoa1); 
console.log(pessoa1.ola()) 