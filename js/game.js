class Game {

	
	constructor() {
        this.background = new Background();
         this.timer = new Timer();
           this.player = new Player();
//         this.villian = new Villian();
           this.interactable = new Interactable();
//         this.notifs = new Notifs();
            this.isSwordGrabbable = false;
            this.hasSword = false;
//         this.hasStarted = false;

	}



    setup() {
           this.isSwordGrabbable = false;
//         this.hasStarted = false;
//         this.background.draw();
//         this.notifs.startScreen();

      
	}


	preload() {
	this.backgroundImage = loadImage('/assets/background/forrest.jpg')
	this.playerImage = loadImage('/assets/player/link.png')
// 		this.villianImage = loadImage('/assets/villian/villian.jpg')

// // notif
 
// this.startScreenImage = loadImage('/assets/notifs/start.png');
// this.gameOverImage = loadImage('/assets/notifs/gameover.jpg');
// this.winImage = loadImage('/assets/notifs/win.jpg');

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
        

        // interactable loop for sword


        }
}
 