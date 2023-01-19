function objeto2(){
    var pessoa = {
        nome : "Diego",
        hello : function(){
            return "Hello Pessoa";
        }
    }
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}
objeto2();

