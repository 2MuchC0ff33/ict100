// Define your maze representation and initialize it
const maze = [
    // Your maze layout (1s for walls, 0s for open paths)
];

// Initialize robot's position and direction
let x = startX; // Initial X position
let y = startY; // Initial Y position
let direction = "up"; // Initial direction (you can start with any)

// Create a stack to keep track of the robot's path
const pathStack = [];

// Define a function to move the robot
function moveRobot() {
    // Implement logic to move the robot based on the current direction
    function turnRobot(direction) {
    if (direction === "clockwise") {
        setLeftPower(1);
        setRightPower(-1);
    } else if (direction === "counter_clockwise") {
        setLeftPower(-1);
        setRightPower(1);
    }
  }
  
  function moveRobot(direction) {
    if (direction === "up") {
        setLeftPower(1);
        setRightPower(1);
    } else if (direction === "down") {
        setLeftPower(-1);
        setRightPower(-1);
    } else if (direction === "left") {
        setLeftPower(-1);
        setRightPower(1);
    } else if (direction === "right") {
        setLeftPower(1);
        setRightPower(-1);
    }
  }
  
  function reachGoal() {
    setLeftPower(0);
    setRightPower(0);
    setLightColour("green");
    println("Goal reached!");
  }
  
  function turnTo(angle) {
    const epsilon = 0.01;
  
    let delta = 0;
    do {
        delta = angle - getHeading();
        if (Math.abs(delta) > epsilon) {
            let v = Math.min(1, Math.abs(delta));
            if (delta > 0) {
                setLeftPower(v);
                setRightPower(-v);
            } else {
                setLeftPower(-v);
                setRightPower(v);
            }
        } else {
            setLeftPower(0);
            setRightPower(0);
        }
    } while (Math.abs(delta) > epsilon || Math.abs(getAngularVelocity()) > 0.01);
  }
  
  function moveForward(distance) {
    const epsilon = 0.01;
    let x = getX();
    let y = getY();
    do {
        setLeftPower(1);
        setRightPower(1);
        x = getX();
        y = getY();
    } while (Math.sqrt(Math.pow(x - getX(), 2) + Math.pow(y - getY(), 2)) < distance - epsilon);
    setLeftPower(0);
    setRightPower(0);
  }
  
  function moveRight(distance) {
    const epsilon = 0.01;
    let x = getX();
    let y = getY();
    do {
        setLeftPower(1);
        setRightPower(1);
        x = getX();
        y = getY();
    } while (Math.sqrt(Math.pow(x - getX(), 2) + Math.pow(y - getY(), 2)) < distance - epsilon);
    setLeftPower(0);
    setRightPower(0);
  }
  
  function moveLeft(distance) {
    const epsilon = 0.01;
    let x = getX();
    let y = getY();
    do {
        setLeftPower(1);
        setRightPower(1);
        x = getX();
        y = getY();
    } while (Math.sqrt(Math.pow(x - getX(), 2) + Math.pow(y - getY(), 2)) < distance - epsilon);
    setLeftPower(0);
    setRightPower(0);
  }
  
  function moveBackward(distance) {
    const epsilon = 0.01;
    let x = getX();
    let y = getY();
    do {
        setLeftPower(1);
        setRightPower(1);
        x = getX();
        y = getY();
    } while (Math.sqrt(Math.pow(x - getX(), 2) + Math.pow(y - getY(), 2)) < distance - epsilon);
    setLeftPower(0);
    setRightPower(0);
  }

    function moveRobotToGoal() {
    // Get the current position of Bumper
    let currentX = getX();
    let currentY = getY();
    
    // Get the goal position in tile coordinates
    let goalTileX = getGoalTileX();
    let goalTileY = getGoalTileY();
    
    // Calculate the target pixel coordinates at the center of the goal tile
    let targetX = (goalTileX + 0.5) * 64; // Assuming tiles are 64 pixels wide
    let targetY = (goalTileY + 0.5) * 64; // Assuming tiles are 64 pixels high
    
    // Calculate the angle to turn towards the target
    let angleToTarget = Math.atan2(targetY - currentY, targetX - currentX);
    
    // Turn Bumper to face the target
    turnTo(angleToTarget);
    
    // Calculate the distance to the target
    let distanceToTarget = Math.sqrt(Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2));
    
    // Move Bumper forward to reach the target
    moveForward(distanceToTarget);
    
    // Bumper has reached the goal, change the light color to green and print a message
    setLightColour("green");
    println("Goal reached!");
  }
    // Check if the move is valid (not into a wall or not out of bounds)
    function isValidMove() {
        if (direction === "up") {
            if (maze[y - 1][x] === 0) {
                return true;
            }
        }
        if (direction === "down") {
            if (maze[y + 1][x] === 0) {
                return true;
            }
        }
        if (direction === "left") {
            if (maze[y][x - 1] === 0) {
                return true;
            }
        }
        if (direction === "right") {
            if (maze[y][x + 1] === 0) {
                return true;
            }
        }
        return false;
    }
    // If the move is valid, update the robot's position
    function updatePosition() {
        if (direction === "up") {
            y--;
        }
        if (direction === "down") {
            y++;
        }
        if (direction === "left") {
            x--;
        }
        if (direction === "right") {
            x++;
        }
    }
    // If not, backtrack by popping the pathStack and setting the robot's position to the popped position
    function backtrack() {
        const lastPosition = pathStack.pop();
        if (lastPosition) {
            x = lastPosition.x;
            y = lastPosition.y;
        }
    }
    // If the move was successful, push the current position onto the pathStack
    function updatePathStack() {
        pathStack.push({ x, y });
    }
    // Move the robot forward
    function moveForward() {
        if (direction === "up") {
            moveRobot("up");
        }
        if (direction === "down") {
            moveRobot("down");
        }
        if (direction === "left") {
            moveRobot("left");
        }
        if (direction === "right") {
            moveRobot("right");
        }
    }
    // Turn the robot clockwise
    function turnClockwise() {
        turnRobot("clockwise");
    }
    // Turn the robot counter-clockwise
    function turnCounterClockwise() {
        turnRobot("counter_clockwise");
    }
    // Check if the robot has reached the goal
    function isGoalReached() {
        if (x === goalX && y === goalY) {
            return true;
        }
        return false;
    }
    // Check if the robot has hit a wall
    function isCollisionDetected() {
        if (direction === "up") {
            if (maze[y - 1][x] === 1) {
                return true;
            }
        }
        if (direction === "down") {
            if (maze[y + 1][x] === 1) {
                return true;
            }
        }
        if (direction === "left") {
            if (maze[y][x - 1] === 1) {
                return true;
            }
        }
        if (direction === "right") {
            if (maze[y][x + 1] === 1) {
                return true;
            }
        }
        return false;
    }
    // Handle collision by turning around 180 degrees
    function handleCollision() {
        if (direction === "up") direction = "down";
        else if (direction === "down") direction = "up";
        else if (direction === "left") direction = "right";
        else if (direction === "right") direction = "left";
    }
}

