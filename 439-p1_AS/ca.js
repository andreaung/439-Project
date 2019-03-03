

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
