class Timer {
  constructor() {
    this.timer = 60 * 1;
  }


  swordAppear(sword) {


    if (frameCount % 60 == 0 && this.timer > 0) {
      this.timer--;
      (this.timer)
    }

    if (this.timer <= 42) {

      game.interactable.draw();
    }

  }


  villianAppear() {

    if (this.timer <= 45) {
      game.villian.draw();
      return true
    }
    return false
  }

  showDialog() {

    if (this.timer >= 58) {
      game.dialog.draw(game.speech1)
    }
    if (this.timer <= 55 && this.timer >= 54) {
      game.dialog.draw(game.speech2)
    }
    if (this.timer <= 45 && this.timer >= 44) {
      game.dialog.draw(game.speech3)
    }


  }
}

