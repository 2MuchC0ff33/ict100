/*
Rescue Zones

Sometimes, you will come across an orange area with no line. This is the chemical spill.

Inside the chemical spill, there may be green circles (survivors) in locations that move slightly with each reset of the maze.

Your robot should enter the orange zone, search for survivors and "rescue" them by painting a blue blob on the survivor. (setColour("blue") and penDown() are available on the turtle to do this. You'll then need to move forward a pixel to make it paint. Don't forget to penUp() afterwards.)

Once your robot has found a survivor, it should find the line out of the chemical spill to continue its journey. Try not to accidentally go back the way you came!

The example code we've given you demonstrates a simple search pattern for a survivor Again, it's not as sophisticated as what you will probably need. For example, the sample code forgets to keep looking for the exit afterwards. It's also a little susceptible to the problem that it can "look" at the edge of the survivor, reading some orange and some green pixels. In which case, because the red and green it sees are roughly equal, it decides it's neither part of the rescue zone nor the survivor.

Note The survivor is quite a dark green (darker than the turn signal green).

There is always exactly one survivor in each rescue zone, but rescue zones can vary in size.
*/


addLineSensor(20, 0, 255, 0, 0) // colour sensor - red component
addLineSensor(20, 0, 0, 255, 0) // colour sensor - non-red component

let foundSurvivor = false

function isOrange() {
  let r = readSensor(0)
  let g = readSensor(1)

  // orange is more red than green
  if (r > 0.4 && g < 0.9 * r) {
    return true
  } else {
    return false
  }
}

function isSurvivor() {
  let r = readSensor(0)
  let g = readSensor(1)
  console.log(`r is ${r} and g is ${g}`)

  // The survivor colour has a lot of green in it and not much red
  if (g > 0.4 && r < 0.9 * g) {
    return true
  } else {
    return false
  }
}

// bad - the sample isn't even following the line!
while (!isOrange()) {
  forward(5)
}
forward(20)
left(80)

// start searching for a survivor
let toggle = false
while (!foundSurvivor) {
   while (isOrange()) {
     forward(10)
   }
   if (isSurvivor()) {
     foundSurvivor = true
     forward(20)
     setColour("blue")
     penDown()
     forward(1)
     penUp()
     forward(10)
   } else {
     toggle = !toggle
     if (toggle) {
       right(160)
     } else {
       left(160)
     }
   }
}