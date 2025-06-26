
const numerosGerados = []

//Função que gera um número aleatório de 1 a 100
function gerarNumeroAleatorio() {
    const input = document.getElementById('numeroAleatorio');
    const quantidade = parseInt(input.value);

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, digite uma quantidade válida.");
        return;
    }

    // 1. Limpa o array para garantir que começamos do zero
    numerosGerados.length = 0;

    // 2. Gera EXATAMENTE a quantidade de números solicitada
    for (let i = 0; i < quantidade; i++) {
        const numero = Math.floor(Math.random() * 100) + 1;
        numerosGerados.push(numero);
    }

    // 3. Exibe os números gerados na tela
    const listaDiv = document.getElementById('listaNumerosGerados');
    listaDiv.textContent = 'Números gerados: ' + numerosGerados.join(', ');

    // Limpa a análise anterior
    const resultadoDiv = document.getElementById('resultadoAnalise');
    resultadoDiv.innerHTML = '<p>Clique em "Analisar" para ver os resultados.</p>';
}

//Função para fazer a exibição do numero aleatório
function exibirNumeroAleatorio(){
     
    const inputQuantidade = document.getElementById('numeroAleatorio');
    const quantidade = parseInt(inputQuantidade.value);

    //Limpa o array 
    numerosGerados.length = 0; 
    
    //Gera os numeros e adiciona ao array
    for (let i = 0; i < quantidade; i++) {
        const numeroAleatorioGerado = gerarNumeroAleatorio();
        numerosGerados.push(numeroAleatorioGerado);
    }

    //Exibe a nova lista de números gerados na tela
    const listaNumeros = document.getElementById('listaNumerosGerados');
    listaNumeros.textContent = 'Números gerados: ' + numerosGerados.join(', ');
}

// Função utilizada para realizar a media de todos os numeros
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
    //Utilizando o reduce para fazer a comparação de números na lista de array
    const maiorNumero = numerosGerados.reduce((maiorNumeroEncontrado, numeroAtual) => {
            return(numeroAtual > maiorNumeroEncontrado) ? numeroAtual : maiorNumeroEncontrado
    })

    return maiorNumero
}

//Função para encontrar o menor numero no array
function menoNumeroArray() {
    //Utilizando o reduce para fazer a comparação de números na lista de array
    const menorNumero = numerosGerados.reduce((menoNumeroEncontrado, numeroAtual) => {
            return(numeroAtual < menorNumeroEncontrado) ? numeroAtual : menorNumeroEncontrado
    })

    return menorNumero
}

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
    return [contageNumerosImpares, contagemNumerosPares]
}


const btnAnalisar = document.getElementById('analisar');

        btnAnalisar.addEventListener('click', () => {
            if (numerosGerados.length === 0) {
                alert("É preciso gerar os números antes de analisar!");
                return;
            }
            
            const resultadoDiv = document.getElementById('resultadoAnalise');

            const soma = numerosGerados.reduce((total, atual) => total + atual, 0);
            const media = soma / numerosGerados.length;
            const maior = Math.max(...numerosGerados);
            const menor = Math.min(...numerosGerados);
            const pares = numerosGerados.filter(n => n % 2 === 0).length;
            const impares = numerosGerados.length - pares;
            
            resultadoDiv.innerHTML = `
                <b>Total de números:</b> ${numerosGerados.length -1}<br>
                <b>Média:</b> ${media.toFixed(2)}<br>
                <b>Maior número:</b> ${maior}<br>
                <b>Menor número:</b> ${menor}<br>
                <b>Pares:</b> ${pares}<br>
                <b>Ímpares:</b> ${impares}
            `;
        });