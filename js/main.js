(function() {
    var LOVE_CHANGE_TIME = 3000;
    var AUTHORS = [
        'the HackMIT Team',
        'clowns',
        'space monkeys',
        'dragons',
        'the Kimberli Zhong squad',
        'a PRNG',
        'a thousand monkeys with a thousand keyboards',
        'doge',
        'nyan cat',
        'the hivemind',
        'hackbot',
        'Kevin Kwok',
        'left-pad',
        'twitch',
        'a Mersenne twister',
        'HELP I\'M TRAPPED IN A WEBSITE FACTORY',
        'the Illuminati',
        'Beyonc\u00e9',
        'Jack Florey',
        'Oliver Smoot',
        'Ben Bitdiddle',
        'Alyssa P. Hacker',
        'John Harvard',
        'Kim Zhong Il',
        'jizzboi',
        'our head of HR'
    ];

    // uniform int from [min, max)
    var uniform = function(min, max) {
        return min + Math.floor(Math.random() * (max - min));
    };

    var choice = function(arr) {
        return arr[uniform(0, arr.length)];
    };

    var update = function() {
        var love_icon = document.getElementById('love-icon');
        var love_author = document.getElementById('love-author');

        var symbol = String.fromCharCode(uniform(0x2700, 0x27c0));

        var author = choice(AUTHORS);

        love_icon.innerHTML = symbol;
        love_author.innerHTML = author;
    };

    setInterval(update, LOVE_CHANGE_TIME);
}());
