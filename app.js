function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let valorMinimo = parseInt(document.getElementById("de").value);
    let valorMaximo = parseInt(document.getElementById("ate").value);
    let numerosSorteados = [];
    let numero;

    if (quantidade > (valorMaximo-valorMinimo) || valorMaximo <= valorMinimo) {
        alert ("Não é possível realizar o sorteio com esses parâmetros.");
        reiniciar();
    } else {
        for (i=1;i<=quantidade;i++) {
            numero =  gerarNumeroAleatorio(valorMinimo,valorMaximo);
            while (numerosSorteados.includes(numero)) {
                numero =  gerarNumeroAleatorio(valorMinimo,valorMaximo);
            }
            numerosSorteados.push(numero);
        }
        exibirTextoNaTela("resultado",`<label class="texto__paragrafo">Números sorteados: ${numerosSorteados.join(', ')}</label>`);
        document.getElementById('btn-reiniciar').className='container__botao';
        console.log(numerosSorteados);

    }
}

function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value="";
    document.getElementById("ate").value="";
    exibirTextoNaTela("resultado",`<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`);
    document.getElementById('btn-reiniciar').className='container__botao-desabilitado';
}

function gerarNumeroAleatorio(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function exibirTextoNaTela (id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML= texto;
}