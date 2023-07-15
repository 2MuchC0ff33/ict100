while (canGoRight()) {
    right()
  }
  
  if (getGoalY() > getY()) {
    down()
  } else if (getGoalY() < getY()) {
    up()
  }