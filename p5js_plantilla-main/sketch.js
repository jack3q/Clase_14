var Pelota = {
  posicionX: 20,
  posicionY: 30,
  Radio: 20,
  velocidadX:0,
  velocidadY:0,
  color:["blue","red","black"],
 };



function setup() {
  createCanvas(400, 400);

}



function draw() {
  background(220);
  circle (Pelota.posicionX, Pelota.posicionY, Pelota.Radio);
  fill(Pelota.color[1]);
  Pelota.velocidadX = 3;
  Pelota.posicionX = Pelota.posicionX + Pelota.velocidadX;
}
