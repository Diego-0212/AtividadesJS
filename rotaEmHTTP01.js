//Carrega o módulo HTTP
const http = require('http');
var url = require("url");

//Função de callback para o servidor HTTP
var callback = function (request, response){ //requisição e resposta
     
    //Define o cabeçalho (header) com o tipo de resposta
    response.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});

    //Faz parse da URL separando o caminho (rota)
    var parts = url.parse(request.url); 

    //Verifica a rota 
    if (parts.path == "/"){
        response.end("Site Principal");
    } else if (parts.path == "/rota1"){
        response.end("Site da rota 1");
    } else {
        response.end("Rota Invalida: " + parts.path);
    }  
};
//Cria um servidor HTTP que corresponde para todas as requisições 
var server = http.createServer(callback);

//Porta que o servidor vai escutar 
server.listen(3000);
//Mensagem ao inciar om servidor 
console.log("Servidor iniciando em http://localhost3000/");