// Modify the code you had before, so that you have a function called shape that lets you draw polygons with n sides of length d.
function shape() {
    let sides = 4;
    let angle = 90;
    let distance = 200;
    
    while (sides > 0) {
      forward(distance);
      right(angle);
      sides = sides - 1;
    }
}

penUp();
left(90);
forward(200);
penDown();
shape();
left(180);
shape();

// Try looping and drawing different shapes on top of each other with different thicknesses.
function triangle() {
    let sides = 3;
    let angle = 120;
    let distance = 150;
    
    while (sides > 0) {
      forward(distance);
      right(angle);
      sides = sides - 1;
    }
}

setColour("red");
setThickness("1");
triangle();
left(180);
triangle();