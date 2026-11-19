/* ==========================================================================
   Zenite: o comportamento do site.

   Cinco coisas, cada uma numa funcao com nome, e nada mais:
   1. criar as estrelas do ceu
   2. abrir e fechar o menu no celular
   3. fazer as secoes aparecerem conforme a pagina rola
   4. conferir o e-mail do formulario
   5. ligar o efeito de profundidade (a biblioteca)

   A ultima linha do arquivo chama as cinco. Le-se de baixo para cima
   quando se quer saber "o que este site faz", e de cima para baixo
   quando se quer saber "como ele faz".
   ========================================================================== */

'use strict';

/* Avisa ao CSS que o JavaScript esta rodando. Procure `.com-js` no
   estilo.css: e' esta classe que liga as duas coisas.
   Sem ela, quem abrisse o site com o JavaScript desligado veria as secoes
   invisiveis (esperando uma animacao que nunca viria) e o menu estreito
   trancado atras de um botao que nao funciona. */
document.documentElement.classList.add('com-js');


/* ------------------------------------------------------- 1. as estrelas */
/* Cria `quantidade` pontinhos dentro do elemento de id `idDaCamada`.
   Cada ponto ganha posicao, tamanho e transparencia sorteados, para o
   ceu nao ficar com cara de grade. */
function criarEstrelas(idDaCamada, quantidade, tamanhoMaximo) {
  var camada = document.getElementById(idDaCamada);
  if (!camada) return;                 // a camada nao existe: nao faz nada

  for (var i = 0; i < quantidade; i++) {
    var ponto = document.createElement('div');
    ponto.className = 'estrela-ponto';

    var tamanho = 0.6 + Math.random() * tamanhoMaximo;
    ponto.style.width = tamanho + 'px';
    ponto.style.height = tamanho + 'px';
    ponto.style.left = (Math.random() * 100) + '%';
    ponto.style.top = (Math.random() * 100) + '%';
    ponto.style.opacity = 0.25 + Math.random() * 0.7;

    camada.appendChild(ponto);
  }
}


/* -------------------------------------------------- 2. o menu estreito */
/* Em tela estreita o menu comeca fechado. O botao abre e fecha.
   O `aria-expanded` existe para o leitor de tela saber o estado. */
function ligarMenuEstreito() {
  var botao = document.getElementById('menu-botao');
  var menu = document.getElementById('menu');
  if (!botao || !menu) return;

  botao.addEventListener('click', function () {
    var aberto = menu.classList.toggle('aberto');
    botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
  });

  // clicou num link do menu: fecha, senao ele fica tampando a secao
  menu.addEventListener('click', function (evento) {
    if (evento.target.tagName === 'A') {
      menu.classList.remove('aberto');
      botao.setAttribute('aria-expanded', 'false');
    }
  });
}


/* ------------------------------------------------- 3. aparecer ao rolar */
/* O navegador avisa quando um elemento entra na tela. Quando entra, a
   gente poe a classe `visivel` e o CSS faz a animacao.
   `unobserve` para de vigiar depois da primeira vez: o efeito acontece
   uma vez so', e nao toda vez que a pessoa rola para cima e para baixo. */
function revelarAoRolar() {
  var alvos = document.querySelectorAll('.surge');

  // navegador antigo pode nao ter o observador: entao mostra tudo e pronto
  if (!('IntersectionObserver' in window)) {
    alvos.forEach(function (alvo) { alvo.classList.add('visivel'); });
    return;
  }

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (!entrada.isIntersecting) return;
      entrada.target.classList.add('visivel');
      observador.unobserve(entrada.target);
    });
  }, { threshold: 0.18 });

  alvos.forEach(function (alvo) { observador.observe(alvo); });
}


/* ----------------------------------------------------- 4. o formulario */
/* Nao existe servidor aqui: o site e' so' HTML, CSS e JavaScript.
   Entao o formulario confere o e-mail e responde na propria tela.
   `evento.preventDefault()` impede o navegador de recarregar a pagina. */
function ligarFormulario() {
  var formulario = document.getElementById('formulario');
  var campo = document.getElementById('email');
  var recado = document.getElementById('recado');
  if (!formulario || !campo || !recado) return;

  // escreve o aviso na tela; fica declarada ANTES de quem a chama, para o
  // arquivo poder ser lido de cima para baixo
  function mostrarRecado(texto, tipo) {
    recado.textContent = texto;
    recado.className = 'recado ' + tipo;
  }

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    var valor = campo.value.trim();

    if (valor === '') {
      mostrarRecado('Escreva seu e-mail antes de enviar.', 'erro');
      return;
    }
    if (valor.indexOf('@') === -1 || valor.indexOf('.') === -1) {
      mostrarRecado('Esse e-mail parece incompleto. Confira o @ e o ponto.', 'erro');
      return;
    }

    mostrarRecado('Pronto. Você está na lista do convite.', 'certo');
    campo.value = '';
  });
}


/* ------------------------------------------- 5. o efeito de profundidade */
/* A biblioteca Rellax vem de um endereco na internet (veja o index.html).
   Se ela nao carregar, `Rellax` nao existe, e chamar direto quebraria o
   resto do arquivo. A checagem abaixo evita isso: sem a biblioteca, o
   site continua inteiro, so' sem o efeito. */
function ligarEfeitoDeProfundidade() {
  if (typeof Rellax === 'undefined') return;
  new Rellax('.rellax');
}


/* ------------------------------------------------------------ o comeco */
// muitas estrelas pequenas no fundo e poucas grandes na frente: e' assim
// que o olho le' profundidade, mesmo com o efeito de rolagem desligado
criarEstrelas('ceu-fundo', 140, 1.4);
criarEstrelas('ceu-meio', 70, 2.0);
criarEstrelas('ceu-frente', 30, 2.8);
ligarMenuEstreito();
revelarAoRolar();
ligarFormulario();
ligarEfeitoDeProfundidade();
