function movingX() {
    while (getX() !== getGoalX()) {
      if (getX() < getGoalX()) {
        if (canGoRight()) {
          right();
        } else {
          break;
        }
      } else {
        if (canGoLeft()) {
          left();
        } else {
          break;
        }
      }
    }
  }

function movingY() {
    while (getY() !== getGoalY()) {
      if (getY() < getGoalY()) {
        if (canGoDown()) {
          down();
        } else {
          break;
        }
      } else {
        if (canGoUp()) {
          up();
        } else {
          break;
        }
      }
    }
}
  
movingX();
movingY();