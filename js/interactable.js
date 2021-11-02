class Interactable {

    constructor() {
        this.swordX = Math.floor(
            Math.random() * (1000 - 200) + 200
          )
        this.swordY = Math.floor(
            Math.random() * (600 - 275) + 275
          )
        this.swordWidth = 60;
        this.swordHeight = 60;


    }

    draw(){
        image(
            game.sword,
            this.swordX,
            this.swordY,
            this.swordWidth,
            this.swordHeight
          );

          this.swordPlayerCollision(game.player);
    }


  swordPlayerCollision(playerInfo) {
    let swordX = this.swordX + this.swordWidth / 1.1;
    let swordY = this.swordY + this.swordHeight / 1.1;

    
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    console.log('hi', game.hasSword)
    if (dist(swordX, swordY, playerX, playerY) < 25) {  
       
        if (game.hasSword === true){ 
        this.swordX = playerX;
        this.swordY = playerY;
        }

     
    }

      

        // connect sword to player
      game.sword.resize(0, 0);
      image(
        game.sword,
        this.swordX,
        this.swordY,
        this.swordWidth,
        this.swordHeight
      );
     
    }
  }




