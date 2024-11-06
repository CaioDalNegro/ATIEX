// Referências ao modal e ao botão OK
const modalCorreta = document.getElementById('modalCorreta');
const modalErro = document.getElementById('modalErro');
const btnOk = document.getElementById('btnOk');
const btnClose = document.getElementById('btnClose');
const btnProxima = document.getElementById('btnProxima');
const btnRefazer = document.getElementById('btnRefazer');
const modalPontuacao = document.getElementById('modalPontuacao'); // Novo modal para pontuação

let pontuacao = 0; // Inicializa a pontuação do usuário
let perguntaAtual = 0; // Índice da pergunta atual

// Array de perguntas e respostas
let perguntas = [
    {
        "id": 1,
        "categoria": "Automação Industrial",
        "pergunta": "Qual dispositivo é frequentemente usado para controlar processos automatizados?",
        "opcoes": [
            { "letra": "A", "texto": "Monitor", "correto": false },
            { "letra": "B", "texto": "CLP", "correto": true },
            { "letra": "C", "texto": "Impressora", "correto": false },
            { "letra": "D", "texto": "Scanner", "correto": false }
        ],
        "explicacao": "O CLP (Controlador Lógico Programável) é um dispositivo projetado especificamente para controlar processos industriais e automatizados."
    },
    {
        "id": 2,
        "categoria": "Automação Industrial",
        "pergunta": "O que faz um inversor de frequência em sistemas industriais?",
        "opcoes": [
            { "letra": "A", "texto": "Controla a temperatura de um processo", "correto": false },
            { "letra": "B", "texto": "Regula a velocidade de motores elétricos", "correto": true },
            { "letra": "C", "texto": "Converte sinais analógicos em digitais", "correto": false },
            { "letra": "D", "texto": "Detecta a presença de objetos", "correto": false }
        ],
        "explicacao": "Um inversor de frequência é usado para controlar a velocidade de motores elétricos, permitindo eficiência em processos industriais."
    },
    {
        "id": 3,
        "categoria": "Automação Industrial",
        "pergunta": "Qual é a função de um atuador em um sistema de automação?",
        "opcoes": [
            { "letra": "A", "texto": "Medir variáveis físicas", "correto": false },
            { "letra": "B", "texto": "Converter energia elétrica em movimento mecânico", "correto": true },
            { "letra": "C", "texto": "Monitorar sinais de entrada", "correto": false },
            { "letra": "D", "texto": "Transmitir dados para um controlador", "correto": false }
        ],
        "explicacao": "Os atuadores são responsáveis por converter a energia elétrica em movimento mecânico, sendo essenciais em sistemas de automação."
    },
    {
        "id": 4,
        "categoria": "Automação Industrial",
        "pergunta": "Em um sistema de controle industrial, qual é a principal função de um transmissor?",
        "opcoes": [
            { "letra": "A", "texto": "Ajustar a velocidade de rotação dos motores", "correto": false },
            { "letra": "B", "texto": "Converter sinais de um sensor em valores mensuráveis", "correto": true },
            { "letra": "C", "texto": "Controlar o movimento de braços robóticos", "correto": false },
            { "letra": "D", "texto": "Detectar objetos à distância", "correto": false }
        ],
        "explicacao": "Transmissores têm a função de converter sinais analógicos de sensores em valores mensuráveis, sendo fundamentais em sistemas de controle."
    },
    {
        "id": 5,
        "categoria": "Engenharia de Software",
        "pergunta": "Qual é a primeira fase do ciclo de vida de desenvolvimento de software?",
        "opcoes": [
            { "letra": "A", "texto": "Manutenção", "correto": false },
            { "letra": "B", "texto": "Testes", "correto": false },
            { "letra": "C", "texto": "Análise de requisitos", "correto": true },
            { "letra": "D", "texto": "Implementação", "correto": false }
        ],
        "explicacao": "A Análise de requisitos é a primeira fase, onde as necessidades do cliente são levantadas e documentadas."
    },
    {
        "id": 6,
        "categoria": "Engenharia de Software",
        "pergunta": "Qual metodologia de desenvolvimento de software é conhecida por sua abordagem iterativa e incremental?",
        "opcoes": [
            { "letra": "A", "texto": "Cascata", "correto": false },
            { "letra": "B", "texto": "Scrum", "correto": true },
            { "letra": "C", "texto": "V-Model", "correto": false },
            { "letra": "D", "texto": "RAD", "correto": false }
        ],
        "explicacao": "Scrum é uma metodologia ágil que promove o desenvolvimento iterativo e incremental, permitindo maior flexibilidade."
    },
    {
        "id": 7,
        "categoria": "Engenharia de Software",
        "pergunta": "No Scrum, quem é responsável por garantir que o time siga os princípios ágeis?",
        "opcoes": [
            { "letra": "A", "texto": "Gerente de projeto", "correto": false },
            { "letra": "B", "texto": "Desenvolvedor", "correto": false },
            { "letra": "C", "texto": "Scrum Master", "correto": true },
            { "letra": "D", "texto": "Stakeholder", "correto": false }
        ],
        "explicacao": "O Scrum Master é responsável por garantir que a equipe siga os princípios ágeis e facilite o processo Scrum."
    },
    {
        "id": 8,
        "categoria": "Engenharia de Software",
        "pergunta": "Qual é a principal vantagem de usar um modelo ágil de desenvolvimento de software?",
        "opcoes": [
            { "letra": "A", "texto": "Detalhamento extensivo de requisitos", "correto": false },
            { "letra": "B", "texto": "Flexibilidade e adaptabilidade às mudanças", "correto": true },
            { "letra": "C", "texto": "Controle rígido de cada fase do desenvolvimento", "correto": false },
            { "letra": "D", "texto": "Forte dependência de documentação formal", "correto": false }
        ],
        "explicacao": "A flexibilidade e adaptabilidade às mudanças é uma das principais vantagens dos modelos ágeis de desenvolvimento."
    },
    {
        "id": 9,
        "categoria": "Inteligência Artificial",
        "pergunta": "Qual dos seguintes é um exemplo de aprendizado supervisionado?",
        "opcoes": [
            { "letra": "A", "texto": "Aprender a jogar xadrez sozinho", "correto": false },
            { "letra": "B", "texto": "Reconhecimento facial com base em imagens rotuladas", "correto": true },
            { "letra": "C", "texto": "Identificação de padrões sem dados rotulados", "correto": false },
            { "letra": "D", "texto": "Executar tarefas sem feedback humano", "correto": false }
        ],
        "explicacao": "O reconhecimento facial com base em imagens rotuladas é um exemplo clássico de aprendizado supervisionado, onde um modelo é treinado com dados conhecidos."
    },
    {
        "id": 10,
        "categoria": "Inteligência Artificial",
        "pergunta": "O que é um \"algoritmo de aprendizado\"?",
        "opcoes": [
            { "letra": "A", "texto": "Um conjunto de dados", "correto": false },
            { "letra": "B", "texto": "Um procedimento para resolver um problema", "correto": true },
            { "letra": "C", "texto": "Uma aplicação de software", "correto": false },
            { "letra": "D", "texto": "Uma máquina que processa dados", "correto": false }
        ],
        "explicacao": "Um algoritmo de aprendizado é um conjunto de instruções que permite que um modelo aprenda a partir de dados para resolver problemas específicos."
    }
];

