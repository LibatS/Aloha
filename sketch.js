var flying=50
//The setup function only happens once
function setup() {
	createCanvas(1400, 1155);
	background(152,251,152); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
fill(0,255,0);
ellipse(mouseX,mouseY,flying,flying);
fill(255,240,245);
stroke(64,224,208);
textSize(50);
textFont("script");
text("Aloha Beautiful",500,600);
  }

function mousePressed(){
flying=flying-10;
2(flying-10)=flying+10;	
	
}

