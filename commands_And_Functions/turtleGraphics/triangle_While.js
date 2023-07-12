let sides = 3;
let angle = 120;
let distance = 100;

while (sides > 0) {
  forward(distance);
  right(angle);
  sides = sides - 1;
}