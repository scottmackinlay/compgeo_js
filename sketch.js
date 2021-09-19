
points = []

function comparePoints(a,b) {
  return (a.y > b.y) || (a.y == b.y && a.x > b.x);
}

function setup() {
  createCanvas(600, 400);
  for (let i=0; i<10; i++){
    points.push(createVector(random(width), random(height)))
  }
}

function draw() {
  background(100);
  stroke(255)
  strokeWeight(8)
  for (let p of points){
    point(p.x, p.y)
  }



}
