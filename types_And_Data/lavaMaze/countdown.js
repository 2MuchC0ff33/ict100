function movingX() {
    while (getX() !== getGoalDistance()) {
      if (getX() < getGoalDistance()) {
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
    while (getY() !== getGoalDistance()) {
      if (getY() < getGoalDistance()) {
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



