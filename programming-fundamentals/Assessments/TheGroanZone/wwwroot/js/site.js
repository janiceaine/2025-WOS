// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function playRimshot() {
    const audio = document.getElementById("rimshot");
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        setTimeout(playRimshot, 1000);
    }
}
