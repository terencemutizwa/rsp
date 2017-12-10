import rockImg from './img/rock.png';
import paperImg from './img/paper.jpg'
import scissorsImg from './img/scissors.png';

class RspSrv {
    constructor() {
        this.__controls = [
            {name: 'rock', key: 1, img: rockImg},
            {name: 'paper', key: 2, img: paperImg},
            {name: 'scissors', key: 3, img: scissorsImg}
        ];

        this.gameRecord = {player1: null, computer: null, winner:null};
    }

    getControls() {
        return this.__controls;
    }

    resetGame() {
        for(const key in this.gameRecord ){
            this.gameRecord[key] = null;
        }
    }

    play(control) {
        this.gameRecord.player1 = control;
        this.gameRecord.computer = this.__computerPlay();
        this.gameRecord.winner = this.__getWinner();
    }

    __computerPlay() {
        const key = Math.floor(Math.random() * 3) + 1;

        return this.__controls.find((control) => control.key === key);
    }

    __getWinner() {
        let winner;
        const player1Control = this.gameRecord.player1;
        const computerControl = this.gameRecord.computer;
        if(player1Control.key === computerControl.key){
            return 'draw';
        }else if (player1Control.name === 'rock' && computerControl.name !== 'paper'){
            winner = 'player1'
        }else if (player1Control.name === 'paper' && computerControl.name !== 'scissors'){
            winner = 'player1'
        }else if (player1Control.name === 'scissors' && computerControl.name !== 'rock'){
            winner = 'player1'
        }else {
            winner = 'computer';
        }

        return winner;
    }
}

export default RspSrv;