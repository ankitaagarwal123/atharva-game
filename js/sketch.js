var database;
var back_img;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var life = 3;
var bullets = 6;
var player, form, game;
var player1, player2;
var players;
var player1life = 1;
var player2life = 1;
var player1bullets = 1;
var player2bullets = 1;

var xPosition, yPosition;
var bullet1, bullet2, bullet3, bullet4;
var bullet1group, bullet2group;

function preload() {
	back_img = loadImage("images/Form bg.jpg");
	playerB = loadImage("images/GunPerson2.png");
	playerR = loadImage("images/GunPerson.png");
	grass = loadImage("images/grass.jpg");
}
function setup() {
	createCanvas(900, 800);
	database = firebase.database();
	game = new Game();
	game.getState();
	game.start();
	
	wallGroup = createGroup();
	bullet1group= createGroup();
	bullet2group= createGroup();

	edge1 = new Wall(0, 450, 20, 900);
	edge2 = new Wall(110, 0, 200, 20);
	edge3 = new Wall(600, 0, 700, 20); 
	edge4 = new Wall(900, 400, 20, 900);
	edge5 = new Wall(300, 800, 600, 20);
	edge6 = new Wall(800, 800, 310, 20);
	

}

function draw() {
	game.getState();

	if(gameState === 0){
		background(back_img)
	}
	if (playerCount === 2 && gameState === 0) {
		game.update(1);
	}
	if (gameState === 1) {
		clear();
		// background(grass)
		game.play();
		
	}
	if (gameState === 2) {
		clear();
		// background(grass)
		game.end();
		
	}
	
}