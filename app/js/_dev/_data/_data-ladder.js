
//
// Data
// ====
function dataLadder() { 

    var self = this;

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