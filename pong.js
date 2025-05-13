let ball, playerPaddle, aiPaddle;
let ballSpeed = 5;
let paddleHeight = 100;
let paddleWidth = 15;
let gameStarted = false;

let mobileUpPressed = false;
let mobileDownPressed = false;

function setup() {
  createCanvas(400, 400);
  startGame();
  noLoop();
  detectMobile();
}

function startGame() {
  ball = createVector(width / 2, height / 2);
  ball.vel = createVector(ballSpeed, random(-2, 2));

  playerPaddle = createVector(20, height / 2 - paddleHeight / 2);
  aiPaddle = createVector(width - 35, height / 2 - paddleHeight / 2);
}

function draw() {
  if (!gameStarted) {
    background(0);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(32);
    text("PONG", width / 2, height / 2 - 80);
    textSize(16);
    text("Você é a barra", width / 2, height / 2 - 30);
    fill(0, 0, 255);
    text("azul", width / 2, height / 2 - 10);
    fill(255);
    text("Use as setas ↑ ↓ ou botões para jogar", width / 2, height / 2 + 10);
    text("Pressione ENTER para começar", width / 2, height / 2 + 50);
    return;
  }

  background(0, 60);

  push(); // Salva o estado atual de desenho
  translate(ball.x, ball.y); // Move a origem para a posição da bola

  if (abs(ball.vel.x) > abs(ball.vel.y)) {
    if (ball.vel.x > 0) fill(255, 0, 0); // IA
    else fill(0, 0, 255); // Jogador
  }

  ellipse(0, 0, 20); // Desenha a bola na nova origem
  pop();

  ball.add(ball.vel);
  ball.vel.limit(15);

  if (ball.y < 0 || ball.y > height) ball.vel.y *= -1;

  // Colisão com jogador
  if (ball.x < playerPaddle.x + paddleWidth &&
      ball.y > playerPaddle.y &&
      ball.y < playerPaddle.y + paddleHeight) {
    ball.vel.x *= -1.05;
    ball.vel.y += random(-1, 1);
    ball.x = playerPaddle.x + paddleWidth;
  }

  // Colisão com IA
  if (ball.x > aiPaddle.x &&
      ball.y > aiPaddle.y &&
      ball.y < aiPaddle.y + paddleHeight) {
    ball.vel.x *= -1.05;
    ball.vel.y += random(-2, 2);
    ball.x = aiPaddle.x;
  }

  // Pontuação
  if (ball.x < 0 || ball.x > width) {
    startGame();
  }

  // Jogador
  fill(0, 0, 255);
  rect(playerPaddle.x, playerPaddle.y, paddleWidth, paddleHeight);
  if (keyIsDown(UP_ARROW) || mobileUpPressed) playerPaddle.y -= 7;
  if (keyIsDown(DOWN_ARROW) || mobileDownPressed) playerPaddle.y += 7;

  // Limitar o movimento do jogador dentro da tela
  playerPaddle.y = constrain(playerPaddle.y, 0, height - paddleHeight);

  // IA
  fill(255, 0, 0);
  aiPaddle.y += (ball.y - aiPaddle.y - paddleHeight / 2) * 0.05;

  // Limitar o movimento da IA dentro da tela
  aiPaddle.y = constrain(aiPaddle.y, 0, height - paddleHeight);
  rect(aiPaddle.x, aiPaddle.y, paddleWidth, paddleHeight);
}

function keyPressed() {
  if (!gameStarted && keyCode === ENTER) {
    gameStarted = true;
    loop();
  }
}

function detectMobile() {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    document.getElementById('mobile-controls').style.display = 'flex';
    document.getElementById('mobile-start').style.display = 'flex'; // mostra o botão "Começar"

    const upBtn = document.getElementById('up-button');
    const downBtn = document.getElementById('down-button');
    
    upBtn.addEventListener('touchstart', () => mobileUpPressed = true);
    upBtn.addEventListener('touchend', () => mobileUpPressed = false);
    downBtn.addEventListener('touchstart', () => mobileDownPressed = true);
    downBtn.addEventListener('touchend', () => mobileDownPressed = false);
  }
}

function startMobileGame() {
  if (!gameStarted) {
    gameStarted = true;
    loop();
    document.getElementById('mobile-start').style.display = 'none';
  }
}