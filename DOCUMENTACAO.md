# Zênite: documentação do projeto

## 1. O que é o site

Site de uma página só que divulga o **Zênite**, um aplicativo fictício de
observação do céu a olho nu. O site explica o que o aplicativo faz, mostra três
recursos, três passos de uso e dois depoimentos, e termina num formulário que
recolhe o e-mail de quem quer o convite.

**Aviso:** produto fictício, criado como material didático da aula 2 de DEE339.
Nada aqui divulga um produto real.

## 2. Como instalar e rodar

Não há instalação. São três arquivos numa pasta.

1. Baixe ou clone a pasta `zenite/`.
2. Dê **dois cliques no `index.html`**. O navegador abre o site.

**Não precisa** de servidor, Node, Python, banco de dados nem conta em lugar
nenhum. **Precisa de internet apenas para o efeito de profundidade**, que vem de
um endereço externo; sem internet o site abre igual, só sem o efeito.

## 3. Tecnologias usadas, com as versões

| tecnologia | versão | do que ela é responsável aqui |
|---|---|---|
| **HTML5** | padrão vivo (WHATWG) | a estrutura da página: topo, faixas, textos, formulário, e o desenho do celular em SVG |
| **CSS3** | padrão vivo (W3C) | todo o visual: cores, espaçamento, os cartões, o degradê do céu, e a regra que reorganiza a página no celular |
| **JavaScript (ECMAScript 5)** | padrão vivo (ECMA-262) | as estrelas criadas na hora, o menu do celular, o aparecer ao rolar e a conferência do formulário |
| **Rellax** | **1.12.1** | o efeito de profundidade ao rolar (parallax): move as três camadas de estrelas em velocidades diferentes |

**Onde eu vi a versão do Rellax:** dentro do próprio endereço que está no
`index.html`, `https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js`.
O número entre barras é a versão que este site carrega. A página do repositório
do projeto mostra uma tag mais antiga; **vale a que o site carrega**.

## 4. Revisão do básico

- **HTML** é o esqueleto: diz o que cada pedaço da página **é** (um título, um
  parágrafo, um botão, uma lista). Sozinho, ele aparece como texto cru.
- **CSS** é a roupa: diz como cada pedaço **se parece** (cor, tamanho,
  espaçamento, posição) e como ele se reorganiza em tela estreita.
- **JavaScript** é o comportamento: diz o que acontece **quando alguém faz
  alguma coisa** (clicar no botão do menu, rolar a página, enviar o formulário).
- **Biblioteca** é código pronto de terceiros que você carrega para não escrever
  do zero. Aqui é o Rellax. Toda biblioteca é mais uma coisa para documentar e
  mais uma coisa que pode quebrar.

## 5. Ambiente de desenvolvimento

| item | o que foi usado |
|---|---|
| sistema | Windows 11 |
| editor | qualquer editor de texto serve; o site foi escrito em editor de código comum |
| navegador de teste | navegador baseado em Chromium, mais teste de largura estreita pelo próprio inspetor |
| controle de versão | Git |
| o que precisa estar instalado para rodar | **um navegador. Só.** |

## 6. Qual IA foi usada, com a versão

| etapa | ferramenta | versão |
|---|---|---|
| requisitos, código e documentação | **Claude Opus 5** (`claude-opus-5`), pelo Claude Code | agosto de 2026 |
| revisão do código | **sessão separada e independente**, com o mesmo texto de requisitos e sem acesso ao raciocínio da primeira | agosto de 2026 |

**Por que a revisão foi feita em sessão separada, e isto é método e não
formalidade:** quem escreveu o código é péssimo revisor do próprio código.
A conversa que gerou os arquivos carrega as decisões, as justificativas e os
atalhos que foram tomados, e uma IA relendo o que ela mesma acabou de escrever
tende a **confirmar** em vez de conferir. Sessão nova (ou outra ferramenta) chega
sem esse peso e olha o resultado pelo que ele é. Regra prática: **quem faz não
confere; e se for a mesma ferramenta, que seja outra conversa.**
