function movingR() {
    while (canGoRight()) {
        right();
    }
}

function movingD() {
    while (canGoDown()) {
        down();
    }
}

movingR();
right();
movingD();