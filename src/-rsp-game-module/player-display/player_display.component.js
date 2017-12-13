import displayTemplate from './player_display.html';
import './player_display.scss';


class PlayerDisplayCtrl {
    constructor(rspGameService) {
        'ngInject';
        this.rspGameService = rspGameService;
        this.gameRecord = this.rspGameService.gameRecord;
    }

}

export default {
    bindings: {
        player: '@'
    },
    controller: PlayerDisplayCtrl,
    template: displayTemplate
};