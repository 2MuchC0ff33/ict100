function twoTriangles() {
    let s = 3;
    let a = 120;
    let d = 200;
    
    while (s > 0) {
      forward(d);
      right(a);
      s = s - 1;
    }
}

twoTriangles();
left(180);
twoTriangles();