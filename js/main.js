(function() {
    var LOVE_CHANGE_TIME = 3000;

    var update = function() {
        var love = document.getElementById('love');
        // dingbats are 0x2700 to 0x27bf
        var offset = Math.floor(Math.random() * 0xc0);
        var symbol = String.fromCharCode(0x2700 + offset);
        love.innerHTML = 'Made with <span class="love-icon">' +
            symbol + '</span> by the HackMIT Team';
    };

    setInterval(update, LOVE_CHANGE_TIME);
}());
