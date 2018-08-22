
// Data - Fixture/Results

function dataFixture(self) {
    
    // Variables
    var matchday = [];
    self.matchesURI = "https://api.football-data.org/v2/competitions/2021/matches";
    self.matchdayURI = "https://api.football-data.org/v2/competitions";

    // Matchday
    // self.ajax(self.matchdayURI, 'GET').done(function(data){

    //     for (i = 0; i < data.competitions.length; i++) {
    //         const element = data.competitions[i];
    //         if (element.id == 2021) {
    //             matchday.push(element.currentSeason.currentMatchday);
    //         }
    //     }
    // });

    self.ajax(self.matchesURI, 'GET').done(function(data) {

        var matches = data.matches;
        var today = new Date;
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

