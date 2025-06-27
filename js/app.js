
// Array vazio para armazenar os números que vão ser gerados aleatórios
const numerosGerados = []

// Função para fazer a exibição do numero aleatório
function exibirNumeroAleatorio(){
    // Captura o valor que foi digitado no no input
    const inputQuantidade = document.getElementById('numeroAleatorio');
    const quantidade = parseInt(inputQuantidade.value);

    // Limpa o array 
    numerosGerados.length = 0; 
    
    // Gera os números aleatórios e armazena no array
    for (let i = 0; i < quantidade; i++) {
        const numeroAleatorioGerado = Math.floor(Math.random() * 100) + 1;
        numerosGerados.push(numeroAleatorioGerado);
    }

    // Exibe a nova lista de números gerados na tela
    const listaNumeros = document.getElementById('listaNumerosGerados');
    listaNumeros.textContent = 'Números gerados: ' + numerosGerados.join(', ');

    // Limpa análise anterior
    const resultadoDiv = document.getElementById('resultadoAnalise');
    resultadoDiv.innerHTML = '<p>Clique em "Analisar" para ver os resultados.</p>';
}

// Função utilizada para realizar a media de todos os números que foram gerados aleatórios
function mediaTodosNumeros(){
    let soma = 0
    for(const numero of numerosGerados){
        soma += numero 
    }

    const media = soma / numerosGerados.length
    return media
}

// Função utilizada para encontrar o maior numero no array
function maiorNumeroArray() {
  const maiorNumero = Math.max(...numerosGerados)
  return maiorNumero
}

//Função para encontrar o menor numero no array
function menorNumeroArray() {
    const menorNumero = Math.min(...numerosGerados)
    return menorNumero
}

// Função feita para realizar a contagem de números pares e impares
function numerosParesImpares(){
    let contagemNumerosPares = 0
    let contageNumerosImpares = 0 

    for ( const numero of numerosGerados) {
        if (numero % 2 === 0){
            contagemNumerosPares++
        } else {
            contageNumerosImpares++
        }
    }
    return ["Números impares: " + contageNumerosImpares, " Números pares: " + contagemNumerosPares]
}


// Captura o botão analisar pelo id
const btnAnalisar = document.getElementById('analisar');

        btnAnalisar.addEventListener('click', () => {
            if (numerosGerados.length === 0) {
                alert("É preciso gerar os números antes de analisar!");
                return;
            }
            
            // Seleciona o elemento DIV onde os resultados da análise serão exibidos
            const resultadoDiv = document.getElementById('resultadoAnalise');

            const media = mediaTodosNumeros() // Calcula a média dos números que estão no array
            const maior = maiorNumeroArray() // Encontra o maior número que está no array 
            const menor = menorNumeroArray() // Encontra o menor número que está no array
            const contagemNumerosParesImpares = numerosParesImpares() // Retorna a contagem de numeros pares e impares
            
            resultadoDiv.innerHTML = `
                <b>Total de números:</b> ${numerosGerados.length}<br>
                <b>Média:</b> ${media.toFixed(2)}<br>
                <b>Maior número:</b> ${maior}<br>
                <b>Menor número:</b> ${menor}<br>
                <b>Contagem de números pares e impares :</b> ${contagemNumerosParesImpares}<br>
            `;
        });