// This maze always goes right, down, doubles back on itself by going left, and then doubles back right to the exit again.

// The while loop will run until the condition is false. The conditions are canGoRight() || canGoDown() and canGoLeft() || canGoDown().
// || means or.

// The first while loop will run until Snobot can't go right or can't go down.
// The second while loop will run until Snobot can't go left or can't go down.
// The last while loop will stop when Snobot can't go right or can't go down.

// The 'rightDown()' function is responsible for navigating Snobot to the right and down.
function rightDown() {
    while (canGoRight() || canGoDown()) {
      if (canGoRight()) {
        right();
      } else {
        down();
      }
    }
  }
  
  // The 'leftDown()' function is responsible for navigating Snobot to the left and down.
  function leftDown() {
    while (canGoLeft() || canGoDown()) {
      if (canGoLeft()) {
        left();
      } else {
        down();
      }
    }
  }
  
  // The overall logic of the code is to navigate Snobot through the maze in a specific pattern:
  // 1. Snobot moves right and down until it can't go right or down anymore.
  // 2. Snobot then moves left and down until it can't go left or down anymore.
  // 3. Finally, Snobot moves right and down again until it can't go right or down anymore.
  
  // The sequence of function calls ensures that Snobot follows the required path through the maze.
  rightDown();
  leftDown();
  rightDown();
  