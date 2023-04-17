const ordemCorreta = ['botao1', 'botao2', 'botao3','botao4', 'botao5', 'botao6'];
const paragrafos = [
  document.getElementById('texto1'),
  document.getElementById('texto2'),
  document.getElementById('texto3'),
  document.getElementById('texto4'),
  document.getElementById('texto5'),
  document.getElementById('texto6')
];
let botaoClicado = [];
const botao = document.getElementById('corrigir'); 



function verificarOrdem() {
  if (botaoClicado.length !== ordemCorreta.length) {
    return false;
  }

  
  // Verifica se cada elemento do array de botões clicados corresponde ao elemento do mesmo índice no array de ordem correta
  for (let i = 0; i < ordemCorreta.length; i++) {
    if (botaoClicado[i] !== ordemCorreta[i]) {
      return false;
    }
  }
  
  return true;

  
}

// Função quando um botão é clicado
function botaoClicadoHandler(botaoId) {
  botaoClicado.push(botaoId);
  document.getElementById(botaoId).disabled = true;
  const botao = document.getElementById(botaoId);
  botao.style.backgroundColor = ' #51d1f1';
  botao.style.fontSize='15px';
  botao.style.fontWeight='bold';
  botao.style.color='#10687e';
  botao.innerHTML = botaoClicado.length;

}


// Exemplo de como chamar a função botaoClicadoHandler quando um botão é clicado
document.getElementById('botao1').addEventListener('click', function() {
  botaoClicadoHandler('botao1');
 
});

document.getElementById('botao2').addEventListener('click', function() {
  botaoClicadoHandler('botao2');

});

document.getElementById('botao3').addEventListener('click', function() {
  botaoClicadoHandler('botao3');
 
});
document.getElementById('botao4').addEventListener('click', function() {
  botaoClicadoHandler('botao4');

});

document.getElementById('botao5').addEventListener('click', function() {
  botaoClicadoHandler('botao5');
});

document.getElementById('botao6').addEventListener('click', function() {
  botaoClicadoHandler('botao6');
});

// Função que é chamada quando o botão "corrigir" é clicado
botao.addEventListener('click', function() {
  if (verificarOrdem()) {
    alert('Parabéns! Você clicou nos botões na ordem correta!');

    for (let i = 0; i < paragrafos.length; i++) {
      const paragrafo = paragrafos[i];
      if (paragrafo.textContent === '1') {
        paragrafo.textContent = 'É a forma como os custos são acumulados e apropriados aos produtos e serviços (BRUNI e FAMA, 2002)';
      } 
      else if (paragrafo.textContent === '2') {
        paragrafo.textContent = 'Custeio por processos e Custeio por ordem';
      } 
      else if (paragrafo.textContent === '3') {
        paragrafo.textContent = 'Como e quais custos (e despesas) devem ser alocados aos produtos.';
      }
      else if (paragrafo.textContent === '4') {
        paragrafo.textContent = 'Custeio por Absorção, Custeio Pleno,  Custeio Direto, Custeio ABC';
      } 
      else if (paragrafo.textContent === '5') {
        paragrafo.textContent = 'Opções de mensuração dos elementos obtidos pelo sistema de acumulação.';
      }
      else if (paragrafo.textContent === '6') {
        paragrafo.textContent = 'Custo estimado, Custo real, Custo padrão';
      } 
    }

  } else {
    alert("Infelizmente você não clicou nos botões na ordem correta. Tente novamente!");

    
  }
  
  // Reinicia o array de botões clicados
  botaoClicado = [];

});

