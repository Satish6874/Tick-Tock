var hr,min,sec;

function setup() {
  createCanvas(800,400);
 angleMode(DEGREES);
 
}

function draw() {
  background(255,255,255);

  translate(200, 200);
  rotate(-90)
  
  let hr = hour();
  let min = minute();
  let sec = second();
  
  
  
  strokeWeight(8);
  stroke(255,0,0);
  noFill();
  let scAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, scAngle);
  
  
  stroke(0,0,255);
  let minAngle = map(min, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minAngle);
  
  
  stroke(0,255,0);
  let hrAngle = map(hr % 12 , 0, 12, -90, 360);
  arc(0, 0, 260, 260, 0, hrAngle);
  
  
  push();
  rotate(scAngle);
  stroke(255,0,0);
  line(0, 0, 100, 0 );
  pop();
  
  push();
  rotate(minAngle);
  stroke(0,0,255);
  line(0, 0, 75, 0 );
  pop();
  
  push();
  rotate(hrAngle);
  stroke(0,255,0);
  line(0, 0, 50, 0 );
  pop();
  
  stroke(255);
  point(0, 0);

  drawSprites();
}