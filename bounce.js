

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

	Balls[BallNum] = new Ball("ball"+BallNum, 0,0,0.5,1,"blue",0);

	var newBall=document.createElement("div");
	newBall.setAttribute("class", "Ball");
	newBall.setAttribute("id", Balls[BallNum].id);
	newBall.setAttribute("left",Balls[BallNum].x);
	newBall.setAttribute("top",Balls[BallNum].y);
	document.getElementById("box").appendChild(newBall);
	BallNum++;
}


function drop(index){
	var ball=document.getElementById(Balls[index].id);
	ball.style.position = "absolute";
	Balls[index].x = Balls[index].x + Balls[index].vx;
	Balls[index].y = Balls[index].y + Balls[index].vy;
	ball.style.left = Balls[index].x+'px';
	ball.style.top = Balls[index].y+'px';
}


setInterval( function(){	
	for( var i=0; i<Balls.length; i++){
		drop(i);
	}
},1000/60);




/*function makeBlue() {
	document.getElementById("ball").style.backgroundColor = "blue";
}*/


