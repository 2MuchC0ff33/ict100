/*
ASSIGNMENT Set 2

Set 2, Stage 1

Remember, in Set 2, the robot is not perfectly accurate in its movements
*/

// Add three line sensors: two green line sensors and one junction sensor
// The first two line sensors are used to detect whether the robot is on a line.
// The third line sensor is used to detect whether the robot is at a junction.
addLineSensor(20, -6, 0, 255, 0); // green line sensor, left
addLineSensor(20, 6, 0, 255, 0); // green line sensor, right
addLineSensor(8, 8, 255, 0, 255); // junction sensor

// Add two stop sensors: one for detecting a red line and one for detecting a non-red line
// The first stop sensor is used to detect the exit.
// The second stop sensor is used to detect a wall.
addLineSensor(0, 0, 255, 0, 0); // stop sensor - red component
addLineSensor(0, 0, 0, 255, 255); // stop sensor - non-red component

// Initialize a variable to track whether the robot has reached the exit
let stop = false;

// Create a loop that will run until the robot reaches the exit
while (!stop) {

    // Read the values from the three line sensors
    let l = readSensor(0) > 0.5; // left line sensor
    let r = readSensor(1) > 0.5; // right line sensor
    let jr = readSensor(2) < 0.5; // junction sensor

    // Check if the robot has reached the exit
    stop = readSensor(3) > 0.5 && readSensor(4) < 0.4;

    // If the robot is on a line, move forward
    // The robot will move forward at a speed of 2.
    if (l && r) {
        forward(2);
    }

    // If the robot is only on the left line, turn right
    // The robot will turn right at a speed of 3 and then move forward at a speed of 1.
    else if (l && !r) {
        right(3);
        forward(1);
    }

    // If the robot is only on the right line, turn left
    // The robot will turn left at a speed of 2 and then move forward at a speed of 1.
    else if (!l && r) {
        left(2);
        forward(1);
    }

    // If the robot is not on a line and is at a junction, turn right and move forward
    // The robot will turn right at a speed of 5 and then move forward at a speed of 1.
    else {
        if (jr) {
            forward(1);
            right(5);
        } else {
            forward(1);
        }
    }
}