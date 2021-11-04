class Game {


  constructor() {
    this.background = new Background();
    this.timer = new Timer();
    this.player = new Player();
    this.villian = new Villian();
    this.interactable = new Interactable();
    this.notifs = new Notifs();
    this.dialog = new Dialog();
    this.isSwordGrabbable = false;
    this.hasSword = false;
    this.gameOver = false
    this.winState = false
    this.hasStarted = false;
    this.text = false
    


    //         this.hasStarted = false;

  }



  setup() {
    this.isSwordGrabbable = false;
    this.introSound = new Audio('assets/sound/firstTrack.mp3')
    this.alertSound = new Audio('/assets/sound/alertSound.mp3')
    this.collisionSound = new Audio('/assets/sound/collisionSound.mp3')
    this.fightSound = new Audio('/assets/sound/fight.mp3')
    this.winSound = new Audio('/assets/sound/winSound.mp3')
    this.looseSound = new Audio('/assets/sound/gameOverSound.mp3')
    //        this.background.draw();
    //         this.notifs.startScreen();

  }


  preload() {
    this.backgroundImage = loadImage('assets/background/forrest.jpg')
    this.playerImage = loadImage('assets/player/link.png')
    this.villianImage = loadImage('assets/villian/villian.png')

    // // notifs


    this.startScreenImage = loadImage('assets/notifs/ZeldaStart.png');
    this.gameOverImage = loadImage('assets/notifs/gameover.png');
    this.winImage = loadImage('assets/notifs/win.png');

    // //interactable

    this.sword = loadImage('assets/interactable/sword.png');
    this.speech1 = loadImage('assets/notifs/hmm-it-seems-quiet-here-.gif')
    this.speech2 = loadImage('assets/notifs/i-should-try-and-get-some-rest-.gif')
    this.speech3 = loadImage('assets/notifs/oh-no-an-enemy-where-is-my-.gif')

    
    
    



  }


  draw() {
    // 		// console.log('game drawing')
    clear()
    this.background.draw()
    this.player.draw()
    this.notifs.startScreen()


    // // if (!game.hasStarted === game.text) {

    // //   let index = -1
    // //   setInterval(function () {
    // //     index++
    // //   }, 2000);
   

    // }
    if (game.hasStarted && game.text) {

      this.timer.showDialog()
      this.timer.swordAppear()
      this.introSound.play()

     console.log(this.timer.villianAppear())
      if( this.timer.villianAppear()){
        this.introSound.pause()
        this.alertSound.play()
        this.fightSound.play()
      }


      this.villian.villianCollision(this.player)
      

    }

    if (this.gameOver) {
      image(this.gameOverImage, 350, 100, 500, 500)
      this.fightSound.pause()
      this.looseSound.play()
    }
    if (this.winState) {
      image(this.winImage, 350, 100, 500, 500)
      this.fightSound.pause()
      this.winSound.play()
      
    }


    // interactable loop for swor

  }



  winState() {
    if (this.win) {
      image(this.winImage) 
    }

  }



}