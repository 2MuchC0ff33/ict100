// This maze always goes right, down, doubles back on itself by going left, and then doubles back right to the exit again.
// The while loop will run until the condition is false. The conditions are canGoRight() || canGoDown() and canGoLeft() || canGoDown().
// || means or.
// The first while loop will run until Snobot can't go right or can't go down.
// The second while loop will run until Snobot can't go left or can't go down.
// The last while loop will stop when Snobot can't go right or can't go down.


function rightDown() {
    while (canGoRight() || canGoDown()) {
        if (canGoRight()) {
            right();
        } else {
            down();
        }
    }
}

function leftDown() {
    while (canGoLeft() || canGoDown()) {
        if (canGoLeft()) {
            left();
        } else {
            down();
        }
    }
}

rightDown();
leftDown();
rightDown();