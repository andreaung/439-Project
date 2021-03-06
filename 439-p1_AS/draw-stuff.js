/*Draw-stuff.js
Team AS - Andrea email; Sarah Nuno saritanu@csu.fullerton.edu
File Description: created a generate() and rule() function inorder to go through the grid and check three cells (previous, current, next)
at a time if they match any of the rules. The last function is the display() function which goes through the array and adds the 
corresponding color to the cell. 

*/

function CA() {
  //how think each cell will appear
  this.w = 10;
  // create a new array and fill it up with 0's
  this.cells = new Array(width/this.w);
  for (var i = 0; i < this.cells.length; i++) {
    this.cells[i] = 0;
  }
   // set the top row's 200th cell to state 1
  this.cells[this.cells.length/2] = 1;
  this.generation = 0;

    // ruleset array stores rule 45
    var ruleset = [0,0,1,0,1,1,0,1];

   // function generate will help generate the next cells
    this.generate = function() {
    // Create an empty array
    var nextgen = [];
	//fill the array with 0's
    for (var i = 0; i < this.cells.length; i++) {
      nextgen[i] = 0;
    }
    // Finds the next cells by checking the previous, current, next index in
	// the cells array
    for (var i = 1; i < this.cells.length-1; i++) {
      var left   = this.cells[i-1];   // Previous Cell
      var med     = this.cells[i];     // Current Cell
      var right  = this.cells[i+1];   // Next Cell
      nextgen[i] = rule(left, med, right); 
    }
    // Cells array copies the info from the nextgen array
    this.cells = nextgen;
    this.generation++;
  };

  // Matching the cells with the corresponding color
  this.display = function() {
  	for (var i = 0; i < this.cells.length; i++) {
  		if (this.cells[i] == 1) 
			fill(255);
  		else                    
			fill(0);
  		rect(i*this.w, this.generation*this.w, this.w, this.w);
  	}
  };

 
  // Checking if the three cells match any of the rules
  // will look through the ruleset array
  function rule (a, b, c) {
  	if (a == 1 && b == 1 && c == 1)	
		return ruleset[0];
    else if (a == 1 && b == 1 && c == 0) 
		return ruleset[1];
    else if (a == 1 && b == 0 && c == 1) 
		return ruleset[2];
    else if (a == 1 && b == 0 && c == 0) 
		return ruleset[3];
    else if (a == 0 && b == 1 && c == 1) 
		return ruleset[4];
    else if (a == 0 && b == 1 && c == 0) 
		return ruleset[5];
    else if (a == 0 && b == 0 && c == 1) 
		return ruleset[6];
    else if (a == 0 && b == 0 && c == 0) 
		return ruleset[7];
	else 
        return 0;
  };
}