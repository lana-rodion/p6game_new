// Display game rules with toggle button
$( document ).ready(function() {

    $("#game-rules").css( "display", "none" );

    $("#rules").on("click", function(){
        $("#game-rules").slideToggle(1000);
    });
});

const musicFond = document.getElementById("musicFond");

function play() {
    musicFond.play();
}

function mute() {
    musicFond.pause();
}
