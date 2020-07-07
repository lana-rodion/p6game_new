export let weapons = [];

class Weapon {
    constructor(name, damage, nickname) {
        this.name = name;
        this.damage = damage;
        this.nickname = nickname;
    }
}

let weapon2 = new Weapon("sword", 15, "Sword");
let weapon3 = new Weapon("axe", 30, "Axe");
let weapon4 = new Weapon("hammer", 40, "Hammer");

export let weapon1 = new Weapon("scramasaxe", 10, "Scramasaxe");

weapons.push(weapon2, weapon3, weapon4);