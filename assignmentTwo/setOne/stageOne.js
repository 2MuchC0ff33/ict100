/*
ASSIGNMENT Set 1

Set 1, Stage 1

Just make your way to the exit
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