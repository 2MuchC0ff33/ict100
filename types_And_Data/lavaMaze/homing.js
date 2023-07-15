function movingX() {
    while (true) {
      if (getX() < getGoalX()) {
          (canGoRight());
          right();
          }
      }      
  }
  
  movingX();