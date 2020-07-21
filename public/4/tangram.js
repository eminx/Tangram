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

const hcoff = Math.sqrt(50);
const hcoff2 = Math.sqrt(2);

class Diamond extends Shape {
  show() {
    super.show();
    push();
    this.radius = 35;
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
beginShape();
vertex(5/3 * hcoff, 5 * hcoff);
vertex(5/3 * hcoff, 5/3 * hcoff);
vertex(5 * hcoff, 5/3 * hcoff);
vertex(5 * hcoff, -5/3 * hcoff);
vertex(5/3 * hcoff, -5/3 * hcoff);
vertex(5/3 * hcoff, -5 * hcoff);
vertex(-5/3 * hcoff, -5 * hcoff);
vertex(-5/3 * hcoff, -5/3 * hcoff);      
vertex(-5 * hcoff, -5/3 * hcoff);
vertex(-5 * hcoff, 5/3 * hcoff);
vertex(-5/3 * hcoff, 5/3 * hcoff);
vertex(-5/3 * hcoff, 5 * hcoff);      
endShape();      
    fill(10, 0);
    circle(0, 0, this.radius);
    translate(-this.pos.x, -this.pos.y);
    pop();
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
    if (this.size == 'big') {
    this.radius = 45;
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    rect(0, 0, 10 * hcoff, 10 * hcoff);
    fill(10, 0);
    circle(0, 0, this.radius);
    translate(-this.pos.x, -this.pos.y);
    pop();
    }
    if (this.size == 'medium') {
    this.radius = 30;
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    rect(0, 0, 5 * hcoff, 5 * hcoff);
    fill(10, 0);
    circle(0, 0, this.radius);
    translate(-this.pos.x, -this.pos.y);
    pop();
    } 
    if (this.size == 'small') {
    this.radius = 15;
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    rect(0, 0, 2.5 * hcoff, 2.5 * hcoff);
    fill(10, 0);
    circle(0, 0, this.radius);
    translate(-this.pos.x, -this.pos.y);
    pop();
    } 
     if (this.size == 'rect') {
    this.radius = 15;
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    rect(0, 0, 10/4 * hcoff, 10 * hcoff);
    fill(10, 0);
    circle(0, 0, this.radius);
    translate(-this.pos.x, -this.pos.y);
    pop();
    }      
        
  }
}

