/*ca.js
Team AS - Andrea email; Sarah Nuno saritanu@csu.fullerton.edu
File Description: created functions setup() and draw() to help create and display the 400x400 grid.
*/


var cellAuto;

//will create the 400x400 grid
function setup() 
{
  createCanvas(400, 400);
  background(255);
  cellAuto = new CA();
}

//will display and generate the cells
function draw() 
{
  cellAuto.display();
  cellAuto.generate();
}

	//run the above functions
	setup();
	draw();
