# Requisitos do site do Zênite

> Escrito **antes** de pedir a primeira linha de código. É este arquivo que
> foi colado na IA, e é contra ele que o site foi conferido no fim.

## O que é

Um site de uma página só, para divulgar o **Zênite**, um aplicativo (fictício)
que mostra o que dá para ver no céu a olho nu, na cidade de quem usa, e avisa
na hora certa.

**Quem vai olhar:** pessoa curiosa, sem equipamento e sem conhecimento de
astronomia, que chegou pelo celular. Ela decide em dez segundos se fica ou sai.

**O que o site tem que conseguir:** que essa pessoa entenda o que é o
aplicativo e deixe o e-mail.

---

## Requisitos funcionais (o que o site FAZ)

| # | requisito | como se confere |
|---|---|---|
| RF-01 | Um menu fixo no topo, com quatro destinos, que acompanha a rolagem | rolar a página e ver o menu parado no topo |
| RF-02 | Cada item do menu leva à sua seção, deslizando em vez de saltar | clicar em "Recursos" e ver a página deslizar |
| RF-03 | Em tela estreita, o menu fica escondido atrás de um botão que abre e fecha | estreitar a janela até 800 px e clicar no botão |
| RF-04 | Uma faixa de abertura com uma frase, um texto curto, dois botões e a arte do aplicativo | abrir a página |
| RF-05 | O céu da abertura tem três camadas de estrelas que se movem em velocidades diferentes ao rolar | rolar devagar e olhar as estrelas |
| RF-06 | Uma faixa com três números do produto | abrir a página |
| RF-07 | Três cartões de recurso, um por funcionalidade, com ícone próprio | abrir a página |
| RF-08 | Três passos numerados explicando o uso | abrir a página |
| RF-09 | Dois depoimentos | abrir a página |
| RF-10 | As seções aparecem com uma animação suave quando entram na tela | rolar a página |
| RF-11 | Um formulário de e-mail que confere o que foi digitado e responde na própria tela, sem recarregar | enviar vazio, enviar "abc", enviar um e-mail válido |
| RF-12 | Um rodapé dizendo que o site é fictício e didático | ir até o fim |

## Requisitos não funcionais (COMO ele faz)

| # | requisito | como se confere |
|---|---|---|
| RNF-01 | Abre com dois cliques no `index.html`, **sem servidor e sem instalar nada** | clicar duas vezes no arquivo |
| RNF-02 | **Nenhum erro vermelho no console** do navegador | abrir o inspetor, aba de console |
| RNF-03 | Funciona em tela de celular (a partir de 360 px de largura), sem barra de rolagem horizontal | estreitar a janela até 360 px |
| RNF-04 | **Nenhuma imagem baixada da internet**: toda a arte é feita em CSS e SVG dentro da página | desligar a internet e recarregar |
| RNF-05 | Se a biblioteca externa não carregar, o site continua funcionando, só sem o efeito | desligar a internet e recarregar |
| RNF-06 | Sem JavaScript ligado, o conteúdo continua visível (nada fica invisível esperando animação) | desligar o JavaScript no navegador |
| RNF-07 | Três arquivos, um por papel: estrutura, visual e comportamento | abrir a pasta |
| RNF-08 | Texto legível sem zoom: contraste alto sobre fundo escuro | olhar |
| RNF-09 | Comentários e nomes de função em português, curtos e explicáveis | abrir o `script.js` |
| RNF-10 | Uma dependência externa, no máximo | contar os `<script>` de fora |

## O que este site NÃO faz, e é decisão e não esquecimento

- **Não envia e-mail de verdade.** Não há servidor; o formulário confere e
  responde na tela. Enviar de verdade exigiria backend, e isso não é o assunto
  desta aula.
- **Não tem segunda página.** É uma página só, de propósito.
- **Não usa framework.** HTML, CSS e JavaScript puros, mais uma biblioteca de
  efeito.
- **Não usa 3D.** Foi avaliado e recusado: pesa, e o efeito não sobrevive bem
  no celular.
