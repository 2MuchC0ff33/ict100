/*
ASSIGNMENT Set 1

Set 1, Stage 4

Remember, a green square before a t-junction tells you which way to turn
*/

// the robot has to travel forward along a black line
addLineSensor(20, -6, 0, 255, 0) // line sensor, green only
addLineSensor(20, 6, 0, 255, 0) // line sensor, green only
addLineSensor(8, 8, 255, 0, 255) // junction sensor, a little closer and wider
addLineSensor(8, -8, 255, 0, 255) // junction sensor, a little closer and wider

// the robot will continue travelling forward until it reaches a t-junction that is black in colour
addLineSensor(0, 0, 0, 0, 0) // stop sensor - black component
let stop = false

// the first t-junction has a green square before it
// the green square is on the right side of the black line when using the direction of travel as a reference
// when the robot senses the green square, it will turn right at the t-junction
// the robot will continue travelling forward, following along the black line
// the robot will continue travelling forward until it reaches a second t-junction that is black in colour
// the second t-junction has a green square before it
// the green square is on the left side of the black line when using the direction of travel as a reference
// when the robot senses the green square, it will turn left at the t-junction
// the robot will continue travelling forward, following along the black line
// the robot will continue travelling forward until it reaches a red rectangle
// the robot will stop when it senses the red rectangle
while (!stop) {
    let l = readSensor(0) > 0.5
    let r = readSensor(1) > 0.5
    let jr = readSensor(2) < 0.5 // if this goes dark, turn right
    stop = readSensor(3) > 0.5 && readSensor(4) < 0.4
    console.log(stop)
    if (l && r) {
        forward(2)
    } else if (l && !r) {
        right(3)
        forward(1)
    } else if (!l && r) {
        left(2)
        forward(1)
    } else {
        if (jr) {
        forward(1)
        right(5)
        } else {
        forward(1)
        left(5)
        }
    }
}

---------------------------------------------------------------------------------------------------------------------------------------------

/*
The robot includes line and junction sensors with a variety of parameters, including position 
and colour components. These sensors detect ground lines and coloured sections, which allows 
the robot to navigate.

addLineSensor(20, -6, 0, 255, 0) // line sensor, green only
addLineSensor(20, 6, 0, 255, 0) // line sensor, green only
addLineSensor(8, 8, 255, 0, 255) // junction sensor, a little closer and wider
addLineSensor(8, -8, 255, 0, 255) // junction sensor, a little closer and wider


Two more stop sensors detect specific colours or colour combinations, with one stopping when 
strong red components are detected and the other stopping when non-red components are detected.

addLineSensor(0, 0, 255, 0, 0) // stop sensor - red component
addLineSensor(0, 0, 0, 255, 255) // stop sensor - non-red component


Set boolean'stop' to false to control the main loop.

let stop = false


The main loop of the programme begins at this point and continues as long as the'stop' variable 
is false.

while (!stop) {
    
    The first and second line sensors' values are read, and their results are stored as boolean 
    values in the 'l' and 'r' variables, indicating whether line detection (value > 0.5) or not 
    (value = 0.5).
    
    let l = readSensor(0) > 0.5
    let r = readSensor(1) > 0.5
    
    The 'jr' variable in the robot stores the value of the junction sensor as a boolean, 
    indicating whether the robot should turn right if the sensor goes dark (value 0.5).
    
    let jr = readSensor(2) < 0.5 // if this goes dark, turn right
    
    The values of the two stop sensors are read, and the'stop' variable is updated based on them. 
    If the first stop sensor detects a strong red colour (> 0.5) and the second detects a colour 
    less than a threshold (0.4), the'stop' parameter is set to true. The status'stop' is recorded 
    in the console.
    
    stop = readSensor(3) > 0.5 && readSensor(4) < 0.4
    console.log(stop)
    
    This section contains the logic for the robot's movement based on sensor readings. It's a 
    series of if-else statements that dictate what action the robot should take depending on the 
    sensor readings.
    
    if (l && r) {
        forward(2) //When the robot's left and right line sensors detect a line, it moves forwards.
    } else if (l && !r) {
        right(3)
        forward(1) //When the left line sensor detects a line, the robot turns right and moves forwards.
    } else if (!l && r) {
        left(2)
        forward(1) //If the right line sensor detects a line, the robot turns left and moves forwards.
    } else {
        if (jr) {
        forward(1)
        right(5) //If neither line sensor detects a line and the junction sensor indicates a right turn (jr true), the robot advances.
        } else {
        forward(1) //If neither line sensor detects a line nor the junction sensor indicates a right turn, the robot advances.
        }
    }
}
*/