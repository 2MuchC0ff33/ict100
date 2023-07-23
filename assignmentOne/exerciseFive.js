// Each version of this maze has a boulder that wants to roll down. 
// Diamonds and boulders are both slippery, so if you make the space for it, it should roll off.
// Write your solution so it includes two functions you'll write: dropBoulder() and runToExit()

// Function to move downwards until blocked
function movingDown() {
    while (canGoDown()) {
        down();
    }
}

// Function to drop the boulder by moving it to the left and creating space for it to roll down
function dropBoulder() {
    movingDown();
    left();
    down();
    down();
    up();
    up();
}

// Function to run to the exit
function runToExit() {
    while (true) {
        if (!canGoDown()) {
            right();
            down();
            right();
            movingDown();
            right();
            right();
        } else {
            right();
            down();
            down();
            right();
            movingDown();
            right();
            right();
        }
        break;
    }
}

dropBoulder();
runToExit();