var flying=50
//The setup function only happens once
function setup() {
	createCanvas(900, 900);
	background(220,215,250); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
fill(0,250,154);
ellipse(mouseX,mouseY,flying,flying);
fill(220,215,250);
stroke(0,250,154);
textSize(25);
textFont("vibes");
text("Aloha Beautiful",200,200);
  }

function mousePressed(){
flying=flying+5
}

