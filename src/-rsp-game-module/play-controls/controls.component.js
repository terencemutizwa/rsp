import controllsTemplate from './controls.html';
import './controls.scss';

class GameControlsCtrl {
    constructor(rspGameService) {
        'ngInject';
        this.rspGameService = rspGameService;
        this.controls = rspGameService.controls;
        this.played = false;
    }

    play(control) {
        this.played = true;
        this.rspGameService.play(control);
    }

    reset() {
        this.played = false;
        this.rspGameService.resetGame();
    }
}

export default {
    controller: GameControlsCtrl,
    template: controllsTemplate
};