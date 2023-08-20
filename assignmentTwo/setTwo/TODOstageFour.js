/*
ASSIGNMENT Set 2

Set 2, Stage 4

Remember, in Set 2, the robot is not perfectly accurate in its movements
*/

// Add five line sensors: two green line sensors, two junction sensors, and one stop sensor
addLineSensor(20, -6, 0, 255, 0) // line sensor, green only
addLineSensor(20, 6, 0, 255, 0) // line sensor, green only
addLineSensor(8, 8, 255, 0, 255) // junction sensor, a little closer and wider
addLineSensor(8, -8, 255, 0, 255) // junction sensor, a little closer and wider
addLineSensor(0, 0, 0, 0, 0) // stop sensor - black component

// Add two stop sensors: one for detecting a red line and one for detecting a non-red line
addLineSensor(0, 0, 255, 0, 0) // stop sensor - red component
addLineSensor(0, 0, 0, 255, 255) // stop sensor - non-red component

// Initialize a variable to track whether the robot has reached the exit
let stop = false;

// Create a loop that will run until the robot reaches the exit
while (!stop) {

    // Read the values from the five line sensors
    let l = readSensor(0) > 0.5; // left line sensor
    let r = readSensor(1) > 0.5; // right line sensor
    let jl = readSensor(2) < 0.5; // junction sensor, left
    let jr = readSensor(3) < 0.5; // junction sensor, right
    let s = readSensor(4) < 0.5; // stop sensor

    // Check if the robot has reached the exit
    stop = readSensor(5) > 0.5 && readSensor(6) < 0.4;

        // If the robot is on a line, move forward
    if (l && r) {
        forward(2);
    }
    
    // If the robot is only on the left line, turn right
    else if (l && !r) {
        right(3);
        forward(1);
    }
    
    // If the robot is only on the right line, turn left
    else if (!l && r) {
        left(3);
        forward(1);
    }

    // If the robot is not on a line and is at a junction, turn right and move forward
    else {
        if (jl) {
            forward(1);
            right(5);
        } else if (jr) {
            forward(1);
            left(5);
        } else {
            forward(1);
        }
    }
}