import { weapon1 } from "./weapons.js";

class Player {
    constructor(name, nickname) {
        this.name = name;
        this.nickname = nickname;
        this.weapon = weapon1;
        this.life = 100;
        this.currentCell = null;
        this.defense = false;
    }

    // Method to move player and change the previous cell property

    move(newCell) {
        this.currentCell.player = null;

        newCell.player = this;
        this.currentCell = newCell;

        $(".cell").removeClass("accessible");
        $(`.${this.name}`).removeClass(this.name);
        $(newCell.element).addClass(this.name);
    }

    // Method to exchange the player weapon for the cell weapon

    changeWeapon(player) {
        this.player = player;
        let playerWeapon = this.player.weapon;

        if (this.currentCell.weapon !== null) {
            this.currentCell.element.removeClass(this.currentCell.weapon.name);
            this.currentCell.element.addClass(playerWeapon.name);
            this.player.weapon = this.currentCell.weapon;
            this.currentCell.weapon = playerWeapon;
        }
    }

    isPlayerAround(cellsAround) {
        for (let cell of cellsAround) {
            if (cell.player !== null) {
                return true;
            }
        }
        return false;
    }

    // Method to change the appearance of the player who is a target in the fight

    heroTarget(target) {
        this.target = target;

        $(`.${this.target.name}`).css("opacity", "0.5");
        $(`.${this.target.name}-attack-button, .${this.target.name}-defense-button`).off("click").css({visibility: "hidden"});
    }

    // Method to calculate life points

    scoreLife() {

        // defense counts 50% damage less: this.weapon.damage / 2
        let lifeRemaining = (this.target.life -= this.target.defense ? this.weapon.damage / 2 : this.weapon.damage);

        // display barre-life and percentage-life
        $(`.${this.target.name}-barre-life`).css("width", `${lifeRemaining}%`);

    }

}

export let player1 = new Player("hero1", "Thor");
export let player2 = new Player("hero2", "Odin");
