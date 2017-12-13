describe('Game Service: ', () => {
    let rspGameService;
    beforeEach(angular.mock.module('rsp'));
    beforeEach(angular.mock.module('rsp.game'));
    beforeEach(inject((_rspGameService_) => {
        rspGameService = _rspGameService_;
    }));

    it('should have 3 controls', () => {
        expect(rspGameService.controls.length).toEqual(3);
    });

    it('should reset gamerecord with reset method', () => {
        rspGameService.gameRecord = {player1: 'test', computer: 'test'};
        rspGameService.resetGame();

        expect(Object.values(rspGameService.gameRecord)).toEqual([null, null]);
    });

    it('should set player1 and computer controls on play', () => {
        const player1Control = {name: 'test', key: 1};
        const computerControl = {name: 'scissors', key: 1};
        spyOn(rspGameService, '__computerPlay').and.callFake(() => computerControl);
        rspGameService.play(player1Control);

        expect(rspGameService.gameRecord.player1).toEqual(player1Control);
        expect(rspGameService.__computerPlay).toHaveBeenCalledWith(rspGameService.controls);
        expect(rspGameService.gameRecord.computer).toEqual(computerControl);
    });

    it('should set the correct winner on play', () => {
        let player1Control = {name: 'rock', key: 1};
        let computerControl = {name: 'scissors', key: 3};
        spyOn(rspGameService, '__computerPlay').and.callFake(() => computerControl);
        spyOn(rspGameService, '__getWinner').and.callThrough();
        rspGameService.play(player1Control);

        expect(rspGameService.__getWinner).toHaveBeenCalledWith(player1Control, computerControl);
        expect(rspGameService.gameRecord.computer).toEqual(computerControl);
        expect(rspGameService.gameRecord.winner).toEqual('player1');

        //draw if same control played
        player1Control = computerControl;
        rspGameService.play(player1Control);
        expect(rspGameService.gameRecord.winner).toEqual('draw');

        player1Control = {name: 'paper', key: 1};
        computerControl = {name: 'scissors', key: 2};
        rspGameService.play(player1Control);
        expect(rspGameService.gameRecord.winner).toEqual('computer');

        player1Control = {name: 'rock', key: 1};
        computerControl = {name: 'paper', key: 2};
        rspGameService.play(player1Control);
        expect(rspGameService.gameRecord.winner).toEqual('computer');

    });

});