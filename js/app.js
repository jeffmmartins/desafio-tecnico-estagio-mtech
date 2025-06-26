
 const numerosGerados = []

//Função que gera um número aleatório de 1 a 100
function gerarNumeroAleatorio() {
    const numero = Math.floor(Math.random() * 100) + 1;
    return numero;
}

//Função para fazer a exibição do numero aleatório
function exibirNumeroAleatorio(){
    const inputNumero = document.getElementById('numeroAleatorio')
    const numeroAleatorioGerado = gerarNumeroAleatorio()
    inputNumero.value = numeroAleatorioGerado
    //adicionar numero gerado no array vazio
    numerosGerados.push(numeroAleatorioGerado)
    const listaNumeros = document.getElementById('listaNumerosGerados')
    listaNumeros?.textContent = 'Números gerados: ' + (numerosGerados.join(', ') || 'Nenhum número gerado ainda.');
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
