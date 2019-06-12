

var Box = document.querySelector("Box");
var BallNum = 0;
var Balls = [];

function Ball(id, x, y, vx, vy, color, size) {
	this.id = id;
 	this.x = x;
 	this.y = y;
  	this.vx = vx;
  	this.vy = vy;
  	this.color = color;
  	this.size = size;
}

function addBall(){

	Balls[BallNum] = new Ball("ball"+BallNum, 0,0,0,0,"blue",0);

	var newBall=document.createElement("div");
	newBall.setAttribute("class", "Ball");
	newBall.setAttribute("id", Balls[BallNum].id);
	newBall.setAttribute("left",Balls[BallNum].x);
	newBall.setAttribute("top",Balls[BallNum].y);
	document.getElementById("box").appendChild(newBall);
	BallNum++
}


setInterval(function drop(){
	if(document.getElementById("ball")!=null) {
	var ball=document.getElementById("ball");
	ball.style.position = "absolute";
	ball.style.left = ball.style.left+10 +'px';
	ball.style.top = ball.offsetHeight+0.1+'px';
	console.log(ball.style.left);
	}
},50)







/*function makeBlue() {
	document.getElementById("ball").style.backgroundColor = "blue";
}*/


