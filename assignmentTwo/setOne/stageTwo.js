/*
ASSIGNMENT Set 1

Set 1, Stage 2

Just make your way to the exit
*/

addLineSensor(20, -8, 0, 255, 0)
addLineSensor(20, 8, 0, 255, 0)

while (true) {
  let l = readSensor(0) > 0.5
  let r = readSensor(1) > 0.5

  if (l && r) {
    forward(5)
  }
}