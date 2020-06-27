'use strict';

// Base class that does all the common operations.
class Shape {
  constructor(id, x, y, color, size) {
    this.id = id;
    this.pos = createVector(x, y);
    this.color = color;
    this.angle = 0;
    this.radius = 30;
    this.size = size;
  }
  show() {
    noStroke();
    fill(this.color);
  }

  rotateCW() {
    this.angle += PI / 4;
  }
  rotateCCW() {
    this.angle -= PI / 4;
  }
  flipper(){
    this.scale(-1.0, 1);
    console.log('yolo');
  }    
}

class Circul extends Shape {
  show() {
    super.show();
    push();
    this.radius = 30;
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    circle(0, 0, 30);
    fill(10, 0);
    circle(0, 0, this.radius);
    translate(-this.pos.x, -this.pos.y);
    pop();
  }
}


class Rectan extends Shape {
  show() {
    super.show();
    push();
    this.radius = 45;
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    rect(0, 0, 10 * sqrt(50), 10 * sqrt(50));
    fill(10, 0);
    circle(0, 0, this.radius);
    translate(-this.pos.x, -this.pos.y);
    pop();
  }
}

class Quadri extends Shape {
  show() {
    super.show();
    push();
    this.radius = 45;
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    quad(-25, -25, 75, -25, 25, 25, -75, 25);
    fill(10, 0);
    circle(0, 0, this.radius);
    translate(-this.pos.x, -this.pos.y);
    pop();
  }
}

class Triangle extends Shape {
  show() {
    super.show();
    if (this.size == 'big') {
      push();
      this.radius = 60;
      translate(this.pos.x, this.pos.y);
      rotate(this.angle);
      triangle(-100, -50, 100, -50, 0, 50);
      fill(10, 0);
      circle(0, -10, this.radius);
      translate(-this.pos.x, -this.pos.y);
      pop();
    }
    if (this.size == 'medium') {
      push();
      this.radius = 45;
      translate(this.pos.x, this.pos.y);
      rotate(this.angle);
      triangle(
        -10 * sqrt(50),
        -5 * sqrt(50),
        10 * sqrt(50),
        -5 * sqrt(50),
        0,
        5 * sqrt(50)
      );
      fill(10, 0);
      circle(0, -5, this.radius);
      translate(-this.pos.x, -this.pos.y);
      pop();
    }
    if (this.size == 'small') {
      push();
      this.radius = 35;
      translate(this.pos.x, this.pos.y);
      rotate(this.angle);
      triangle(-50, -25, 50, -25, 0, 25);
      fill(10, 0);
      circle(0, -5, this.radius);
      translate(-this.pos.x, -this.pos.y);
      pop();
    }
  }
}

var isiOS = false;
var agent = navigator.userAgent.toLowerCase();
if (agent.indexOf('iphone') >= 0 || agent.indexOf('ipad') >= 0) {
  isiOS = true;
}

const HOST = window.location.hostname;
let isDevEnv = false;
if (HOST === 'localhost:5000') {
  isDevEnv = true;
}

let clr;
let socket;

var colors = [
  'red',
  'green',
  'blue',
  'white',
  'rgba(255,165,0,0.8)',
  'purple',
  'pink',
];
var shapes = [];

function setup() {
  const w = 800;
  const h = 600;

  if (isDevEnv) {
    socket = io.connect(HOST);
  } else {
    socket = io.connect();
  }
  socket.on('mouse', reDrawShape);

  createCanvas(w, h);
  angleMode(RADIANS);
  rectMode(CENTER);
  noStroke();
  shapes.push(new Circul(1, 250, 250, colors[3]));
  shapes.push(new Circul(2, 350, 250, colors[3]));
  shapes.push(new Triangle(3, 350, 150, colors[4], 'big'));
  shapes.push(new Triangle(4, 100, 300, colors[4], 'big'));
  shapes.push(new Triangle(5, 100, 150, colors[4], 'medium'));
  shapes.push(new Rectan(6, 200, 200, colors[4]));
  shapes.push(new Triangle(7, 250, 50, colors[4], 'small'));
  shapes.push(new Triangle(8, 100, 50, colors[4], 'small'));
  shapes.push(new Quadri(9, 250, 300, colors[4]));
}

function draw() {
  background(100);
  for (let shape of shapes) {
    shape.show();
  }
}

function reDrawShape(data) {
  const shapeMoved = shapes.find((shape) => shape.id === data.id);
  shapeMoved.pos.x = data.x;
  shapeMoved.pos.y = data.y;
  shapeMoved.angle = data.z;    
}

let lastShape;
function putShapeInFront() {
  shapes.push(shapeSelected);
  shapes.splice(shapes.indexOf(shapeSelected), 1);
  lastShape = shapes[8];
}

let shapeSelected = false;
function mousePressed() {
  shapeSelected =
    shapes.find((shape) => {
      return (
        abs(mouseX - shape.pos.x) < shape.radius / 1 &&
        abs(mouseY - shape.pos.y) < shape.radius / 1
      );
    }) || false;
  putShapeInFront();
}

function mouseReleased() {
  shapeSelected = false;
}

function mouseDragged() {
  shapeSelected ? (shapeSelected.pos.x = mouseX) : null;
  shapeSelected ? (shapeSelected.pos.y = mouseY) : null;
  const data = {
    id: shapeSelected.id,
    x: mouseX,
    y: mouseY,
    z: shapeSelected.angle,
  };
  socket.emit('mouse', data);
}

function tcw() {
  if (lastShape) lastShape.rotateCW();
    const data = {
    id: lastShape.id,
    x: lastShape.pos.x,
    y: lastShape.pos.y,
    z: lastShape.angle,
  };
      socket.emit('mouse', data);
}

function tccw() {
  if (lastShape) lastShape.rotateCCW();
     const data = {
    id: lastShape.id,
    x: lastShape.pos.x,
    y: lastShape.pos.y,
    z: lastShape.angle,
  };
      socket.emit('mouse', data);
}

function flip() {
  if (lastShape) lastShape.flipper;

}
