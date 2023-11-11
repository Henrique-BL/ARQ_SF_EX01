import { salvarNoLocalStorage, salvarMediasTxt, limparMediasLocalStorage } from "../dados/dados.js";

//Camada de interação entre as camadas

window.calcularMedia = function () {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);

    if (isNaN(nota1) || isNaN(nota2)) {
        alert('Por favor, insira valores válidos para as notas.');
        return;
    }

    var media = (nota1 + nota2) / 2; //Realização do cálculo
    document.getElementById('result').innerHTML = 'Média: ' + media.toFixed(2); //Apresentação do resultado

    // Chamada à camada de dados
    salvarNoLocalStorage(nota1, nota2, media.toFixed(2));
}

window.salvarMedias = function () {
    salvarMediasTxt();
}
//Chamada à camada de dados 
window.limparMedias = function () {
    limparMediasLocalStorage();
}
