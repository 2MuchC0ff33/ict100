function circle(radius, stepSize = 4) {
    penUp()
    forward(radius)
    left(90)
    penDown()

    const distance = 2 * Math.PI * radius / 360;

    for (let i = 0; i < 360; i += stepSize) {
        forward(distance * stepSize)
        left(stepSize)
    }
}

penUp();
left(90);
forward(250);
penDown();
circle(50)