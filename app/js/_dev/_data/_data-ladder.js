
//
// Data
// ====
function dataLadder(self) { 

    self.tasksURI = "https://api.football-data.org/v2/competitions/2021/standings";


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