import {player} from './controller'
import {ship} from './controller'
import {board} from './controller'

const gameController = (function() {

    let playerOne = null;
    function startGame() {
        playerOne = new player("joe")
        playerOne.createBoard();
        playerOne.placeShip("vert", 2, 3, "small");
        playerOne.takeHit(3,3);
    }
    return {
        startGame: startGame
    };
}) ();

gameController.startGame()

