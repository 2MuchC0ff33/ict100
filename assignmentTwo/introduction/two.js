/*
T-Junctions

Sometimes, you will come to a junction.

If, just before the junction, there is a green marking on the maze, your robot must turn in that direction. For example, the robot on the right will encounter three junctions (two on the roundabout). Each time, it must take a green-marked exit.

If there is no green marking at a cross-road, your robot should go straight ahead.

You can detect the marking with a sensor made sensitive to green, and a variable. You will probably need to make your code more sophisticated - this example has the robot perfectly accurate and no zigzags. Note also that the line can have breaks in it, for instance the dashed segment.

It is, however, an example of detecting the colour at two points: the green junction check and the check for red-but-not-green to see if we're on the stop marker.

In fact, I recommend putting a colour stop sensor a little way in front of the robot. That way, later, you'll also be able to use it to detect orange and green colours, which you'll need when looking for survivors
*/


addLineSensor(20, -6, 0, 255, 0) // line sensor, green only
addLineSensor(20, 6, 0, 255, 0) // line sensor, green only
addLineSensor(8, 8, 255, 0, 255) // junction sensor, a little closer and wider

addLineSensor(0, 0, 255, 0, 0) // stop sensor - red component
addLineSensor(0, 0, 0, 255, 255) // stop sensor - non-red component

let stop = false

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
    }
  }
}