function Pessoa(){
    this.nome = "Diego";
    this.hello = function(){
        return "Hello Pessoa";
    }
}

function objeto3(){
    var pessoa = new pessoa();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

objeto3();
