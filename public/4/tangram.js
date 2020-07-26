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
var otherPointerPosition = {x:-40, y:-40};

var colPicA;
var colPicB;

var colA;
var colB;

var inputTxt;
var txt;

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
  socket.on('colorChangeConfirm', changeShapeColor);
  socket.on('textChangeConfirm', changeTextValue);
  
  var cnv = createCanvas(w, h);
  cnv.parent("sketchHolder");
    
  angleMode(RADIANS);
  rectMode(CENTER);
  noStroke();

  colPicA = createColorPicker(colors[1]); 
  colPicA.position(250, 40);
  colPicA.id("firstPicker");
  colPicA.parent("sketchHolder"); 
  colA = colPicA.color();
  colPicA.elt.addEventListener('change', changeColorRequest);
              
  colPicB = createColorPicker(colors[2]); 
  colPicB.position(320, 40);
  colPicB.id("secondPicker");
  colPicB.parent("sketchHolder");  
  colB = colPicB.color();
  colPicB.elt.addEventListener('change', changeColorRequest);
                                                   
  inputTxt = createInput('You can type, too.');
  inputTxt.position(400, 35);
  inputTxt.id("storytext");
  txt = storytext.text;  
  inputTxt.parent("sketchHolder");
  console.log(inputTxt.value()); 
  inputTxt.elt.addEventListener('input', changeTextRequest);    
        
  var button = createButton('reset');
  button.parent("sketchHolder"); 
  button.id("reset");
  button.position(650, 37, 50);
  button.mousePressed(resetText);    
  
  shapes.push(new Diamond(1, 100, 150, colors[1])); 
  shapes.push(new Triangle(2, 300, 350, colors[1], 'big'));
  shapes.push(new Triangle(3, 100, 500, colors[1], 'big'));
  shapes.push(new Triangle(4, 100, 350, colors[1], 'medium'));
  shapes.push(new Triangle(5, 250, 250, colors[1], 'small'));
  shapes.push(new Triangle(6, 100, 250, colors[1], 'small'));
  shapes.push(new Triangle(7, 100, 75, colors[1], 'xsmall'));
  shapes.push(new Triangle(8, 150, 75, colors[1], 'xsmall'));
  shapes.push(new Rectan(9, 350, 250, colors[1], 'big'));
  shapes.push(new Rectan(10, 200, 150, colors[1], 'medium'));
  shapes.push(new Rectan(11, 100, 50, colors[1],'small'));
  shapes.push(new Rectan(12, 150, 50, colors[1],'small'));
  shapes.push(new Rectan(13, 200, 50, colors[1],'small'));
  shapes.push(new Rectan(14, 250, 50, colors[1],'small'));
  shapes.push(new Rectan(15, 300, 50, colors[1],'rect'));    
  shapes.push(new Quadri(16, 250, 500, colors[1], 'big'));
  shapes.push(new Quadri(17, 300, 150, colors[1], 'small'));
  shapes.push(new Circul(18, 250, 450, colors[3]));
  shapes.push(new Circul(19, 350, 450, colors[3]));    
  shapes.push(new Circul(20, 650, 550, colors[3]));
  shapes.push(new Circul(21, 750, 450, colors[3]));
  shapes.push(new Diamond(22, 500, 150, colors[2]));
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
    
//add text from storytext.value
textSize(50);   
text(inputTxt.value(), 200, 650);     

    
//console.log(shapes[shapes.indexOf(shape)].id);
    
const shape1 = shapes.find((shape) => shape.id === 1);
const shape2 = shapes.find((shape) => shape.id === 2);
const shape3 = shapes.find((shape) => shape.id === 3);
const shape4 = shapes.find((shape) => shape.id === 4);
const shape5 = shapes.find((shape) => shape.id === 5);
const shape6 = shapes.find((shape) => shape.id === 6);
const shape7 = shapes.find((shape) => shape.id === 7);
const shape8 = shapes.find((shape) => shape.id === 8);
const shape9 = shapes.find((shape) => shape.id === 9);
const shape10 = shapes.find((shape) => shape.id === 10);
const shape11 = shapes.find((shape) => shape.id === 11);
const shape12 = shapes.find((shape) => shape.id === 12);
const shape13 = shapes.find((shape) => shape.id === 13);
const shape14 = shapes.find((shape) => shape.id === 14);
const shape15 = shapes.find((shape) => shape.id === 15);
const shape16 = shapes.find((shape) => shape.id === 16);
const shape17 = shapes.find((shape) => shape.id === 17);
const shape18 = shapes.find((shape) => shape.id === 18);
const shape19 = shapes.find((shape) => shape.id === 19);
const shape20 = shapes.find((shape) => shape.id === 20);
const shape21 = shapes.find((shape) => shape.id === 21);
const shape22 = shapes.find((shape) => shape.id === 22);
const shape23 = shapes.find((shape) => shape.id === 23);
const shape24 = shapes.find((shape) => shape.id === 24);
const shape25 = shapes.find((shape) => shape.id === 25);
const shape26 = shapes.find((shape) => shape.id === 26);
const shape27 = shapes.find((shape) => shape.id === 27);
const shape28 = shapes.find((shape) => shape.id === 28);
const shape29 = shapes.find((shape) => shape.id === 29);
const shape30 = shapes.find((shape) => shape.id === 30);
const shape31 = shapes.find((shape) => shape.id === 31);
const shape32 = shapes.find((shape) => shape.id === 32);
const shape33 = shapes.find((shape) => shape.id === 33);
const shape34 = shapes.find((shape) => shape.id === 34);
const shape35 = shapes.find((shape) => shape.id === 35);
const shape36 = shapes.find((shape) => shape.id === 36);
const shape37 = shapes.find((shape) => shape.id === 37);
const shape38 = shapes.find((shape) => shape.id === 38);

