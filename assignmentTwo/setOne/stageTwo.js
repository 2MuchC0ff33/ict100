/*
ASSIGNMENT Set 1

Set 1, Stage 2

Just make your way to the exit
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