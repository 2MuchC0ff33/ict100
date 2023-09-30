/*

MicroRat

These challenges are loosely based on MicroMouse, a robotics challenge that has been running since the late 1970s, and the Robotic Bilby Competition, which was a simplified challenge for secondary schools in Australia.

In the challenge, your robot has to find its way to the middle of a maze, then go back to the start and race to the middle. There's no line to follow - instead the maze has floor you can roll over, and walls you can bump into.

The challenge is again designed so you'll talk a lot about strategy. Don't share code, but the learning experience is designed around talking to each other and asking for help. It is a difficult challenge, not one you're expected to blast out in an evening.

The challenge is also designed so you pick up points for what your robot can do. Even getting around the first bend scores some points, but we're going to try to get you much further through the challenge.
Meet Bumper

In this challenge, we're going to bring things a little closer to the robot.

    The robot is physically simulated. It has mass and inertia. The motors inside Bumper apply forces to it. There's no simulated inaccuracy, but the weight and momentum of the robot cause their own difficulties.

    To make up for Bumper being harder to steer, we've given it perfectly accurate position sensors. It has a compass to tell you where it's heading and rat-GPS that can tell you its position and velocity.

    We've made the robot a ball, a little like Sphero. It has a couple of wheels and motors (left and right) inside the ball that can make it move and turn. It doesn't have any line sensors or range sensors - just a "bump" sensor for when it has bumped into something. We know where we are; we're going to find the walls by bumping into them.

    It also has a light that you can change the colour of. (It starts out orange.)

There's a little code on the right to make it bounce back and forth off the walls, but that's just to illustrate that the walls are solid.

We're going to have a lot to show you before you can get this little guy solving mazes...

In this assignment, you will write code to control a robot in a programmable game-like environment. The challenge for this assignment is based on Micromouse, an international robotics competition that has been running for forty years.

Your simulated robot (mouse) is placed in a maze that is defined by walls rather than a floor. It cannot see over the walls, but relies on range sensors to know how far it is from the walls.

Your robot needs to have two modes. First, it must explore (and internally map) the maze. Then, it must go back to the start of the maze and race towards the middle.

The range sensors are not perfectly accurate, and the wheels will slip slightly when the robot turns. 

Marking: 

This is a hard challenge for a first programming unit, so the marks are based on achieving certain goals:

    The mouse moves at all... 1 points
    It makes it around the first corner... 1 points
    It makes it around the second corner... 1 points
    It can reliably move around the maze (it continues to move around the maze without ending up stuck in corners or walls)... 2
    It finds the middle in a reasonable amount of time... 2
    After it finds the middle, it successfully returns to the start (appeared to know it was in the middle)... 1.5
    It then runs quickly to the centre of the maze  (appeared to have mapped the maze)... 1.5

In the challenge levels, you need to program Bumper to map and solve the maze, go back to the start, and then race to the middle again.

So it's more visible what Bumper is doing:

    When Bumper is exploring and mapping the maze, set the tail-light blue
    When Bumper is returning to the start square, set it red
    When Bumper is racing to the middle, set it green

There are a few maps for you to try your program on. You should use the same program for Bumper, we've just given you a few different mazes to try it out on.

Note, though, that the score isn't dependent on how many mazes you can solve, it's based on how your robot performs in one maze. (It picks up points for moving, turning corners, finding its way to the middle, etc.) We just don't tell you which one we'll try it out in.

One more thing: You're going to need to know how Bumper can find out where the goal is. The pixel coordinates of the goal can be found with getGoalX() and getGoalY(), but you just need to get Bumper into the right tile.

The tile index of that can be found with

let goalTileX = Math.floor(getGoalX() / 64)
let goalTileY = Math.floor(getGoalY() / 64)

(Take the pixel coordinates, divide by the fact tiles are 64 pixels wide, and round down because we were given the coordinate of the middle of the square.)

Or, shortcut: it's always in tile (5, 5)

getX = undefined

getY = undefined

getGoalX = undefined

getGoalY = undefined

mazeColumnCount = undefined

mazeRowCount = undefined

getHeading = undefined

setLeftPower = undefined

setRightPower = undefined

getAngularVelocity = undefined

getVelocityX = undefined

getVelocityY = undefined

isCollisionDetected = undefined

clearCollision = undefined

setLightColour = undefined

setTickRate = undefined

*/

/*

Make bumper move forward
setLeftPower(1)
setRightPower(1)

*/

// now we are able to get bumper to move forward, we need to check if it is hitting a wall, so we can println "i hit a wall" if it does
// we can do this by setting the left and right power to 1 to go forward and using the isCollisionDetected function we can check if it is hitting a wall
// and then we use the println function to print to the console "i hit a wall" if it is hitting a wall

