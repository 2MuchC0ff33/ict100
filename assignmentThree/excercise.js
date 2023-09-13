/*
// Function available to use in the environment only
javasc
*/

/*
// Robot goes down and right a little bit 

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


// Define the three 10x10 maze representations and initialise (1 = space, 0 = wall, 2 = goal, 3 = robot start position)
let mazeOne = [
    [3,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,1,0,0,0,1],
    [1,0,1,1,1,1,1,1,0,1],
    [1,0,1,0,0,0,0,1,0,1],
    [1,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,2,0,1,1,1],
    [1,0,1,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,1,1,0,1],
    [1,0,0,0,1,1,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1]
  ];

  let mazeTwo = [
    [3,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,0,0,0,1,1],
    [1,1,0,1,1,1,0,1,1,0],
    [0,1,0,1,0,0,1,0,1,1],
    [1,1,1,1,0,1,1,1,0,1],
    [0,0,1,0,0,2,0,1,0,1],
    [1,1,1,1,0,0,0,1,0,1],
    [1,0,0,0,0,1,1,1,1,1],
    [1,1,1,1,1,1,0,0,0,0],
    [1,0,0,0,1,1,1,1,1,0]
  ];

  let mazeThree = [
    [3,1,1,0,1,1,1,1,1,1],
    [1,0,1,0,1,1,0,0,0,1],
    [1,0,1,1,0,1,1,1,0,1],
    [0,0,1,0,0,0,0,1,1,1],
    [1,1,1,0,1,1,1,1,0,1],
    [1,0,1,1,1,2,0,1,0,0],
    [1,0,1,0,0,0,0,1,0,0],
    [1,0,1,0,1,0,1,1,0,1],
    [1,0,0,0,1,0,1,0,0,1],
    [1,1,1,1,1,1,1,1,1,1]
  ];