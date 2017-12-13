describe('Game Controls: ', () => {
    let $compCtl, rspGameService, ctrl;
    beforeEach(angular.mock.module('rsp'));
    beforeEach(angular.mock.module('rsp.game'));
    beforeEach(inject((_$componentController_) => {
        $compCtl = _$componentController_;
        rspGameService = {
            play: () => {},
            resetGame: () => {},
            getControls: () => []
        };

        ctrl = $compCtl('rspGameControls', {rspGameService});
    }));

    it('controller should have played state to false by default', () => {
        expect(ctrl.played).toEqual(false);
    });

    it('should set the played flag true when played', () => {
        ctrl.play();
        expect(ctrl.played).toEqual(true);
    });

    it('should use game service to play', () => {
        spyOn(ctrl.rspGameService, 'play');
        const control = {};
        ctrl.play(control);
        expect(ctrl.rspGameService.play).toHaveBeenCalledWith(control);
    });

    it('should set played flag to false when reset game', () => {
        ctrl.reset();
        expect(ctrl.played).toEqual(false);
    });

    it('should use game service to reset game', () => {
        spyOn(ctrl.rspGameService, 'resetGame');
        ctrl.reset();
        expect(ctrl.rspGameService.resetGame).toHaveBeenCalled();
    });

});