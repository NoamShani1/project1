class Timer {
    constructor() {
      this.timer = 60 * 1;
      }
    

    swordAppear(sword){

        
        if (frameCount % 60 == 0 && this.timer > 0) {
            this.timer--;
console.log(this.timer)
        }
      
        if (this.timer <= 58){

        game.interactable.draw();
    }

}     
    
}