// Função para concluir a categoria
function concluirCategoria() {
    const categoriaAtual = perguntas[perguntaAtual]?.categoria;
    const proximaCategoria = perguntas[perguntaAtual + 1]?.categoria;

    if (categoriaAtual !== proximaCategoria) {
        // Aqui você pode exibir alguma mensagem ou fazer algo quando a categoria for concluída
        alert(`Categoria "${categoriaAtual}" concluída!`);
    }
}

// Atualize a função carregarPergunta para chamar concluirCategoria
function carregarPergunta() {
    console.log(`Pontuação atual: ${pontuacao}`); // Exibe a pontuação no console
    const perguntaObj = perguntas[perguntaAtual]; // Obtém o objeto da pergunta atual
    document.getElementById("categoria").innerText = perguntaObj.categoria;
    document.getElementById("pergunta").innerText = perguntaObj.pergunta;

    const opcoesContainer = document.getElementById("opcoes");
    opcoesContainer.innerHTML = ''; // Limpa as opções anteriores

    // Cria botões para cada opção
    perguntaObj.opcoes.forEach((opcao) => {
        const button = document.createElement("button");
        button.innerText = `${opcao.letra}. ${opcao.texto}`;
        button.onclick = () => verificarResposta(opcao);
        opcoesContainer.appendChild(button);
    });

    // Chama a função concluirCategoria
    concluirCategoria();
}

// Função para abrir o modal de resposta correta
function mostrarModalCorreta() {
    modalCorreta.style.display = 'flex'; // Exibe o modal de resposta correta
}

// Função para abrir o modal de erro com a explicação
function mostrarModalErro(explicacao) {
    const explicacaoElemento = modalErro.querySelector('p'); // Seleciona o parágrafo para a explicação
    explicacaoElemento.textContent = explicacao; // Define o texto da explicação
    modalErro.style.display = 'flex'; // Mostra o modal
}

