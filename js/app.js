/*
 * Phase 2 - Players movements and Weapons changes
    * On each turn, a player can move one to three spaces
    * (horizontally or vertically) before complete his turn
    * He cannot cross an obstacle
    * If a player cross over a space containing a weapon,
    * he leaves his current weapon in place and replaces it with the new one
*/

import Game from "./game.js";

$(document).ready(function() {

    // Display the page without blinking
    $("body").fadeIn(2000);

    let game = new Game(true);

    game.init();

});
















