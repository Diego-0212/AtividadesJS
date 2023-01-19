//Carrega o módulo HTTP
const http = require('http');
//Cria um servidor HTTP no qual envia uma mensagem
var callback = function (request, response){ //requisição e resposta
     
    //Define o cabeçalho (header) com o tipo de resposta
    response.writeHead(200, {"Content-type": "text/plain"});

    //Mensagem de retorno
    response.end("Ola Mundo Node!\n");
};
//Servidor
var server = http.createServer(callback);

//Porta que o servidor vai escutar 
server.listen(3000);
//Mensagem ao inciar om servidor 
console.log("Servidor iniciando ...");