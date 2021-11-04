class Notifs {

    constructor() {
        this.x = 340;
        this.y = 100;
        this.width = 550;
        this.height = 450;
    }






    gameOver() {

        image(game.gameOverImage, this.x, this.y, this.width, this.height);

    }



    win() {

        image(game.winImage, this.x, this.y, this.width, this.height)


    }



    startScreen() {
        if (!game.hasStarted) {
            document.querySelector('#start > span').innerText = 'press  `ENTER` to start.'
            image(game.startScreenImage, this.x, this.y, this.width, this.height);
        } else {
            document.querySelector('#start > span').innerText = ''
        }

    }


    // startSpeech(index) {
    //     console.log('call')
    //     if(index > 2) return
    //     console.log(index)
    //     let imgArray = [game.speech1,
    //     game.speech2,
    //     game.speech3]

    //     image(imgArray[index], game.player.x, game.player.y, 200, 200)

    // }


    // before next iteratipon pause xx seconds 

}