function square(d) {
    for (let i = 0; i < 4; i++) {
        left(90);
        forward(d);
    }
}

function vanishingSquares(d) {
    if (d == d) {
        square(d);
        left(15);
        vanishingSquares(0.75 * d);
    }
}

setThickness(2)
vanishingSquares(100)