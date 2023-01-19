function testeArraysimples(){
    var numeros = [1, 2, 3]
    numeros.push(4); //Adiciona o numero 4
    numeros.push(5); //Adiciona o numero 5
    for (let i in numeros){     //METODO SIMPLIFICADO 
        console.log(numeros[i]); // Imprime cada item do array 
    }
}

testeArraysimples();
