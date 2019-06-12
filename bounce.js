
//Variables
var Box = document.getElementById("box");
var BallNum = 0;
var Balls = [];
var GRAVITY=.05;
var BallColor= "blue";
var xVel = 1;
var yVel = 1;
var BallSize = 10;
var counter = 0;

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
	Balls[BallNum] = new Ball("ball"+BallNum, 0,0,xVel,yVel,BallColor,BallSize);

	//Set attributes of new ball div
	var newBall=document.createElement("div");
	newBall.setAttribute("class", "Ball");
	newBall.setAttribute("id", Balls[BallNum].id);
	newBall.setAttribute("left",Balls[BallNum].x);
	newBall.setAttribute("top",Balls[BallNum].y);

	//Add ball to box
	document.getElementById("box").appendChild(newBall);

	//Set size and color of ball
	document.getElementById(Balls[BallNum].id).style.height = Balls[BallNum].size +"vh";
	document.getElementById(Balls[BallNum].id).style.width = Balls[BallNum].size +"vh";
	document.getElementById(Balls[BallNum].id).style.backgroundColor = Balls[BallNum].color;

	//increment ball index for IDs
	BallNum++;
}

//changes the x and y position of ball at given index based on the x and y velocity of 
//the ball at that index.
function drop(index){
	//counter++;
	var ball=document.getElementById(Balls[index].id);
	ball.style.position = "absolute";
	Balls[index].vy = Balls[index].vy + GRAVITY;
	Balls[index].x = Balls[index].x + Balls[index].vx;
	Balls[index].y = Balls[index].y + Balls[index].vy;
	ball.style.left = Balls[index].x+'px';
	ball.style.top = Balls[index].y+'px';
	/*console.log(Box.offsetWidth);
	console.log(Box.offsetHeight);*/
}


//Calls drop() function on each element of the Balls Array 60 times per second
setInterval( function(){	
	for( var i=0; i<Balls.length; i++){
		drop(i);
	}
},1000/60);



/*function makeBlue() {
	document.getElementById("ball").style.backgroundColor = "blue";
}*/


