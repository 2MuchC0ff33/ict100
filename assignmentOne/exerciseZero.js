// Snobot just has to go down. But he also has to stop at the right point because he can roll past the goal.
// So he has to go down until he can't go down anymore.
// This is a good example of a while loop. While he can go down, he should go down.
// The while loop will stop when he can't go down anymore.
// The while loop is a good way to repeat a block of code until a condition is met.
// The condition is the part in the parentheses. It's a boolean expression, which means it's either true or false.
// If it's true, the while loop will run. If it's false, the while loop will stop.
// The while loop will run until the condition is false.
// In this case, the condition is canGoDown(). canGoDown() is a function that returns true if Snobot can go down.
// If Snobot can go down, the while loop will run. If Snobot can't go down, the while loop will stop.
while (canGoDown()) {
    down();
  }