class Quadri extends Shape {
  show() {
    super.show();
    push();
          if (this.size == 'big') {
    this.radius = 45;
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    quad(-25, -25, 75, -25, 25, 25, -75, 25);
    fill(10, 0);
    circle(0, 0, this.radius);
    translate(-this.pos.x, -this.pos.y);
    pop();
    }
       if (this.size == 'small') {
    this.radius = 25;
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    quad(-25/2, -25/2, 75/2, -25/2, 25/2, 25/2, -75/2, 25/2);
    fill(10, 0);
    circle(0, 0, this.radius);
    translate(-this.pos.x, -this.pos.y);
    pop();
    }
      
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
        -10 * hcoff,
        -5 * hcoff,
        10 * hcoff,
        -5 * hcoff,
        0,
        5 * hcoff
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
       if (this.size == 'xsmall') {
      push();
      this.radius = 20;
      translate(this.pos.x, this.pos.y);
      rotate(this.angle);
      triangle(-10 * hcoff2, -5 * hcoff2, 10 * hcoff2, -5 * hcoff2, 0, 5 * hcoff2);
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
  'rgba(62,216,187,0.7)',
  'rgba(255,88,88,0.7)',
  'rgba(255,189,155,0.7)',
  'rgba(255,165,0,0.7)',
  'purple',
  'pink',
];
var shapes = [];
var otherPointerPosition = {x:-1, y:-1};


function setup() {
  const w = 1200;
  const h = 900;

  if (isDevEnv) {
    socket = io.connect(HOST);
  } else {
    socket = io.connect();
  }
  //socket.on('mouse', reDrawShape);
  socket.on('mouse', otherPointers);
  socket.on('moveShape', reDrawShape);

  createCanvas(w, h);
  angleMode(RADIANS);
  rectMode(CENTER);
  noStroke();
  shapes.push(new Diamond(1, 100, 150, colors[1]));
  shapes.push(new Diamond(2, 500, 150, colors[2]));
  shapes.push(new Circul(3, 250, 450, colors[3]));
  shapes.push(new Circul(4, 350, 450, colors[3]));
  shapes.push(new Triangle(5, 300, 350, colors[1], 'big'));
  shapes.push(new Triangle(6, 100, 500, colors[1], 'big'));
  shapes.push(new Triangle(7, 100, 350, colors[1], 'medium'));
  shapes.push(new Triangle(8, 250, 250, colors[1], 'small'));
  shapes.push(new Triangle(9, 100, 250, colors[1], 'small'));
  shapes.push(new Triangle(10, 100, 75, colors[1], 'xsmall'));
  shapes.push(new Triangle(11, 150, 75, colors[1], 'xsmall'));
  shapes.push(new Rectan(12, 350, 250, colors[1], 'big'));
  shapes.push(new Rectan(13, 200, 150, colors[1], 'medium'));
  shapes.push(new Rectan(14, 100, 50, colors[1],'small'));
  shapes.push(new Rectan(15, 150, 50, colors[1],'small'));
  shapes.push(new Rectan(16, 200, 50, colors[1],'small'));
  shapes.push(new Rectan(17, 250, 50, colors[1],'small'));
  shapes.push(new Rectan(18, 300, 50, colors[1],'rect'));    
  shapes.push(new Quadri(19, 250, 500, colors[1], 'big'));
  shapes.push(new Quadri(20, 300, 150, colors[1], 'small'));
  shapes.push(new Circul(21, 650, 550, colors[3]));
  shapes.push(new Circul(22, 750, 450, colors[3]));
  shapes.push(new Triangle(23, 700, 350, colors[2], 'big'));
  shapes.push(new Triangle(24, 500, 500, colors[2], 'big'));
  shapes.push(new Triangle(25, 500, 350, colors[2], 'medium')); 
  shapes.push(new Triangle(26, 650, 250, colors[2], 'small'));
  shapes.push(new Triangle(27, 500, 250, colors[2], 'small'));
  shapes.push(new Triangle(28, 500, 75, colors[2], 'xsmall'));
  shapes.push(new Triangle(29, 550, 75, colors[2], 'xsmall'));
  shapes.push(new Rectan(30, 750, 250, colors[2], 'big'));
  shapes.push(new Rectan(31, 600, 150, colors[2], 'medium'));
  shapes.push(new Rectan(32, 500, 50, colors[2],'small'));
  shapes.push(new Rectan(33, 550, 50, colors[2],'small'));
  shapes.push(new Rectan(34, 600, 50, colors[2],'small'));
  shapes.push(new Rectan(35, 650, 50, colors[2],'small'));
  shapes.push(new Rectan(36, 700, 50, colors[2],'rect'));        
  shapes.push(new Quadri(37, 650, 500, colors[2], 'big'));
  shapes.push(new Quadri(38, 700, 150, colors[2], 'small'));
}

function draw() {
    background('#FFF4EE');
  for (let shape of shapes) {
    shape.show();
  };
  fill(150);
ellipse(otherPointerPosition.x, otherPointerPosition.y, 20, 20);
}

function reDrawShape(data) {
  const shapeMoved = shapes.find((shape) => shape.id === data.id);
  shapeMoved.pos.x = data.x;
  shapeMoved.pos.y = data.y;
  shapeMoved.angle = data.z;
  putShapeInFront(shapeMoved);
  console.log(data);
}

function otherPointers(data) {
  otherPointerPosition = data;
}

let lastShape;
function putShapeInFront(shape) {
  shapes.push(shape);
  shapes.splice(shapes.indexOf(shape), 1);
  lastShape = shapes[shapes.length -1];
}

let clickedShape = false;
let shapeSelected = false;
function mousePressed() {
    clickedShape = 
    shapes.find((shape) => {
      return (
        abs(mouseX - shape.pos.x) < shape.radius / 1 &&
        abs(mouseY - shape.pos.y) < shape.radius / 1
      );
    }) || false;
    
    if (clickedShape){        
    shapeSelected = clickedShape;
    
putShapeInFront(shapeSelected)
    
//lastShape = shapeSelected;    
    
const data = {
    id:shapeSelected.id,
    x: shapeSelected.pos.x,
    y: shapeSelected.pos.y,
    z: shapeSelected.angle,
  };
socket.emit('moveShape', data);
}
    };

function mouseReleased() {
  //shapeSelected = false;
  clickedShape = false;

}

function mouseMoved() {
    const data = {
    x: mouseX,
    y: mouseY,
  };
  socket.emit('mouse', data);    
}

function mouseDragged() {
    if (clickedShape) {        
  shapeSelected ? (shapeSelected.pos.x = mouseX) : null;
  shapeSelected ? (shapeSelected.pos.y = mouseY) : null;
  const data = {
    id: shapeSelected.id,
    x: mouseX,
    y: mouseY,
    z: shapeSelected.angle,
  };        
  socket.emit('moveShape', data);  
    }
    const mouseData = {
        x: mouseX,
        y: mouseY,
    } 
  socket.emit('mouse', mouseData);    
}

function tcw() {
    console.log({shapeSelected});
  if (shapeSelected) shapeSelected.rotateCW();
    const data = {
    id: shapeSelected.id,
    x: shapeSelected.pos.x,
    y: shapeSelected.pos.y,
    z: shapeSelected.angle,
  };
      socket.emit('moveShape', data);
}

function tccw() {
  if (shapeSelected) shapeSelected.rotateCCW();
    
    const data = {
    id: shapeSelected.id,
    x: shapeSelected.pos.x,
    y: shapeSelected.pos.y,
    z: shapeSelected.angle,
  };
      socket.emit('moveShape', data);
}

// function flip() {
//  if (lastShape) lastShape.flipper;
// console.log (lastShape.skala)             
//}
