let perguntas = [];
let perguntaAtual = 0;
let pontuacao = 0;

async function carregarPerguntas() {
    try {
        const response = await fetch('/api/perguntas');
        perguntas = await response.json();
        exibirPergunta();
    } catch (error) {
        console.error("Erro ao carregar perguntas:", error);
    }
}

function exibirPergunta() {
    if (perguntaAtual < perguntas.length) {
        const perguntaObj = perguntas[perguntaAtual];
        
        document.getElementById('categoria').textContent = `${perguntaAtual + 1} - ${perguntaObj.categoria}`;
        document.getElementById('pergunta').textContent = perguntaObj.pergunta;
        
        const opcoesContainer = document.getElementById('opcoes');
        opcoesContainer.innerHTML = '';

        perguntaObj.opcoes.forEach(opcao => {
            const divOpcao = document.createElement('div');
            divOpcao.classList.add('opcao');
            
            const caixa = document.createElement('div');
            caixa.classList.add('caixa');
            caixa.textContent = opcao.letra;

            const botao = document.createElement('button');
            botao.classList.add('botao');
            botao.textContent = opcao.texto;
            botao.onclick = () => verificarResposta(opcao.correto);

            divOpcao.appendChild(caixa);
            divOpcao.appendChild(botao);
            opcoesContainer.appendChild(divOpcao);
        });
    } else {
        document.querySelector('.container').innerHTML = `<h2>Fim do jogo! Sua pontuação foi: ${pontuacao} de ${perguntas.length}</h2>`;
    }
}

function verificarResposta(correto) {
    if (correto) {
        pontuacao++;
        alert("Resposta correta!");//tirar alert
    } else {
        alert("Resposta incorreta.");//tirartirar alert
    }
    perguntaAtual++;
    exibirPergunta();
}

carregarPerguntas();
