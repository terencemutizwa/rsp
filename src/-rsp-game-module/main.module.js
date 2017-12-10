import GameService from './rsp-game/rsp_game.service';
import Game from './rsp-game/rsp_game.component';
import Controls from './play-controls/controls.component';
import PlayerDisplay from './player-display/player_display.component';
import WinnerDisplay from './winner-display/winner_display.component';

export default angular
    .module('rsp.game',[])
    .service('rspGameService', GameService)
    .component('rspGame', Game)
    .component('rspGameControls', Controls)
    .component('rspPlayerDisplay', PlayerDisplay)
    .component('rspWinnerDisplay', WinnerDisplay)
    .name;
