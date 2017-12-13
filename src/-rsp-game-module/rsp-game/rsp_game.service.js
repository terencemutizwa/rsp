import rockImg from './img/rock.png';
import paperImg from './img/paper.jpg'
import scissorsImg from './img/scissors.png';

class RspGameService {
    constructor() {
        this.controls = [
            {name: 'rock', key: 1, img: rockImg},
            {name: 'paper', key: 2, img: paperImg},
            {name: 'scissors', key: 3, img: scissorsImg}
        ];

        this.gameRecord = {player1: null, computer: null, winner: null};
    }

    resetGame() {
        const keys = Object.keys(this.gameRecord);
        keys.forEach((key) => {
            this.gameRecord[key] = null;
        });
    }


    play(control) {
        this.gameRecord.player1 = control;
        this.gameRecord.computer = this.__computerPlay(this.controls);
        this.gameRecord.winner = this.__getWinner(this.gameRecord.player1, this.gameRecord.computer);
    }

    __computerPlay(controls) {
        const key = Math.floor(Math.random() * 3) + 1;

        return controls.find((control) => control.key === key);
    }

    __getWinner(player1Control, computerControl) {
        let winner;
        if (player1Control.key === computerControl.key) {
            return 'draw';
        } else if (player1Control.name === 'rock' && computerControl.name !== 'paper') {
            winner = 'player1';
        } else if (player1Control.name === 'paper' && computerControl.name !== 'scissors') {
            winner = 'player1';
        } else if (player1Control.name === 'scissors' && computerControl.name !== 'rock') {
            winner = 'player1';
        } else {
            winner = 'computer';
        }

        return winner;
    }
}

export default RspGameService;