# Pong

Esse projeto é uma recriação do jogo **Pong**, de 1972 — o primeiro jogo lançado pela Atari Inc. A proposta original da atividade era recriar uma obra de arte famosa e torná-la interativa. Quando pensei em qual seria a forma mais interativa de arte que conheço, a resposta foi: **jogos**.

Pong, além de ser um marco histórico no mundo dos videogames, é também uma forma simples, gráfica e icônica de arte interativa. Sua estética minimalista e regras claras permitem que qualquer pessoa entenda e jogue rapidamente. Por isso, decidi recriar o Pong.

---

## O jogo original

Lançado em 1972, Pong simula uma partida de tênis de mesa (ping-pong). É um jogo para dois jogadores, com uma bola que rebate nas bordas da tela e nas barras (raquetes) dos jogadores. O objetivo é simples: não deixar a bola passar pela sua barra.

---

## Adaptações feitas

Ao invés de simplesmente replicar o Pong original, resolvi adicionar algumas modificações para dar um toque pessoal e explorar recursos da biblioteca [p5.js](https://p5js.org/).

As principais mudanças que fiz foram:

- **Menu de início**: antes do jogo começar, uma tela inicial mostra o título e instruções básicas.
- **Rastro da bolinha**: a bolinha deixa um rastro que vai desaparecendo aos poucos, criando um efeito visual mais interessante.
- **Cores dinâmicas na bola**: a cor da bola muda de acordo com a direção que ela está se movendo:
  - Para a direita → **vermelha**
  - Para a esquerda → **azul**
- **Controles e IA**:
  - O jogador controla a barra **azul** com as setas ↑ e ↓.
  - A barra **vermelha** é controlada por uma IA simples que acompanha a bola.

---

## Como jogar

1. Clique o [link](https://elgennenif.github.io/pong/).
2. Na tela inicial, leia as instruções e pressione **ENTER** para começar.
3. Use as **setas ↑ e ↓** para mover sua barra (azul) para cima ou para baixo.
4. Rebata a bola e tente não deixar que ela passe pela sua barra!

---

## Tecnologias utilizadas

- HTML5
- JavaScript
- [p5.js](https://p5js.org/) – biblioteca gráfica para criação de sketches interativos

---

## Possíveis melhorias futuras

- Adição de placar para os jogadores
- Sons ao rebater a bola ou marcar ponto
- Modo 2 jogadores local
- Tela de vitória/derrota
- Escolha de cores ou modos visuais no menu

---