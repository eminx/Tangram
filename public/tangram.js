'use strict';
var isiOS = false;
var agent = navigator.userAgent.toLowerCase();
if (agent.indexOf('iphone') >= 0 || agent.indexOf('ipad') >= 0) {
  isiOS = true;
}

let clr;
let socket;

class Rectan {
  constructor(id, x, y, color) {
    this.id = id;
    this.pos = createVector(x, y);
    this.color = color;
    this.angle = 0;
    this.radius = 30;
  }
  show() {
    noStroke();
    fill(this.color);
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
  rotateCW() {
    this.angle += PI / 4;
  }
  rotateCCW() {
    this.angle -= PI / 4;
  }
}
class Quadri {
  constructor(id, x, y, color) {
    this.id = id;
    this.pos = createVector(x, y);
    this.color = color;
    this.angle = 0;
    this.radius = 30;
  }
  show() {
    noStroke();
    fill(this.color);
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
  rotateCW() {
    this.angle += PI / 4;
  }
  rotateCCW() {
    this.angle -= PI / 4;
  }
}

class Triangle {
  constructor(id, x, y, size, color) {
    this.id = id;
    this.pos = createVector(x, y);
    this.size = size;
    this.color = color;
    this.angle = 0;
    this.radius;
  }
  show() {
    noStroke();
    fill(this.color);
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
  rotateCW() {
    this.angle += PI / 4;
  }
  rotateCCW() {
    this.angle -= PI / 4;
  }
}

var colors = [
  'red',
  'green',
  'blue',
  'yellow',
  'rgba(255,165,0,0.8)',
  'purple',
  'pink',
];
var shapes = [];

function setup() {
  const w = 600;
  const h = 400;

  socket = io.connect('http://localhost:9000');
  socket.on('mouse', reDrawShape);

  createCanvas(w, h);
  angleMode(RADIANS);
  rectMode(CENTER);
  noStroke();
  shapes.push(new Triangle(1, 350, 150, 'big', colors[4]));
  shapes.push(new Triangle(2, 100, 300, 'big', colors[4]));
  shapes.push(new Triangle(3, 100, 150, 'medium', colors[4]));
  shapes.push(new Rectan(4, 200, 200, colors[4]));
  shapes.push(new Triangle(5, 250, 50, 'small', colors[4]));
  shapes.push(new Triangle(6, 100, 50, 'small', colors[4]));
  shapes.push(new Quadri(7, 250, 300, colors[4]));
}

function draw() {
  background(0);
  for (let shape of shapes) {
    shape.show();
  }
}

function reDrawShape(data) {
  const shapeMoved = shapes.find((shape) => shape.id === data.id);
  shapeMoved.pos.x = data.x;
  shapeMoved.pos.y = data.y;
}

let lastShape;
function putShapeInFront() {
  shapes.push(shapeSelected);
  shapes.splice(shapes.indexOf(shapeSelected), 1);
  lastShape = shapes[6];
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
  };
  socket.emit('mouse', data);
}

function tcw() {
  if (lastShape) lastShape.rotateCW();
}
function tccw() {
  if (lastShape) lastShape.rotateCCW();
}
