// There is a boulder between you and the exit. Remember, canGoRight() will return false if it sees a boulder (even a pushable one).
// You can use canGoRight() to check if there is a boulder in the way.


function movingRight() {
    while (canGoRight()) {
    right();
    }
}

movingRight();
up();
movingRight();
down();
movingRight();