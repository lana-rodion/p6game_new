import Board from "./board.js";
import { player1, player2 } from "./players.js";
import { weapons } from "./weapons.js";

export default class Game {
    constructor(board) {
        this.board = board;
        this.playerPlay = null;
    }

    // Method to initialize the game by creating the game grid , to place players, to display accessible cells

    init() {
        let height = 10;
        let width = 10;
        let players = [player1, player2];

        players.forEach((player) => this.playersDescription(player));

        this.board = new Board(player1, player2, weapons);
        this.board.createGrid(width, height);
        this.randomPlayerStart(player1, player2);

        if (this.playerPlay === player1) {
            this.board.getAccessibleCells(player1.currentCell, 3);
        } else {
            this.board.getAccessibleCells(player2.currentCell, 3);
        }
    }


    //To determine which player starts
    randomPlayerStart(player1, player2) {
        let choiceRandom = Math.floor(Math.random() * 2);
        if (choiceRandom === 0) {
            this.playerPlay = player1;
        } else {
            this.playerPlay = player2;
        }
    }


    // Method to display players stats

    playersDescription(player) { //player.nick = player.id

        let playerName = "#" + player.name + "-name";
        let playerWeaponImage = "#" + player.name + "-weapon-image";
        let playerWeaponName = "#" + player.name + "-weapon-name";
        let playerWeaponInfos = "#" + player.name + "-weapon-infos";

        $(playerName).empty().append(`${player.nickname}`);
        $(playerWeaponImage).empty().append(`<div class="standard-size-img ${player.weapon.name}"></div>`);
        $(playerWeaponName).empty().append(`${player.weapon.nickname}`);
        $(playerWeaponInfos).empty().append(`${player.weapon.damage}`);
    }
}