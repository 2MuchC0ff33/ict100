/*
Rescue Line

These exercises are loosely inspired by RoboCup Junior's Rescue Line competition. We've changed the rules, however, so we can run our challenges using a modified Turtle Graphics Turtle. The intent for this challenge is that you use the same control program to solve all the challenges, but you develop it by working from challenge to challenge adapting and improving your program.

The theme is there has been a chemical spill, and your robot has been sent in to locate survivors. It has to follow the path laid out by the line (which sometimes has breaks in it) and in some stages, it'll find a spill area to look for survivors in.

Remember the challenges do not save or mark your work. Cut and paste your code to and from a text editor.
Sensors

addLineSensor(x, y, r, g, b) adds a sensor to the turtle. x and y are where to put the sensor on the turtle. +x is towards the front of the turtle, and +y is towards the right of the turtle.

r, g, and b are how sensitive the sensor is to the red, green, and blue colour values underneath it. These are relative to each other. So, if r is twice g, then the sensor will be twice as sensitive to the red channel as it is to the green channel. The equation it uses to come to a result is:

((r * red / 255) + (g * green / 255) + (b * blue / 255)) / (r + g + b).

If you wish to read a single colour's value, put a sensor that is only sensitive to that colour. e.g. addLineSensor(50, 0, 255, 0, 0) would add a sensor that is only sensitive to red.

readSensor(i) will give you a sensor's reading. The sensors are numbered in the order you add them, starting at 0. Each sensor looks at a little region of the canvas - a block about 5 pixels on each side - and averages the colour values of the pixels to work out its reading. It then returns a value between 0 and 1 depending on how much light it saw.

Usually, you are limited to adding a maximum of 16 sensors.
Example

Mazes start at the green line and finish at the red line. There will be obstacles along the way. The code example on the right assumes a perfectly accurate robot. As we're about to see, that's not what you'll often be using.
*/


addLineSensor(20, -8, 0, 255, 0) // sensor 0, green only
addLineSensor(20, 8, 0, 255, 0) // sensor 1, green only

while (true) {
  let l = readSensor(0) > 0.5 // left seeing light
  let r = readSensor(1) > 0.5 // right seeing light

  if (l && r) {
    forward(5)
  }
}