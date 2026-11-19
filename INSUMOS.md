# Insumos: o que foi dado à IA antes de pedir o código

> Insumo é tudo que entra na conversa **além do pedido**: referência, imagem,
> restrição, código colado. Este arquivo existe para que alguém consiga refazer
> o mesmo caminho, e para deixar claro o que é ideia emprestada e o que é nossa.

## 1. Referências de estrutura

Nenhum arquivo foi copiado. O que foi usado é **a ordem das faixas**, que é a
mesma em quase toda página de divulgação de aplicativo:

| referência | o que se olhou nela | o que veio para cá |
|---|---|---|
| `discord.com` | uma faixa por ideia, cada uma com uma frase curta e uma arte larga | a decisão de ter três recursos e não sete |
| `notion.com` | a faixa de prova logo abaixo da abertura | a faixa de três números |
| `linear.app` | abertura sóbria, com uma frase e dois botões | a estrutura da abertura |
| `apple.com/br/airpods-pro/` | o efeito de profundidade conforme se rola | a ideia das três camadas de céu |

**Licença:** nenhuma dessas páginas teve código copiado. Estrutura de página não
é obra protegida; arquivo é. A regra que seguimos: **inspirar-se na ordem das
seções, sim; baixar o CSS de alguém, não.**

## 2. Descrição do produto (escrita por nós, não pela IA)

> Aplicativo de celular que cruza a previsão do tempo, a fase da lua e o horário
> do pôr do sol da cidade da pessoa, e lista o que dá para ver no céu **a olho
> nu** naquela noite. Avisa vinte minutos antes de cada evento e mostra para
> onde olhar. Gratuito. Público: quem nunca olhou o céu com atenção e acha que
> precisa de telescópio.

## 3. Restrições declaradas antes de pedir

Restrição é insumo, e das mais baratas. Estas foram ditas no prompt:

- Nenhuma imagem baixada da internet: a arte tem de ser CSS e SVG.
- Uma dependência externa, no máximo.
- Tem que abrir com dois cliques, sem servidor.
- JavaScript legível por quem está aprendendo: funções curtas, nomes e
  comentários em português.
- Sem framework, sem construtor de projeto, sem passo de compilação.
- Paleta de céu noturno: azul quase preto no fundo, âmbar no destaque.
- Nada de degradê roxo e nada de tipografia decorativa.

## 4. Paleta e tipografia

| papel | valor | de onde veio |
|---|---|---|
| fundo | `#070b14` | escolhido para parecer céu sem virar preto puro |
| faixa alternada | `#0d1424` | dois tons acima do fundo |
| destaque | `#f5b962` | âmbar de estrela; é a única cor quente da página |
| apoio | `#7cc4ff` | azul frio, só em foco de campo |
| tipografia | Segoe UI, com alternativas do sistema | fonte que já existe na máquina: zero download |

## 5. Biblioteca escolhida

**Rellax 1.12.1**, do endereço de CDN que está no `index.html`. Escolhida por
três motivos: instala numa linha, não depende de nada, e **a versão aparece
dentro do endereço**, o que torna trivial documentá-la.

Considerada e recusada: biblioteca 3D. Motivo: peso e pouco retorno numa página
de divulgação.

## 6. O que a IA NÃO recebeu

Vale registrar, porque explica algumas escolhas: a IA não recebeu logotipo, não
recebeu foto, não recebeu texto de marketing pronto e não recebeu paleta de
marca. Tudo isso foi decidido dentro da própria conversa, a partir das
restrições da seção 3.
