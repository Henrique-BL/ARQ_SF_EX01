//Busca as médias digitadas, realiza o cálculo, apresenta o resultado e salva no LocalStorage 
function calcularMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);

    if (isNaN(nota1) || isNaN(nota2)) {
        alert('Por favor, insira valores válidos para as notas.');
        return;
    }

    var media = (nota1 + nota2) / 2; //Realização do cálculo
    document.getElementById('result').innerHTML = 'Média: ' + media.toFixed(2); //Apresentação do resultado

    // Recupera os cálculos e médias já realizados do localStorage
    var calculos = JSON.parse(localStorage.getItem('calculos')) || []; // Criando um objeto JSON com as notas calculadas e a média
    calculos.push({
        nota1: nota1,
        nota2: nota2,
        media: media.toFixed(2)
    });

    // Armazena o array atualizado no localStorage utilizando o stringify
    localStorage.setItem('calculos', JSON.stringify(calculos));
}

function salvarMedias() {
    var calculos = JSON.parse(localStorage.getItem('calculos')) || []; // Busca os cálculos realizados e salvos no LocalStorage

    if (calculos.length > 0) {
        var resultados = calculos.map(function (calculo) {
            return `Nota 1: ${calculo.nota1}, Nota 2: ${calculo.nota2}, Média: ${calculo.media}`;
        }).join('\n'); // Cria uma estrutura para escrita no arquivo txt com as notas e a média

        //Abaixo é criado uma tag de link para armazenamento do arquivo criado, forçado a clicagem para download logo após é feita a exclusão da tag 
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

