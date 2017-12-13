import displayTemplate from './winner_display.html';
import './winner_display.scss';

class WinnerDisplayCtrl {
    constructor(rspGameService) {
        this.gameRecord = rspGameService.gameRecord;
    }
}

export default {
    controller: WinnerDisplayCtrl,
    template: displayTemplate
}