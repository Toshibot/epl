
// Data - Fixture/Results

function dataFixture() {

    var self = this;
    self.tasksURI = "https://api.football-data.org/v2/competitions/2021/matches";

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

        var matches = data.matches;
        var today = new Date;
        var testDate = new Date('2018-04-24');
        var currentRound = [];
        var currentRoundNo = roundCalc(today);

        $('.js-fixture-round').text("Matchday " + currentRoundNo);

        for (i = 0; i < matches.length; i++) {
            const element = matches[i];
            
            if (element.matchday == currentRoundNo) {
                currentRound.push(element);
            }
        }

        console.log(data);

        for (i = 0; i < currentRound.length; i++) {
            const element = currentRound[i];

            fixtureItem(element);
        }
    })
}

