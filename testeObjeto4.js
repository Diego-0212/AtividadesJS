class Pessoa{
    constructor(){
        this.name = "Diego";
    }
    hello(){
        return "Hello Passoa";
    }
}
function objeto4(){
    var pessoa = new Pessoa();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

objeto4();