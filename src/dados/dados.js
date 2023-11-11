//Camada de interação com o LocalStorage e arquivo txt
export function salvarNoLocalStorage(nota1, nota2, media) {
    var calculos = JSON.parse(localStorage.getItem('calculos')) || [];
    calculos.push({
        nota1: nota1,
        nota2: nota2,
        media: media
    });

    localStorage.setItem('calculos', JSON.stringify(calculos));
}

export function obterResultadosDoLocalStorage() {
    var calculos = JSON.parse(localStorage.getItem('calculos')) || [];
    
    if (calculos.length > 0) {
        return calculos.map(function (calculo) {
            return `Nota 1: ${calculo.nota1}, Nota 2: ${calculo.nota2}, Média: ${calculo.media}`;
        }).join('\n');
    } else {
        return '';
    }
}
//Salva as médias armazenadas no local storage em um arquivo txt local
export function salvarMediasTxt() {
    var resultados = obterResultadosDoLocalStorage();

    if (resultados.length > 0) {
        // Restante do código para criar o arquivo e realizar o download
        var blob = new Blob([resultados], { type: 'text/plain' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'calculos_realizados.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
    } else {
        alert('Nenhum cálculo foi realizado ainda.');
    }
}

//Le e retorna os dados do arquivo txt
export function lerArquivoTxt(arquivo) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function (e) {
            resolve(e.target.result);
        };

        reader.onerror = function (e) {
            reject(e);
        };
        return reader.readAsText(arquivo);
    });
}

//Limpa o local storage de operações anteriores
export function limparMediasLocalStorage(){
    localStorage.clear();
}