var ball = {
  x : 0,
  y : 0,
  tam : -200,
  R : 70,
  G : 150,
  B : 200,
};


function setup() {
  createCanvas(400, 400);
}


function draw() {
  //background(50);
  
  if(mouseIsPressed){
  fill(ball.R,ball.G,ball.B);
  ball.R = random(1,255);
  ball.G = random(1,255);
  ball.B = random(1,255);
  
  ball.x = random(0,400);
  //ball.y = random(0,400);
  
  ellipse(ball.x,ball.y,ball.tam,ball.tam);
  //ellipse(ball.y,ball.x,ball.tam,ball.tam);
  //console.log(ball.x,ball.y);
  ball.x++;
  ball.y++;
  ball.tam++;
  
    fill(ball.R,ball.G,ball.B);
  ball.R = random(1,255);
  ball.G = random(1,255);
  ball.B = random(1,255);
  
  ball.x = random(0,400);
  //ball.y = random(0,400);
  
}
else{
   fill(ball.R,ball.G,ball.B);
  ball.R = random(1,255);
  ball.G = random(1,255);
  ball.B = random(1,255);
  
  ball.x = random(0,400);
  //ball.y = random(0,400);
  
  //ellipse(ball.x,ball.y,ball.tam,ball.tam);
  ellipse(ball.y,ball.x,ball.tam,ball.tam);
  //console.log(ball.x,ball.y);
  ball.x++;
  ball.y++;
  ball.tam++;
}
  
  //strokeWeight(1);
  //stroke(ball.R,ball.G,ball.B);
  //line(ball.x,ball.y,ball.tam,ball.tam);
  //ball.x++;
  //ball.y++;
  //ball.tam++;
}
