/*
setLeftPower()
setRightPower()
setLightColour()
isCollisionDetected()
clearCollision()
getX()
getY()
getVelocityX()
getVelocityY()
getHeading()
getAngularVelocity()
getGoalX()
getGoalY()
getGoalTileX()
getGoalTileY()
mazeColumnCount()
mazeRowCount()
setTickRate()
println()
*/


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
  
  
  
  
  
  
  
  
  /*
  The maze is 10 tiles wide and 10 tiles high
  The robot will need to move 5 tiles down and 5 tiles right to reach the goal
  If the robot goes past where it is meant to turn and hits a wall,
  Robot needs to turn around and go back to the start and remember the path it took to not do again
  */
  
  
  
  
  
  
  
  /*
  // Maze One
  
  // Initialize robot's position and orientation
  let x = 32;
  let y = 32;
  let orientation = "down";
  
  // Move the robot to face down
  if (orientation !== "down") {
    turnRobot("counter_clockwise"); // Turn counter-clockwise to face down
  }
  
  // Move the robot down five tiles
  for (let i = 0; i < 5; i++) {
    moveRobot("down");
  }
  
  // Turn the robot to face right
  turnRobot("counter_clockwise");
  
  // Move the robot right five tiles
  for (let i = 0; i < 5; i++) {
    moveRobot("right");
  }
  
  // Check if the robot has reached the goal
  if (x === 352 && y === 352) {
    reachGoal();
  }
  */
  
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
  
  // Specify the angle in radians
  turnTo(Math.PI / 2);
  
  // Move forward for a certain distance
  const distance1 = 3.5537;
  const epsilon1 = 0.01;
  let x1 = getX();
  let y1 = getY();
  do {
    setLeftPower(1);
    setRightPower(1);
    x1 = getX();
    y1 = getY();
  } while (Math.sqrt(Math.pow(x1 - getX(), 2) + Math.pow(y1 - getY(), 2)) < distance1 - epsilon1);
  
  // Stop the robot:
  setLeftPower(0);
  setRightPower(0);
  
  // Turn counterclockwise
  turnTo(Math.PI * 2); 
  
  // Move right for a certain distance
  const distance2 = 3.5537;
  const epsilon2 = 0.01;
  let x2 = getX();
  let y2 = getY();
  do {
    setLeftPower(1);
    setRightPower(1);
    x2 = getX();
    y2 = getY();
  } while (Math.sqrt(Math.pow(x2 - getX(), 2) + Math.pow(y2 - getY(), 2)) < distance2 - epsilon2);
  
  // Stop the robot:
  setLeftPower(0);
  setRightPower(0);