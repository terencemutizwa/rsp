import displayTemplate from './player_display.html';
import './player_display.scss';


class PlayerDisplayCtrl {
    constructor(rspGameService) {
        this.rspGameService = rspGameService;
        this.gameRecord = this.rspGameService.gameRecord;
    }

}

export default {
    bindings:{
      player:'@'
    },
    controller: PlayerDisplayCtrl,
    template: displayTemplate
}