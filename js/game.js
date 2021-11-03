class Game {

	
	constructor() {
        this.background = new Background();
         this.timer = new Timer();
           this.player = new Player();
           this.villian = new Villian();
           this.interactable = new Interactable();
           this.notifs = new Notifs();
           this.isSwordGrabbable = false;
           this.hasSword = false;
           this.gameOver = false
           this.win = false 
          
//         this.hasStarted = false;

	}



    setup() {
           this.isSwordGrabbable = false;
//         this.hasStarted = false;
   //        this.background.draw();
//         this.notifs.startScreen();

      
	}


	preload() {
	this.backgroundImage = loadImage('/assets/background/forrest.jpg')
	this.playerImage = loadImage('/assets/player/link.png')
	this.villianImage = loadImage('/assets/villian/villian.png')

// // notifs

 
// this.startScreenImage = loadImage('/assets/notifs/start.png');
  this.gameOverImage = loadImage('/assets/notifs/gameover.png');
  this.winImage = loadImage('/assets/notifs/win.png');

// //interactable

   this.sword = loadImage('/assets/interactable/sword.png');

 	}


draw() {
// 		// console.log('game drawing')
		clear()
		this.background.draw()
        this.player.draw()
       // this.interactable.draw()
        this.timer.swordAppear()
        this.timer.villianAppear()
        this.villian.villianCollision(this.player)
      
       
        

        // interactable loop for swor

        }

 
// gameOver(){
//   // if(this.gameOver()){
//   //   image(this.gameOverImage)
//   // }          
  
// }

winState() {
 if ( this.win){
  image(this.winImage)
 }
  
}
}
