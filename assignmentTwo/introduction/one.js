/*
Wobble and Bias

Robots aren't perfectly accurate in their movements. To simulate this, on many of the mazes the robot has some in-built inaccuracy and bias.

You might ask it to turn right 90 degrees, and it turns out it turns 93 degrees one time and 86 degrees the next. As it moves forward or backward, the direction it is facing can also wobble slightly. Sometimes one wheel's motor is stronger than the other and it'll slowly veer off to one side. Your control program has to be robust to this. When the maze is reset, the robot's inaccuracy is re-randomised.

The example on the right should show you what we mean - we've set it to try heading towards the exit in a preprogrammed way, drawing a line behind it. If you reset it and re-run it, you'll see it doesn't always do very well. We're going to need to write a program to control the robot, not just give it a set of directions to go in.

Remember if you're doing this as an assignment, we mark it against what we see happen. Don't just regenerate the maze until you get a more accurate robot because it might be marked with a less accurate one.

Also Remember Your robot is expected to follow the course, not just get to the exit. Cutting across humps and ignoring roundabouts is not seen as success
*/

setColour("blue")
penDown()

forward(480)
right(90)
forward(120)
right(90)
forward(480)