// The objective of this code is to guide Snobot to the exit by squashing a homing blob guard with a boulder.
// The solution is divided into three user-defined functions: getInPosition(), waitAndSquash(), and runToExit().
// The getInPosition() function moves Snobot to the left of the boulder.
// The waitAndSquash() function pushes the boulder to the right.
// The runToExit() function moves Snobot to the exit after pushing the boulder.

// Move right until unable to go right anymore
function movingRight() {
    while (canGoRight()) {
        right();
    }
}

// Move up until unable to go up anymore
function movingUp() {
    while (canGoUp()) {
        up();
    }
}

// Move down until unable to go down anymore
function movingDown() {
    while (canGoDown()) {
        down();
    }
}

// Move Snobot to the left of the boulder
function getInPosition() {
    movingRight(); // Move right twice to bypass the boulder
    movingRight();
    if (canGoUp()) { // If there is an upward path available, move up
        movingUp();
    }
    if (canGoUp()) { // If there is still an upward path available, move up again
        movingUp();
    }
    left(); // Move left to position Snobot beside the boulder
    up(); // Move up to prepare for pushing the boulder
}

// Push the boulder to the right
function waitAndSquash() {
    while (true) {
        if (!canGoRight()) { // Break the loop if unable to go right anymore
            break;
        }
        right();
    }
    right(); // Push the boulder by moving right
    right();
}

// Move Snobot to the exit after pushing the boulder
function runToExit() {
    left(); // Move left to leave the boulder
    movingDown(); // Move down
    down();
    movingRight(); // Move right towards the exit
    
    if (canGoDown()) { // If there is a path downwards, move down and continue moving right
        up();
        movingRight();
    }
    else { // If there is no path downwards, move up twice and continue moving right
        up();
        up();
        movingRight();
    }
}

// Call the necessary functions in the desired sequence
getInPosition();
waitAndSquash();
runToExit();
