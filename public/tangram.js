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
  'rgba(255,88,88,0.8)',
  'blue',
  'rgba(255,189,155,1)',
  'rgba(255,88,88,0.8)',
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
 shapes.push(new Circul(201, 250, 250, colors[3]));
  shapes.push(new Circul(202, 350, 250, colors[3]));
  shapes.push(new Diamond(203, 100, 150, colors[2]));
shapes.push(new Triangle(204, 300, 350, colors[2], 'big'));
  shapes.push(new Triangle(205, 100, 500, colors[2], 'big'));
  shapes.push(new Triangle(206, 100, 350, colors[2], 'medium'));
  shapes.push(new Triangle(207, 250, 250, colors[2], 'small'));
  shapes.push(new Triangle(208, 100, 250, colors[2], 'small'));
  shapes.push(new Triangle(209, 100, 75, colors[2], 'xsmall'));
  shapes.push(new Triangle(210, 150, 75, colors[2], 'xsmall'));
  shapes.push(new Rectan(211, 350, 250, colors[2], 'big'));
  shapes.push(new Rectan(212, 200, 150, colors[2], 'medium'));
  shapes.push(new Rectan(213, 100, 50, colors[2],'small'));
  shapes.push(new Rectan(214, 150, 50, colors[2],'small'));
  shapes.push(new Rectan(215, 200, 50, colors[2],'small'));
  shapes.push(new Rectan(216, 250, 50, colors[2],'small'));
  shapes.push(new Rectan(217, 300, 50, colors[2],'rect'));    
  shapes.push(new Quadri(218, 250, 500, colors[2], 'big'));
  shapes.push(new Quadri(219, 300, 150, colors[2], 'small'));
}

function draw() {
  background('#FFF4EE');
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
