/*
ASSIGNMENT Set 1

Set 1, Stage 7

Remember, a green square before a t-junction tells you which way to turn. If there's no green square at a cross-roads, go straight across.
*/

// Add two sensors
addLineSensor(20, -8, 0, 255, 0) // sensor 0, green only
addLineSensor(20, 8, 0, 255, 0) // sensor 1, green only

while (true) {
  let l = readSensor(0) > 0.5 // left seeing light
  let r = readSensor(1) > 0.5 // right seeing light

  // 
  if (l && r) {
    forward(5)
  }
}