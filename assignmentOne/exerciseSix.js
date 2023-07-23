// Snotbot needs to collect all the diamonds to get through the gate
// Snobot needs to try not to get trapped
// Write the function that moves in a clockwise circle, and use it in the solution

// Function to move Snobot in a clockwise circle
function movingClockwise() {
    while (true) {
        if (canGoRight()) {
            right();
        } else if (canGoDown()) {
            down();
        } else if (canGoLeft()) {
            left();
        } else if (canGoUp()) {
            up();
        }
    }
}

// Function to move Snobot in a counter-clockwise circle
function movingCounterClockwise() {
    while (true) {
        if (canGoUp()) {
            up();
        } else if (canGoLeft()) {
            left();
        } else if (canGoDown()) {
            down();
        } else if (canGoRight()) {
            right();
        }
    }
}

// Function to move Snobot to the right
function movingRight() {
    while (canGoRight()) {
        right();
    }
}

// Function to move Snobot to the left
function movingLeft() {
    while (canGoLeft()) {
        left();
    }
}

// Function to move Snobot to the up
function movingUp() {
    while (canGoUp()) {
        up();
    }
}

// Function to move Snobot to the down
function movingDown() {
    while (canGoDown()) {
        down();
    }
}

// Function to move Snobot to the exit
function runToExit() {
    while (true) {
        if (!canGoRight()) {
            break;
        }
        right();
    }
    movingDown();
    down();
    movingRight();
    movingRight();
    movingUp();
    movingRight();
    movingRight();
}

