/*
ASSIGNMENT Set 1

Set 1, Stage 3

Just make your way to the exit
*/

// Add three line sensors: two green line sensors and one junction sensor
addLineSensor(20, -6, 0, 255, 0);
addLineSensor(20, 6, 0, 255, 0);
addLineSensor(8, 8, 255, 0, 255);

// Add two stop sensors: one for detecting a red line and one for detecting a non-red line
addLineSensor(0, 0, 255, 0, 0);
addLineSensor(0, 0, 0, 255, 255);

// Initialize a variable to track whether the robot has reached the exit
let stop = false;

// Create a loop that will run until the robot reaches the exit
while (!stop) {

    // Read the values from the three line sensors
    let l = readSensor(0) > 0.5;
    let r = readSensor(1) > 0.5;
    let jr = readSensor(2) < 0.5;

    // Check if the robot has reached the exit
    stop = readSensor(3) > 0.5 && readSensor(4) < 0.4;

    // If the robot is on a line, move forward
    if (l && r) {
        forward(2);
    }

    // If the robot is only on the left line, turn right
    else if (l && !r) {
        right(3);
        forward(1);
    }

    // If the robot is not on a line and is at a junction, turn right and move forward
    else {
        if (jr) {
            forward(1);
            right(5);
        } else {
            forward(1);
        }
    }
}
