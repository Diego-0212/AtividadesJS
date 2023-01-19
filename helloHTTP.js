//Carrega o módulo HTTP
const http = require('http');
//Cria um servidor HTTP no qual envia uma mensagem
var server = http.createServer(function (request, response){ //requisição e resposta
     
    //Define o cabeçalho (header) com o tipo de resposta
    response.writeHead(200, {"Content-type": "text/plain"});

    //Mensagem de retorno
    response.end("Ola Mundo Node!\n");
});

//Porta que o servidor vai escutar 
server.listen(3000);
//Mensagem ao inciar om servidor 
console.log("Servidor iniciando em http://localhost:3000/");