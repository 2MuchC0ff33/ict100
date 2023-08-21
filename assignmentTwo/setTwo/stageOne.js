/*
ASSIGNMENT Set 2

Set 2, Stage 1

Remember, in Set 2, the robot is not perfectly accurate in its movements
*/

addLineSensor(20, -8, 0, 255, 0) // sensor 0
addLineSensor(20, 8, 0, 255, 0) // sensor 1

while (true) {
  let l = readSensor(0) > 0.5 // left seeing light
  let r = readSensor(1) > 0.5 // right seeing light

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
}