// Main exploration loop
while (!(x === goalX && y === goalY)) { // Continue until the goal is reached
    moveRobot();
    if (isCollisionDetected()) {
        // Handle collision by turning around 180 degrees
        if (direction === "up") direction = "down";
        else if (direction === "down") direction = "up";
        else if (direction === "left") direction = "right";
        else if (direction === "right") direction = "left";
        // Backtrack by popping the pathStack and setting the robot's position to the popped position
        const lastPosition = pathStack.pop();
        if (lastPosition) {
            x = lastPosition.x;
            y = lastPosition.y;
        }
    } else {
        // If the move was successful, push the current position onto the pathStack
        pathStack.push({ x, y });
    }
}



// Turning function that I can use to navigate Bumper in the maze
// Need a loop to stop Bumper from constantly turning, turn direction and go forward
function turnTo(angle) {
    const epsilon = 0.01;
  
    let delta = 0;
    do {
      delta = angle - getHeading();
      if (Math.abs(delta) > epsilon) {
        let v = Math.min(1, Math.abs(delta));
        if (delta > 0) {
          setLeftPower(v);
          setRightPower(-v);
        } else {
          setLeftPower(-v);
          setRightPower(v);
        }
      } else {
        setLeftPower(0);
        setRightPower(0);
      }
    } while (Math.abs(delta) > epsilon || Math.abs(getAngularVelocity()) > 0.01);
}

// Specify the angle in radians, for example, turning 90 degrees (pi/2 radians):
turnTo(Math.PI / 2);

// Move forward for a certain distance (adjust 'distance' as needed):
const distance = 7.0917;
const epsilon = 0.01;
let x = getX();
let y = getY();
do {
    setLeftPower(1);
    setRightPower(1);
    x = getX();
    y = getY();
} while (Math.sqrt(Math.pow(x - getX(), 2) + Math.pow(y - getY(), 2)) < distance - epsilon);

// Stop the robot:
setLeftPower(0);
setRightPower(0);



function go() {
  if (forward) {
    setLeftPower(1)
    setRightPower(1)
  } else {
    setLeftPower(-1)
    setRightPower(-1)
  }
}

let forward = true
clearCollision()
go()

while (true) {
  if (isCollisionDetected()) {
    forward = !forward
    clearCollision()
    go()
  }
}