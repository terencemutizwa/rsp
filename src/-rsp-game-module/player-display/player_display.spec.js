describe('Player Display: ', () => {
    let $compCtl, rspGameService, ctrl;
    beforeEach(angular.mock.module('rsp'));
    beforeEach(angular.mock.module('rsp.game'));
    beforeEach(inject((_$componentController_) => {
        $compCtl = _$componentController_;
        rspGameService = {
            play: () => {
            },
            resetGame: () => {
            },
            getControls: () => [],
            gameRecord: {}
        };

        ctrl = $compCtl('rspPlayerDisplay', {rspGameService}, {player: 'one'});
    }));

    it('should bind game record to service reference', () => {
        expect(ctrl.gameRecord).toEqual(rspGameService.gameRecord);
    });

});