# O processo, prompt a prompt

> Este arquivo é o registro de como o site foi feito com IA. Ele existe para
> duas coisas: para alguém conseguir refazer o caminho, e para deixar visível
> **onde a IA errou e o que foi preciso pedir de novo**.
>
> Regra que valeu do começo ao fim: **um pedido por vez, conferindo depois de
> cada um.**

---

## Passo 0. Escrever os requisitos ANTES de pedir a primeira linha de código

Nenhum prompt de código aqui. O `REQUISITOS.md` veio primeiro, com os doze
requisitos funcionais e os dez não funcionais. **Escrever com a ajuda da IA é
recomendado**: você diz com as suas palavras o que quer, e ela devolve a lista
numerada e formatada, que você corrige e aprova. O que não se faz é pedir
código antes de a lista existir. **Foi o que mais economizou tempo depois**: a
partir daqui, todo pedido pôde apontar para um número.

---

## Passo 1. O pedido de abertura

> Você é uma pessoa que desenvolve sites e escreve HTML, CSS e JavaScript
> simples e legíveis, para quem está aprendendo.
>
> Vou te dar os requisitos de um site de uma página só. Leia inteiro antes de
> escrever qualquer coisa.
>
> [colei o REQUISITOS.md inteiro aqui]
>
> Antes de escrever código, me devolva **só** um plano: a ordem das faixas da
> página, o que vai em cada uma, e quais arquivos você vai criar. Sem código
> ainda.

**O que voltou:** um plano de sete faixas e três arquivos, batendo com os
requisitos. Duas correções minhas antes de seguir: a faixa de preços que ela
inventou saiu (o produto é gratuito, RF nenhum pede preço), e o rodapé teve de
dizer que o site é fictício.

**Por que pedir o plano antes do código:** corrigir um plano custa uma frase;
corrigir 400 linhas de código custa a tarde.

---

## Passo 2. O esqueleto (HTML)

> Agora escreva **só o `index.html`**, com a estrutura do plano aprovado. Sem
> CSS e sem JavaScript ainda: só o esqueleto, com as classes que os outros dois
> arquivos vão usar. Use HTML semântico (`header`, `section`, `article`,
> `footer`). O celular da abertura é um SVG escrito na própria página, porque
> não pode haver imagem baixada da internet (RNF-04).

**Conferência:** abri o arquivo no navegador. Apareceu texto cru, sem visual, na
ordem certa. É exatamente o esperado nesta etapa.

---

## Passo 3. O visual (CSS)

> Agora o `estilo.css`, para o HTML que você acabou de escrever.
>
> Paleta: fundo `#070b14`, faixa alternada `#0d1424`, cartão `#16203a`, texto
> `#e8ecf6`, destaque âmbar `#f5b962`. Nada de degradê roxo.
>
> Comece definindo as cores e as medidas como variáveis em `:root`, com nome, e
> use as variáveis no resto do arquivo.
>
> No fim do arquivo, **uma única** regra de tela estreita (`max-width: 820px`)
> que cuide de tudo que quebra no celular.

**O erro que apareceu aqui, e é o erro típico:** a primeira versão pôs largura
fixa em pixels na faixa de abertura, e no celular apareceu barra de rolagem
horizontal. Conserto no passo 6.

---

## Passo 4. O comportamento (JavaScript)

> Agora o `script.js`. Cinco funções, uma por tarefa, cada uma com nome em
> português e um comentário curto explicando o que ela faz:
>
> 1. criar as estrelas de cada camada do céu (posição e tamanho sorteados);
> 2. abrir e fechar o menu em tela estreita;
> 3. fazer as seções aparecerem quando entram na tela;
> 4. conferir o e-mail do formulário e responder na própria página, sem
>    recarregar;
> 5. ligar a biblioteca de parallax.
>
> No fim do arquivo, chame as cinco. Não use framework e não use recurso que
> exija passo de compilação.

---

## Passo 5. O movimento (a biblioteca)

> Adicione o efeito de profundidade ao rolar, usando a biblioteca **Rellax**,
> carregada por CDN com a **versão explícita no endereço**.
>
> Três camadas de estrelas, com velocidades diferentes.
>
> Requisito que não pode ser furado (RNF-05): **se a biblioteca não carregar, o
> site tem que continuar funcionando**, só sem o efeito. Trate isso no código.

