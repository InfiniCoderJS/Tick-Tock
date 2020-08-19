var hr
var mn
var sc
var scAngle
var hrAngle
var mnAngle

function setup() {
  createCanvas(420,400);
  
  hr = hour()
  mn = minute()
  sc = second()

  angleMode(DEGREES)
}

function draw() {
  background("black");
  translate(200,200)
  rotate(-90)

  hr = hour()
  mn = minute()
  sc = second()

  scAngle = map(sc,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr,0,60,0,360)
  
  push()
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(mnAngle)
  stroke(57, 255, 20)
  strokeWeight(7)
  line(0,0,80,0)
  pop()

  push()
  rotate(hrAngle)
  stroke("#4666FF")
  strokeWeight(7)
  line(0,0,50,0)
  pop()

  strokeWeight(10)
  noFill()
  stroke(255,0,0)
  arc(0,0,300,300,0,scAngle)

  strokeWeight(10)
  noFill()
  stroke(57,255,20)
  arc(0,0,270,270,0,mnAngle)

  strokeWeight(10)
  noFill()
  stroke("#4666FF")
  arc(0,0,240,240,0,hrAngle)


  drawSprites();
}