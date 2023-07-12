function eyes() {
    let sides = 4;
    let angle = 90;
    let distance = 20;
        while (sides > 0) {
            forward(distance);
            right(angle);
            sides = sides - 1;
        }
    }
    
    eyes();
    penUp();
    forward(50);
    penDown();
    eyes();
    penUp();
    forward(20);
    right(90);
    forward(50);
    penDown();
    forward(20);
    right(90);
    forward(60);
    right(90);
    forward(20);