// Função para verificar a resposta selecionada
function verificarResposta(opcaoSelecionada) {
    if (opcaoSelecionada.correto) {
        mostrarModalCorreta(); // Mostra o modal se a resposta estiver correta
        pontuacao++; // Incrementa a pontuação
    } else {
        mostrarModalErro(perguntas[perguntaAtual].explicacao); // Mostra o modal de erro com explicação
    }
}

// Função para mostrar a pontuação final
function mostrarPontuacaoFinal() {
    const pontuacaoElemento = modalPontuacao.querySelector('.pontuacao'); // Seleciona o elemento para mostrar a pontuação
    pontuacaoElemento.innerText = `Sua pontuação final é: ${pontuacao} de ${perguntas.length}`; // Atualiza a pontuação
    modalPontuacao.style.display = 'flex'; // Exibe o modal com a pontuação
}


function proximaPergunta() {
    perguntaAtual++; // Avança para a próxima pergunta

    // Verificar se a categoria foi concluída
    const categoriaAtual = perguntas[perguntaAtual]?.categoria;

    if (categoriaAtual !== perguntas[perguntaAtual - 1]?.categoria) {
        // Se a categoria atual for diferente da anterior, significa que a categoria foi concluída
        mostrarExplicacaoCategoria(categoriaAtual); // Exibe a explicação do tópico
    }

    if (perguntaAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta se houver
    } else {
        mostrarPontuacaoFinal(); // Mostra a pontuação final ao completar o quiz
        perguntaAtual = 0; // Reinicia para a primeira pergunta, caso queira repetir
    }
}

// Eventos para fechar os modais e decidir a ação
btnOk.onclick = function () {
    modalCorreta.style.display = 'none'; // Fecha o modal de resposta correta
    proximaPergunta(); // Avança para a próxima pergunta
};

btnClose.onclick = function () {
    modalErro.style.display = 'none'; // Fecha o modal de erro
};

btnProxima.onclick = function () {
    modalErro.style.display = 'none'; // Fecha o modal de erro
    proximaPergunta(); // Avança para a próxima pergunta
};

btnRefazer.onclick = function () {
    modalErro.style.display = 'none'; // Fecha o modal de erro
    // Aqui você pode implementar a lógica para refazer a pergunta atual, se desejar
};

// Verificar se o clique foi fora do modal para fechá-lo
window.onclick = function (event) {
    if (event.target == modalCorreta) {
        modalCorreta.style.display = 'none'; // Fecha o modal se clicar fora
    }
}

// Inicializar o jogo com a primeira pergunta
carregarPergunta();

// Variáveis para controlar o uso das dicas
let dica1Usada = false;

// Função para usar a dica 1
function usarDica1() {
    if (!dica1Usada) { // Verifica se a dica 1 já foi usada
        const perguntaObj = perguntas[perguntaAtual]; // Obtém o objeto da pergunta atual
        const respostaDica = perguntaObj.opcoes.find(opcao => opcao.correto); // Encontra a resposta correta
        document.getElementById("respostaDica").innerText = respostaDica.texto; // Atualiza o texto da resposta
        document.getElementById("explicacaoDica").innerText = perguntaObj.explicacao; // Atualiza a explicação
        document.getElementById("dicaModal").style.display = 'flex'; // Exibe o modal
        dica1Usada = true; // Marca a dica como usada
    } else {
        alert("Você já usou esta dica!"); // Mensagem informando que a dica já foi utilizada
    }
}

// Função para fechar o modal da dica
function fecharModal() {
    document.getElementById("dicaModal").style.display = 'none'; // Esconde o modal
}

// Variável para controlar o uso da dica 2
let dica2Usada = false;

// Função para usar a dica 2
function usarDica2() {
    if (!dica2Usada) { // Verifica se a dica 2 já foi usada
        const perguntaObj = perguntas[perguntaAtual]; // Obtém o objeto da pergunta atual

        // Filtra as alternativas incorretas
        const alternativasIncorretas = perguntaObj.opcoes.filter(opcao => !opcao.correto);

        // Seleciona duas alternativas incorretas aleatoriamente
        const alternativasParaDesabilitar = [];
        while (alternativasParaDesabilitar.length < 2) {
            const indexAleatorio = Math.floor(Math.random() * alternativasIncorretas.length);
            const opcaoSelecionada = alternativasIncorretas[indexAleatorio];

            if (!alternativasParaDesabilitar.includes(opcaoSelecionada)) {
                alternativasParaDesabilitar.push(opcaoSelecionada);
            }
        }

        // Desabilita as alternativas selecionadas e altera sua cor
        const opcoesContainer = document.getElementById("opcoes");
        Array.from(opcoesContainer.children).forEach(button => {
            const opcaoTexto = button.innerText.slice(3); // Texto da opção sem a letra e ponto

            // Desabilita os botões das alternativas selecionadas
            alternativasParaDesabilitar.forEach(alternativa => {
                if (button.innerText.includes(alternativa.texto)) {
                    button.disabled = true; // Desabilita o botão
                    button.style.backgroundColor = 'gray'; // Muda a cor para cinza
                }
            });
        });

        dica2Usada = true; // Marca a dica como usada
    }
}

