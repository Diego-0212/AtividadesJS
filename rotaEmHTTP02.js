//Carrega o módulo HTTP
var fs = require('fs');
var http = require('http');
var url = require("url");

//Função para ler um arquivo e escreve-lo na res ponse 
function readFile (response, file){ //resposta

    fs.readFile(file, function(err, data){
        //Quando ler , escreve na response eo conteudo do arquivo JSON
        response.end(data);
    });
}   

//Função de callback para o servidor HTTP
var callback = function (request, response){ //requisição e resposta
     
    //Define o cabeçalho (header) com o tipo de resposta
    response.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});

    //Faz parse da URL separando o caminho (rota)
    var parts = url.parse(request.url); 
    var path = parts.path;

    //Verifica a rota 
    if (parts.path == "/rota1/cadastro"){
        //RETORNA O JSON DO CADASTRO.JSON
        readFile(response, "cadastro.json");
    } else if (parts.path == "/rota1/catalogo"){
        //RETORNA O JSON DO CATALAGO.JSON
        readFile(response, "catalogo.json");
    } else if (parts.path == "/rota1/dados"){
        //RETORNA O JSON DO DADOS.JSON
        readFile(response, "dados.json");
    } else {
        response.end("Rota Não Mapeado: " + parts.path);
    }  
};
//Cria um servidor HTTP que corresponde para todas as requisições 
var server = http.createServer(callback);

//Porta que o servidor vai escutar 
server.listen(3000);
//Mensagem ao inciar om servidor 
console.log("Servidor iniciando em http://localhost3000/");
