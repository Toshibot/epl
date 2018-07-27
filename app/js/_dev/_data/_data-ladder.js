
//
// Data
// ====
function dataLadder() { 
    
    // $.getJSON('https://raw.githubusercontent.com/openfootball/football.json/master/2017-18/en.1.json', function (json) {
    //     var round = $('.c-ladder__round');


    //     // Construct the Ladder
    //     for (i = 0; i < json.length; i++) {
    //         const element = json[i];
    //         ladderItem(element, i+1);
    //     }

    // });

    var self = this;
    self.tasksURI = "https://api.football-data.org/v2/competitions/2021/standings";

    self.ajax = function(uri, method, data) {
        var request = {
            url: uri,
            type: method,
            accepts: "application/json",
            cache: false,
            dataType: "json",
            data: JSON.stringify(data),
            headers: {"X-Auth-Token": "679038679bcd4b3b9c49b464f45cd8fc"},
            error: function (jqXHR) {
                console.log("ajax error " + jqXHR.status);
            }

        };

        return $.ajax(request);
    }

    self.ajax(self.tasksURI, 'GET').done(function(data) {
        // console.log(data);

        var ladder = data.standings[0].table;
        console.log(ladder);

        // Construct the Ladder
        for (i = 0; i < ladder.length; i++) {
            const element = ladder[i];
            ladderItem(element, i+1);
        }
    })

}