// Exemplo de como associar o botão de dica 2 à função
document.getElementById("btnDica2").onclick = usarDica2;


function btnDica2() {
    // Obtenha todas as alternativas
    const alternativas = document.querySelectorAll('.alternativa');
    
    // Filtre as alternativas incorretas
    const incorretas = Array.from(alternativas).filter(alternativa => !alternativa.classList.contains('correta'));
    
    // Se houver menos de duas incorretas, retorne (proteção contra erro)
    if (incorretas.length < 2) return;
    
    // Escolha duas alternativas incorretas aleatoriamente
    const alternativasParaEliminar = [];
    while (alternativasParaEliminar.length < 2) {
        const indexAleatorio = Math.floor(Math.random() * incorretas.length);
        const alternativaSelecionada = incorretas[indexAleatorio];
        
        // Evite duplicados
        if (!alternativasParaEliminar.includes(alternativaSelecionada)) {
            alternativasParaEliminar.push(alternativaSelecionada);
        }
    }

    // Desabilite e estilize as alternativas escolhidas
    alternativasParaEliminar.forEach(alternativa => {
        alternativa.style.color = 'gray';
        alternativa.style.pointerEvents = 'none';
    });

    // Opcional: Desabilitar o botão dica para não ser usado novamente
    document.getElementById('btnDica2').disabled = true;
}

// Função para usar a dica 3
let usadaDica3 = false;

document.getElementById('btnDica3').onclick = function() {
  if (!usadaDica3) {
    document.getElementById('modalDica3').style.display = "flex";
    usadaDica3 = true; // Marcar a dica como usada
  }
}

// Fechar o modal quando o usuário clicar no "X"
document.getElementById('closeModalDica3').onclick = function() {
  document.getElementById('modalDica3').style.display = "none";
}

let dica3Usada = false;

document.getElementById('btnDica3').addEventListener('click', function () {
  if (!dica3Usada) {
    $('#dica3Modal').modal('show'); // Mostra o modal
    dica3Usada = true; // Marca a dica como usada
  } else {
    alert('Você já utilizou essa dica.');
  }
});

document.getElementById('btnReiniciarQuiz').onclick = function() {
    pontuacao = 0; // Reinicia a pontuação
    perguntaAtual = 0; // Reinicia para a primeira pergunta
    modalPontuacao.style.display = 'none'; // Fecha o modal de pontuação
    carregarPergunta(); // Carrega a primeira pergunta
};

const modalCategoria = document.getElementById('modalCategoria');
const btnOkCategoria = document.getElementById('btnOkCategoria');

// Função para exibir a explicação do tópico no modal
function mostrarExplicacaoCategoria(categoria) {
    let explicacao = '';

    if (categoria === 'Automação Industrial') {
        explicacao = 'Automação Industrial envolve o uso de tecnologias para automatizar processos industriais, melhorando a eficiência e segurança. Exemplos incluem CLPs, inversores de frequência e atuadores.';
    } else if (categoria === 'Engenharia de Software') {
        explicacao = 'Engenharia de Software é a aplicação de princípios da engenharia para o desenvolvimento de software. Envolve práticas como análise de requisitos, design, desenvolvimento e manutenção de sistemas.';
    } else if (categoria === 'Inteligência Artificial') {
        explicacao = 'Inteligência Artificial envolve a criação de sistemas capazes de realizar tarefas que normalmente requerem inteligência humana, como reconhecimento de padrões e aprendizado de máquina.';
    }

    // Exibe a explicação no modal
    document.getElementById('explicacaoCategoria').innerText = explicacao;
    modalCategoria.style.display = 'flex'; // Exibe o modal explicativo
}

// Evento para fechar o modal explicativo
btnOkCategoria.onclick = function () {
    modalCategoria.style.display = 'none'; // Fecha o modal
    proximaPergunta(); // Avança para a próxima pergunta ou reinicia
};



