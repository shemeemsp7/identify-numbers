
let currentNumber;
(function () {
    resetNumber();
})();

function playCurrentNumber() {
    resetNumber();
    let numberSource = currentNumber + ".m4a"
    soundPlay(numberSource);
}
function resetNumber() {
    currentNumber = Math.floor(Math.random() * 10);
    var cards = document.getElementsByClassName('card');
    for (i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = 'azure';
    }

}
function soundPlay(src) {
    var audioElement = document.getElementById('player-src');
    audioElement.src = src; //src for the player
    var myAudio = document.getElementById("player");
    myAudio.load();
    myAudio.play();
}
function onCardClick(number) {
    if (number == currentNumber) {
        soundPlay("correctAnswer.m4a");
        var div = document.getElementById(number);
        div.style.backgroundColor = 'green';
    } else {
        var div = document.getElementById(number);
        div.style.backgroundColor = 'red';
        soundPlay("wrongAnswer.m4a");
    }
}