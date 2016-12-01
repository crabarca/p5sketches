var angleSlider;
var depthSlider;

var treeHeight = 180 // altura que empieza el arbol

var color1 = '#42f450'  //verde
var color2 = '#4259f4'  //azul
var color3 = '#f71c00'  //rojo
var color4 = '#bdc605'  //amarillo

var colores = [color1, color2, color3, color4];

function setup(){
  createCanvas(windowWidth, windowHeight/1.2);
  angleSlider = createSlider(0,PI, PI/4, 0.001);
  depthSlider = createSlider(5, 90, 3, 2);
  //noLoop();
}

function draw(){
  background(51);
  angle = angleSlider.value();
  depth = depthSlider.value();
  //console.log(angle);
  //console.log(depth);

  translate(windowWidth/2, height);
  stroke(color4);
  branch(treeHeight);


  //stop();
}
function randomColor(){
  color = colores[Math.floor(Math.random()*colores.length)];
  return color;
}

function branch(len){
  line(0, 0 , 0, -len);
  translate(0, -len);
  if (len > depth ){
    push();  //salva el estado actual del canvas

    color = randomColor();
    rotate(angle);
    stroke(color);
    branch(len*0.67)

    pop();  //recupera el estado del push
    push();

    color = randomColor();
    rotate(-angle);
    stroke(color);
    branch(len*0.67)
    pop();
    // push();
    // rotate(-angle/2);
    // stroke(color3);
    // branch(len*0.)
    // pop();
  }
}
