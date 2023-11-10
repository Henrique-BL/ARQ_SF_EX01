//Adicionar um observador ao leitor de arquivos
document.getElementById('fileInput').addEventListener('change', leitura);

//Realiza a leitura do arquivo e chama a função de apresentação que vai alterar a lista 
function leitura(event) {
    const fileInput = event.target;
    const arquivo = fileInput.files[0]; //Arquivo selecionado

    if (arquivo) {
        const reader = new FileReader();

        reader.onload = function (e) {
            apresentacao(e.target.result); //Ativa a apresentacao após a leitura do arquivo 
        };

        reader.readAsText(arquivo); // Ler o arquivo de modo assíncrono
    }

   
}
 //Cria um item de lista para cada linha do arquivo e adiciona na lista
function apresentacao(content) {
    const lista = document.getElementById('fileContent');
    lista.innerHTML = ''; // Limpa o conteúdo anterior

    const lines = content.split('\n');
    lines.forEach(function (line) {
        const listaItem = document.createElement('li'); 
        listaItem.textContent = line;
        lista.appendChild(listaItem);
    });
}
