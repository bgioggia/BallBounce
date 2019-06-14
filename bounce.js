
//Variables
var Box = document.getElementById("box");
var BallNum = 0;
var Balls = [];
var GRAVITY=.05;
var BallColor= "blue";
var xVel = 0;
var yVel = 0;
var BallSize = 100;
var counter = 0;
var BoxWidth = 70;
var BoxHeight = 70;

//Ball object constructor
/*
*
* id: a unique id in the format Ball0, Ball1, Ball2, etc.
* x: The x coordinate position of the ball
* y: The y coordinate position of the ball
* vx: The rate at which the x position will change on tick for the ball
* vy: The rate at which the y position will change on tick for the ball
* 
*/
function Ball(id, x, y, vx, vy, color, size) {
	this.id = id;
 	this.x = x;
 	this.y = y;
  	this.vx = vx;
  	this.vy = vy;
  	this.color = color;
  	this.size = size;
}

//Creates a new ball object then adds it to the Balls Array at the BallNum Index.
//Then creates a new Div element of class "Ball", and a unique id matching the BallNum
//Assigns values from the ball object to this div. 
function addBall(){

	//create new ball object and add to Balls Array
	Balls[BallNum] = new Ball("ball"+BallNum, event.layerX-BallSize/2, event.layerY-BallSize/2, xVel, yVel, BallColor, BallSize);

	//Set attributes of new ball div
	var newBall=document.createElement("div");
	newBall.setAttribute("class", "Ball");
	newBall.setAttribute("id", Balls[BallNum].id);
	newBall.setAttribute("onclick", "addBall()");
	//newBall.setAttribute("left",Balls[BallNum].x + "vw");
	//newBall.setAttribute("top",Balls[BallNum].y);

	//Add ball to box
	document.getElementById("box").appendChild(newBall);

	//Set size and color of ball
	document.getElementById(Balls[BallNum].id).style.height = Balls[BallNum].size +"px";
	document.getElementById(Balls[BallNum].id).style.width = Balls[BallNum].size +"px";
	document.getElementById(Balls[BallNum].id).style.backgroundColor = Balls[BallNum].color;



	//increment ball index for IDs
	BallNum++;
}

//changes the x and y position of ball at given index based on the x and y velocity of 
//the ball at that index.
function drop(index){
	var ball=document.getElementById(Balls[index].id);

	//display is set to block because it starts out as none
	ball.style.display = "block";



	//collision with ceiling
	 if(Balls[index].y <= 0) {
		Balls[index].vy = Math.abs(Balls[index].vy) ;
		Balls[index].x = Balls[index].x + Balls[index].vx;
		Balls[index].y = Balls[index].y + Balls[index].vy;
		ball.style.left = Balls[index].x+'px';
		ball.style.top = Balls[index].y+'px';
	}

	//collision with right wall
	 if(Balls[index].x >= (Box.offsetWidth - document.getElementById(Balls[index].id).offsetWidth)) {
		
		//if the horizontal velocity is 0, set the horizontal velocity to .5
		if(Balls[index].vx == 0)
			Balls[index].vx = .5
		else
			Balls[index].vx = Math.abs(Balls[index].vx) *-1;

		Balls[index].x = Balls[index].x + Balls[index].vx;
		Balls[index].y = Balls[index].y + Balls[index].vy;
		ball.style.left = Balls[index].x+'px';
		ball.style.top = Balls[index].y+'px';
	}

	//colission with left wall
		 if(Balls[index].x <= 0) {

		//if the horizontal velocity is 0, set the horizontal velocity to -.5
		if(Balls[index].vx == 0)
			Balls[index].vx = -.5;
		else	
			Balls[index].vx = Math.abs(Balls[index].vx) *-1;

		Balls[index].vx = Balls[index].vx * -1;
		Balls[index].x = Balls[index].x + Balls[index].vx;
		Balls[index].y = Balls[index].y + Balls[index].vy;
		ball.style.left = Balls[index].x+'px';
		ball.style.top = Balls[index].y+'px';
	}

	//collision with floor
	if(Balls[index].y >= (Box.offsetHeight - document.getElementById(Balls[index].id).offsetHeight)) {
		if(Balls[index].vy == 0)
			Balls[index].vy = -.5;
		else	
			Balls[index].vy = Math.abs(Balls[index].vy) *-1;
		Balls[index].x = Balls[index].x + Balls[index].vx;
		Balls[index].y = Balls[index].y + Balls[index].vy;
		ball.style.left = Balls[index].x+'px';
		ball.style.top = Balls[index].y+'px';
	}

	else{
		//console.log(Balls[index].vx)
		console.log(Balls[index].x)
	Balls[index].vy = Balls[index].vy + GRAVITY;
	Balls[index].x = Balls[index].x + Balls[index].vx;
	Balls[index].y = Balls[index].y + Balls[index].vy;
	ball.style.left = Balls[index].x+'px';
	ball.style.top = Balls[index].y+'px';
	/*console.log(Box.offsetWidth);
	console.log(Box.offsetHeight);*/
	}
}

//Calls drop() function on each element of the Balls Array 60 times per second
setInterval( function(){	
	BallSize = document.getElementById("SizeSlider").value;
	xVel = (document.getElementById("VelocitySlider").value *.1);//.toFixed(1);
	GRAVITY = (document.getElementById("GravitySlider").value *.01);

	document.getElementById("box").style.height = BoxHeight + "vh";
	document.getElementById("box").style.width = BoxWidth +"vw";
	for( var i=0; i<Balls.length; i++){
		drop(i);
	}
},1000/100);



function changeColor(color) {
	document.getElementById(BallColor).style.borderRadius = 0 + "%";
	BallColor=color;
	document.getElementById(color).style.borderRadius = 50 + "%";
}


