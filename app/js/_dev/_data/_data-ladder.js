
//
// Data
// ====
function dataLadder() { 
    
    $.getJSON('https://raw.githubusercontent.com/openfootball/football.json/master/2017-18/en.1.json', function (json) {
        var round = $('.c-ladder__round');


        // Construct the Ladder
        for (i = 0; i < json.length; i++) {
            const element = json[i];
            ladderItem(element, i+1);
        }

    });

}