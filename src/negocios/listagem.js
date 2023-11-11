import { lerArquivoTxt } from "../dados/dados.js";

//Camada de interação entre as camadas
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fileInput').addEventListener('change', realizarLeitura);
});

window.realizarLeitura = async function (event) {
    console.log("IJ");
    const fileInput = event.target;
    const arquivo = fileInput.files[0]; //Arquivo selecionado
    if (arquivo) {
        //Chamada à camada de dados 
        lerArquivoTxt(arquivo)
            .then((arquivoContent) => {
                apresentarDados(arquivoContent);
            })
            .catch((error) => {
                console.error('Erro lendo arquivo:', error);
            });
    }
}


window.apresentarDados = function (content) {
    console.log(content);
    const lista = document.getElementById('fileContent');
    console.log(lista);
    lista.innerHTML = ''; // Limpa o conteúdo anterior

    const lines = content.split('\n');
    lines.forEach(function (line) {
        const listaItem = document.createElement('li');
        listaItem.textContent = line;
        lista.appendChild(listaItem);
    });
}
