import { weapon1 } from "./weapons.js";

class Player {
    constructor(name, nickname) {
        this.name = name;
        this.nickname = nickname;
        this.weapon = weapon1;
        this.life = 100;
        this.currentCell = null;
    }

    isPlayerAround(cellsAround) {
        for (let cell of cellsAround) {
            if (cell.player !== null) {
                return true;
            }
        }
        return false;
    }

}

export let player1 = new Player("hero1", "Thor");
export let player2 = new Player("hero2", "Odin");
