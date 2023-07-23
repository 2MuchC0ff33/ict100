// There is a boulder between Snobot and the exit. canGoRight() will return false if it sees a boulder (even a pushable one).
// I can use canGoRight() to check if there is a boulder in the way.

// The 'movingRight()' function is responsible for moving in the right direction until it encounters a boulder or can no longer go right.
function movingRight() {
    while (canGoRight()) {
        right();
    }
}

// The overall logic of the code is to navigate Snobot towards the exit by moving right, with the consideration of the boulder.
// 1. Initially, the 'movingRight()' function is called to move Snobot right until encountering a boulder or reaching the end.
// 2. Then, the 'up()' function is called to move Snobot up.
// 3. Again, the 'movingRight()' function is called to move Snobot right, considering boulders.
// 4. After that, the 'down()' function is called to move Snobot down.
// 5. Finally, the 'movingRight()' function is called again to move Snobot right, considering the boulder.

// The sequence of function calls ensures Snobot navigates towards the exit while avoiding the boulder.
movingRight();
up();
movingRight();
down();
movingRight();