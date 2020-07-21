'use strict';

// Base class that does all the common operations.
class Shape {
  constructor(id, x, y, color, size, skala) {
    this.id = id;
    this.pos = createVector(x, y);
    this.color = color;
    this.angle = 0;
    this.radius = 30;
    this.size = size;
    this.skala = 1;
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
    
// flipper(){
//     this.skala = -1;
//  }     
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
//    scale(this.skala, 1);
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
  'rgba(62,216,187,0.8)',
  'rgba(255,88,88,0.8)',
  'rgba(255,189,155,1)',
  'rgba(255,165,0,0.8)',
  'purple',
  'pink',
];
var shapes = [];

function setup() {
  const w = 1200;
  const h = 900;

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
  shapes.push(new Circul(1, 250, 450, colors[3]));
  shapes.push(new Circul(2, 350, 450, colors[3]));
  shapes.push(new Triangle(3, 350, 350, colors[1], 'big'));
  shapes.push(new Triangle(4, 100, 500, colors[1], 'big'));
  shapes.push(new Triangle(5, 100, 350, colors[1], 'medium'));
  shapes.push(new Rectan(6, 200, 400, colors[1]));
  shapes.push(new Triangle(7, 250, 250, colors[1], 'small'));
  shapes.push(new Triangle(8, 100, 250, colors[1], 'small'));
  shapes.push(new Quadri(9, 250, 500, colors[1]));
  shapes.push(new Circul(10, 650, 550, colors[3]));
  shapes.push(new Circul(11, 750, 450, colors[3]));
  shapes.push(new Triangle(12, 750, 350, colors[2], 'big'));
  shapes.push(new Triangle(13, 500, 500, colors[2], 'big'));
  shapes.push(new Triangle(14, 500, 350, colors[2], 'medium'));
  shapes.push(new Rectan(15, 600, 400, colors[2]));
  shapes.push(new Triangle(16, 650, 250, colors[2], 'small'));
  shapes.push(new Triangle(17, 500, 250, colors[2], 'small'));
  shapes.push(new Quadri(18, 650, 500, colors[2]));
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
function putShapeInFront(shape) {
  shapes.push(shape);
  shapes.splice(shapes.indexOf(shape), 1);
  lastShape = shapes[shapes.length -1];
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

// function flip() {
//  if (lastShape) lastShape.flipper;
// console.log (lastShape.skala)             
//}