**O que voltou de primeira, e estava errado:** a chamada era `new Rellax('.rellax')`
direto. Sem internet, `Rellax` não existe e o arquivo inteiro parava ali,
levando junto o menu e o formulário. **Um erro que só aparece se você testar
offline**, e é o tipo de coisa que ninguém testa.

Pedido de conserto:

> Faltou o RNF-05. Envolva a chamada do Rellax numa checagem de que a
> biblioteca existe. **Mude só essa função, não mexa no resto do arquivo, e me
> devolva só o trecho alterado.**

---

## Passo 6. Os consertos, um por vez

| # | o que estava errado | o pedido |
|---|---|---|
| 1 | barra de rolagem horizontal no celular | *"corrija só a faixa de abertura em tela estreita. Ela tem largura fixa e está estourando os 360 px. Não mude cor nem espaçamento das outras faixas."* |
| 2 | com o JavaScript desligado, as seções ficavam invisíveis | *"o estado inicial da animação está no CSS, então quem abre sem JavaScript vê a página em branco. Faça o estado inicial valer só quando o JavaScript estiver rodando."* |
| 3 | o menu do celular ficava aberto tampando a seção depois do clique | *"feche o menu quando clicarem num link dele. Só isso."* |
| 4 | **o texto saía para fora do cartão** no desenho do celular | *"os dois textos longos estão passando da borda direita do cartão. Encurte as frases e reduza o recuo, sem mexer no tamanho do cartão."* |

**A regra dos consertos:** um pedido por vez, dizendo **o que não pode mudar**, e
pedindo de volta **só o trecho alterado**. Pedir "arruma tudo" traz um arquivo novo
inteiro, e aí você não sabe mais o que mudou.

**E o conserto 4 merece ser contado, porque é a lição da aula inteira:** ele não foi
achado por nenhuma revisão automática. Passou pela conferência de requisito, passou pela
revisão em sessão separada, passou pelo console limpo e pelo teste de tela estreita.
**Quem achou foi uma pessoa olhando a tela.** Depois de achado, dava para medir: o texto
terminava no ponto 191 de um cartão que acaba no 230, e antes do conserto ia até 272.
**A máquina só mede o que você mandou medir; o olho vê o que ninguém pensou em
perguntar.**

---

## Passo 7. A revisão, e ela NÃO foi feita por quem escreveu

**Esta é a etapa que a maioria pula, e é a que mais pega erro.**

O código foi mandado para uma **sessão separada e independente**, que não
participou da construção, com este pedido:

> Você vai revisar um site que **outra pessoa** escreveu. Eu te dou o
> `REQUISITOS.md` e os três arquivos.
>
> Confira requisito por requisito e me diga, para cada um: **cumprido, não
> cumprido, ou cumprido pela metade**, apontando a linha.
>
> Depois liste os problemas que você achou e que **não estão nos requisitos**.
>
> Não reescreva o site. Não elogie. Se estiver tudo certo em algum ponto, diga
> "certo" e siga.

**Por que em outra sessão, e não na mesma:** a conversa que escreveu o código
carrega as justificativas de cada escolha. Pedir a ela para revisar o próprio
trabalho é pedir que ela releia a defesa que ela mesma fez, e o resultado é
quase sempre *"está tudo certo"*. Sessão nova chega sem esse peso: ela vê os
arquivos, não o raciocínio que os produziu.

**Regra que fica:** **quem faz não confere.** Se for a mesma ferramenta, que
seja outra conversa; melhor ainda se for outra ferramenta.

---

## Passo 8. A conferência final, feita por mim e não por ela

Cinco coisas, olhando a tela:

1. **Abre com dois cliques**, sem servidor: sim.
2. **Console sem erro vermelho:** sim (inspetor aberto, aba Console).
3. **Tela estreita a 360 px**, sem rolagem horizontal: sim.
4. **Desligar a internet e recarregar:** o site abre igual, sem o efeito de
   profundidade, e sem nenhum erro.
5. **Olhar a tela devagar**, no celular e no computador, procurando coisa fora do
   lugar. **Foi aqui, e só aqui, que apareceu o texto saindo do cartão.** Os quatro
   primeiros testes passaram por cima dele sem ver.