// This part of the code could not survive draw loop.
    
/*  
var shapeGroupA = [shape1, shape2, shape3, shape4, shape5, shape6, shape7, shape8, shape9, shape11, shape12, shape13, shape14, shape15, shape16, shape17]; 
    
var shapeGroupB = [shape22, shape22, shape23, shape24, shape25, shape26, shape27, shape28, shape29, shape30, shape31, shape32, shape33, shape34, shape35, shape36, shape37, shape38];     

shapes = shapes.reduce((obj,shape)=>[
   obj[shape.id] = shape;
   return obj;
]);
    
for(let i=1;i<=18; i++){
   shapes[i].color = colPicA.color();
   shapes[i].color.setAlpha(170);
}
    
for(let i=22;i<=38; i++){
   shapes[i].color = colPicA.color();
   shapes[i].color.setAlpha(170);
}
*/

shape1.color = colPicA.color();
shape1.color.setAlpha(170);            
shape2.color = colPicA.color(); 
shape2.color.setAlpha(170);        
shape3.color = colPicA.color(); 
shape3.color.setAlpha(170);        
shape4.color = colPicA.color(); 
shape4.color.setAlpha(170);        
shape5.color = colPicA.color(); 
shape5.color.setAlpha(170);        
shape6.color = colPicA.color(); 
shape6.color.setAlpha(170);        
shape7.color = colPicA.color(); 
shape7.color.setAlpha(170);        
shape8.color = colPicA.color(); 
shape8.color.setAlpha(170); 
shape9.color = colPicA.color(); 
shape9.color.setAlpha(170);   
shape10.color = colPicA.color(); 
shape10.color.setAlpha(170);   
shape11.color = colPicA.color(); 
shape11.color.setAlpha(170);     
shape12.color = colPicA.color(); 
shape12.color.setAlpha(170);         
shape13.color = colPicA.color(); 
shape13.color.setAlpha(170);  
shape14.color = colPicA.color(); 
shape14.color.setAlpha(170);     
shape15.color = colPicA.color(); 
shape15.color.setAlpha(170);     
shape16.color = colPicA.color(); 
shape16.color.setAlpha(170);     
shape17.color = colPicA.color(); 
shape17.color.setAlpha(170);     
    
shape22.color = colPicB.color(); 
shape22.color.setAlpha(170); 
shape23.color = colPicB.color(); 
shape23.color.setAlpha(170);        
shape24.color = colPicB.color(); 
shape24.color.setAlpha(170);        
shape25.color = colPicB.color(); 
shape25.color.setAlpha(170);        
shape26.color = colPicB.color(); 
shape26.color.setAlpha(170);        
shape27.color = colPicB.color(); 
shape27.color.setAlpha(170);        
shape28.color = colPicB.color(); 
shape28.color.setAlpha(170); 
shape29.color = colPicB.color(); 
shape29.color.setAlpha(170);   
shape30.color = colPicB.color(); 
shape30.color.setAlpha(170);   
shape31.color = colPicB.color(); 
shape31.color.setAlpha(170);     
shape32.color = colPicB.color(); 
shape32.color.setAlpha(170);         
shape33.color = colPicB.color(); 
shape33.color.setAlpha(170);  
shape34.color = colPicB.color(); 
shape34.color.setAlpha(170);     
shape35.color = colPicB.color(); 
shape35.color.setAlpha(170);     
shape36.color = colPicB.color(); 
shape36.color.setAlpha(170);     
shape37.color = colPicB.color(); 
shape37.color.setAlpha(170);     
shape38.color = colPicB.color(); 
shape38.color.setAlpha(170);         
 
      
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

function changeColorRequest(){
  const data = {
    newColA: colPicA.color().toString('#rrggbb'), 
    newColB: colPicB.color().toString('#rrggbb')
  };
    console.log({data});
    colA= colPicA.color();
    colB= colPicB.color();
  socket.emit('colorChangeRequest', data);
}

function changeShapeColor({newColA, newColB}){
  colA = newColA;
  colB = newColB;
  console.log('Got new color', newColA, newColB);
  colPicA.value(colA);
  colPicB.value(colB);    
  }

function changeTextRequest(){
  const data = {
    newTxt: inputTxt.value()
  };
    console.log({data});
    txt = inputTxt.value();
  socket.emit('textChangeRequest', data);
}

function resetText(){
  const data = {
    newTxt: ""
  };
    console.log({data});
    txt = inputTxt.value();
  socket.emit('textChangeRequest', data);
}

function changeTextValue({newTxt}){
  txt = newTxt;
  console.log('Got new text', newTxt);
  inputTxt.value(txt);    
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
    
