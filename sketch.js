var ufo, ufoImg;

var virus, virusImg, virusGroup;
var deadVirus, deadVirusImg, deadVirusGroup;

function preload() {
	ufoImg = loadImage("ufo.png");

	virusImg = loadImage("virus.png");
	deadVirusImg = loadImage("deadVirus.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	ufo = createSprite(150, height/2, 256, 256);
	ufo.addImage(ufoImg);
	ufo.scale = 0.5;

	virusGroup = createGroup();
	deadVirusGroup = createGroup();
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyDown(38) || keyDown(87)) {
	ufo.y = ufo.y - 10;
  }

  if(keyDown(40) || keyDown(83)) {
	ufo.y = ufo.y + 10;
  }

  spawnVirus();
  spawnDeadVirus();

  drawSprites();
}

function spawnVirus() {
	if(frameCount % 80 === 0) {
		virus = createSprite(width + 50, random(20, height - 20), 95, 95);
		virus.addImage(virusImg);
		virus.scale = 0.5;
		virus.velocityX = -5;
		virus.lifetime = -50;
	
		virusGroup.add(virus);
	}
}

function spawnDeadVirus() {
	if(frameCount % 100 === 0) {
		deadVirus = createSprite(width + 50, random(20, height - 20), 95, 95);
		deadVirus.addImage(deadVirusImg);
		deadVirus.scale = 0.5;
		deadVirus.velocityX = -5;
		deadVirus.lifetime = -50;
	
		deadVirusGroup.add(deadVirus);
	}
}