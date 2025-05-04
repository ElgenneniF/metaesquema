let ball, playerPaddle, aiPaddle;
let ballSpeed = 5;
let paddleHeight = 100;
let paddleWidth = 15;
let gameStarted = false;

function setup() {
  createCanvas(400, 400);
  startGame();
  noLoop(); 
}

function startGame() {
  ball = createVector(width / 2, height / 2);
  ball.vel = createVector(ballSpeed, random(-ballSpeed, ballSpeed));
  
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
    fill(255);
    text("Você é a barra", width / 2, height / 2 - 30);
    fill(0, 0, 255);
    text("azul", width / 2, height / 2 - 10);
    fill(255);
    text("Use as setas ↑ ↓ para se mover", width / 2, height / 2 + 10);


    text("Pressione ENTER para começar", width / 2, height / 2 + 50);
    return;
  }

  background(0, 20);


  if (abs(ball.vel.x) > abs(ball.vel.y)) {
    if (ball.vel.x > 0) fill(255, 0, 0); // direita → vermelho
    else fill(0, 0, 255); // esquerda → azul
  }

  ellipse(ball.x, ball.y, 20);
  ball.add(ball.vel);
 
  if (ball.y < 0 || ball.y > height) ball.vel.y *= -1;

  if (ball.x < playerPaddle.x + paddleWidth &&
      ball.y > playerPaddle.y &&
      ball.y < playerPaddle.y + paddleHeight) {
    ball.vel.x *= -1;
    ball.x = playerPaddle.x + paddleWidth;
  }

  if (ball.x > aiPaddle.x &&
      ball.y > aiPaddle.y &&
      ball.y < aiPaddle.y + paddleHeight) {
    ball.vel.x *= -1;
    ball.x = aiPaddle.x;
  }

  if (ball.x < 0 || ball.x > width) {
    startGame();
  }

  fill(0, 0, 255);
  rect(playerPaddle.x, playerPaddle.y, paddleWidth, paddleHeight);
  if (keyIsDown(UP_ARROW)) playerPaddle.y -= 7;
  if (keyIsDown(DOWN_ARROW)) playerPaddle.y += 7;
  
  fill(255, 0, 0);
  aiPaddle.y += (ball.y - aiPaddle.y - paddleHeight / 2) * 0.05;
  rect(aiPaddle.x, aiPaddle.y, paddleWidth, paddleHeight);
}

function keyPressed() {
  if (!gameStarted && keyCode === ENTER) {
    gameStarted = true;
    loop(); 
  }
}
