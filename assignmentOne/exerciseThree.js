// There is a homing blob guard between Snobot and the exit. Lead it a merry chase.
// If I need Snobot to pause, I might find uptime() useful. 
// The uptime() function will give a number of milliseconds Snobot has been online for. 
// The value is read once into a constant and then written into a loop that calls uptime() until it's been long enough.
// I can also use uptime() to make Snobot wait for a certain amount of time. Which is what I plan to do.

// Move right until can't go right anymore
function movingRight() {
    while (canGoRight()) {
        right();
    }
}

// Move up until can't go up anymore
function movingUp() {
    while (canGoUp()) {
        up();
    }
}

// Move down until can't go down anymore
function movingDown() {
    while (canGoDown()) {
        down();
    }
}

// Function to make Snobot know how long to wait before starting again
function waiting() {
    let desiredDuration = 7000; // Set wait time here in milliseconds
    while (uptime() - startTime < desiredDuration) {
        // Wait for the desired duration to pass by continuously checking the elapsed time
    }
}

let startTime = uptime(); // Record the start time before any movements
movingRight(); // Move right until Snobot can no longer go right
movingUp(); // Move up until Snobot can no longer go up
right(); // Move right one more time
left(); // Move left to revert the last movement
waiting(); //Snobot waits for a little bit
movingDown(); // Move down until Snobot can no longer go down
movingRight(); // Move right until Snobot can no longer go right
up(); // Move up once
up(); // Move up again
movingRight(); // Move right until Snobot can no longer go right

// Snobot has led the homing blob guard astray and reached the desired location.
