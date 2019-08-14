// ==========================================================================
// Initialisation
// ==========================================================================

// Core Functions 
data();
// ==========================================================================
// Fixture - Functions
// ==========================================================================


// Data - Fixture/Results

function dataFixture() {
    
    // Variables
    var self = this;
    var matchday = [];
    self.matchesURI = "https://api.football-data.org/v2/competitions/2021/matches";
    self.matchdayURI = "https://api.football-data.org/v2/competitions";

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

    // Matchday
    self.ajax(self.matchdayURI, 'GET').done(function(data){
        var competitions = data.competitions;

        for (i = 0; i < competitions.length; i++) {
            const comp = competitions[i];
            
            if (comp.id == 2021) {
                matchday.push(comp.currentSeason.currentMatchday);
            }
        }

        console.log(matchday);
    });

    self.ajax(self.matchesURI, 'GET').done(function(data) {

        var matches = data.matches;
        var today = new Date;
        var currentRound = [];
        var currentRoundNo = matchday[0];

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
function data() {
   dataLadder();
   dataFixture();
}

function dateTime(d) {

    var date = new Date(d);

    function day(d) {
        var day = d.getDay();

        if (day == 0) {
            return 'Sunday';
        } else if (day == 1) {
            return 'Monday';
        } else if (day == 2) {
            return 'Tuesday';
        } else if (day == 3) {
            return 'Wednesday';
        } else if (day == 4) {
            return 'Thursday';
        } else if (day == 5) {
            return 'Friday';
        } else if (day == 6) {
            return 'Saturday';
        }
    }

    function month(d) {
        var m = d.getMonth();

        if (m == 0) {
            return 'Jan';
        } else if (m == 1) {
            return 'Feb';
        } else if (m == 2) {
            return 'Mar';
        } else if (m == 3) {
            return 'Apr';
        } else if (m == 4) {
            return 'May';
        } else if (m == 5) {
            return 'Jun';
        } else if (m == 6) {
            return 'Jul';
        } else if (m == 7) {
            return 'Aug';
        } else if (m == 8) {
            return 'Sep';
        } else if (m == 9) {
            return 'Oct';
        } else if (m == 10) {
            return 'Nov';
        } else if (m == 11) {
            return 'Dec';
        }
    }

    var dd = date.getDate();

    function time(d) {
        var h = d.getHours();
        var m = ('0'+d.getMinutes()).slice(-2);

        return h + ':' + m;
    }

    var dateObj = {
        day: day(date),
        month: month(date),
        date: dd,
        time: time(date)
    }

    return dateObj;
}

function fixtureItem(array) {

    var date = dateTime(array.utcDate);
    var match_status = array.status;

    if (match_status == "IN_PLAY") {

        $('.js-fixture').before(
            '<div class="c-fixture__game c-fixture__game--in-progress">' +
                '<div class= "c-fixture__date c-date" >' +
                    '<span class="c-date__day">' + date.day + '</span>' +
                    '<span class="c-date__month">' + date.month + '</span>' +
                    '<span class="c-date__date">' + date.date + '</span>' +
                    '<span class="c-date__time">LIVE</span>' +
                '</div >' +
                '<div class="c-fixture__team js-fixture-team-1">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Home") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.homeTeam.name)[0].code + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.score.fullTime.homeTeam + '</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Away") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.awayTeam.name)[0].code + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.score.fullTime.awayTeam + '</span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + '</div>' +
            '</div>'
        );

    } else if (match_status == "PAUSED") {

        $('.js-fixture').before(
            '<div class="c-fixture__game c-fixture__game--in-progress">' +
                '<div class= "c-fixture__date c-date" >' +
                    '<span class="c-date__day">' + date.day + '</span>' +
                    '<span class="c-date__month">' + date.month + '</span>' +
                    '<span class="c-date__date">' + date.date + '</span>' +
                    '<span class="c-date__time">HT</span>' +
                '</div >' +
                '<div class="c-fixture__team js-fixture-team-1">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Home") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.homeTeam.name)[0].code + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.score.fullTime.homeTeam + '</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Away") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.awayTeam.name)[0].code + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.score.fullTime.awayTeam + '</span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + '</div>' +
            '</div>'
        );

    }else if (match_status == "FINISHED") {

        $('.js-fixture').before(
            '<div class="c-fixture__game c-fixture__game--completed">' +
                '<div class= "c-fixture__date c-date" >' +
                    '<span class="c-date__day">' + date.day + '</span>' +
                    '<span class="c-date__month">' + date.month + '</span>' +
                    '<span class="c-date__date">' + date.date + '</span>' +
                    '<span class="c-date__time">FT</span>' +
                '</div >' +
                '<div class="c-fixture__team js-fixture-team-1">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Home") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.homeTeam.name)[0].code + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.score.fullTime.homeTeam + '</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Away") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.awayTeam.name)[0].code + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.score.fullTime.awayTeam + '</span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + '</div>' +
            '</div>'
        );

    } else {

        $('.js-fixture').before(
            '<div class="c-fixture__game">' +
                '<div class= "c-fixture__date c-date" >' + 
                    '<span class="c-date__day">' + date.day + '</span>' +
                    '<span class="c-date__month">' + date.month + '</span>' +
                    '<span class="c-date__date">' + date.date + '</span>' +
                    '<span class="c-date__time">' + date.time + '</span>' +
                '</div >' +
                '<div class="c-fixture__team js-fixture-team-1">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Home") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.homeTeam.name)[0].code + '</span>' +
                    '<span class="c-fixture__score js-score-text">-</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Away") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.awayTeam.name)[0].code + '</span>' +
                    '<span class="c-fixture__score js-score-text">-</span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + '</div>' +
            '</div>'
        );
    }
}
function kitImg(homename,awayname,location){
    
    if (location == "Home") {
        if (homename == 'Wolverhampton Wanderers FC') {
            return 'img/teams/WOL/Home.png';

        } else if (homename == 'Fulham FC') {
            return 'img/teams/FUL/Home.png';

        } else if (homename == 'Liverpool FC') {
            return 'img/teams/LIV/Home.png';

        } else if (homename == 'Manchester City FC') {
            return 'img/teams/MCI/Home.png';

        } else if (homename == 'Newcastle United FC') {
            return 'img/teams/NEW/Home.png';

        } else if (homename == 'Arsenal FC') {
            return 'img/teams/ARS/Home.png';

        } else if (homename == 'Chelsea FC') {
            return 'img/teams/CHE/Home.png';

        } else if (homename == 'Tottenham Hotspur FC') {
            return 'img/teams/TOT/Home.png';

        } else if (homename == 'Everton FC') {
            return 'img/teams/EVE/Home.png';

        } else if (homename == 'Manchester United FC') {
            return 'img/teams/MUN/Home.png';

        } else if (homename == 'Leicester City FC') {
            return 'img/teams/LEI/Home.png';

        } else if (homename == 'Burnley FC') {
            return 'img/teams/BUR/Home.png';

        } else if (homename == 'Huddersfield Town AFC') {
            return 'img/teams/HUD/Home.png';

        } else if (homename == 'Cardiff City FC') {
            return 'img/teams/CAR/Home.png';

        } else if (homename == 'West Ham United FC') {
            return 'img/teams/WHU/Home.png';

        } else if (homename == 'Southampton FC') {
            return 'img/teams/SOU/Home.png';

        } else if (homename == 'Crystal Palace FC') {
            return 'img/teams/CRY/Home.png';

        } else if (homename == 'Brighton & Hove Albion FC') {
            return 'img/teams/BHA/Home.png';

        } else if (homename == 'Watford FC') {
            return 'img/teams/WAT/Home.png';

        } else if (homename == 'AFC Bournemouth') {
            return 'img/teams/BOU/Home.png';
        
        } else if (homename == 'Norwich City FC') {
            return 'img/teams/NOR/Home.png';
        
        } else if (homename == 'Sheffield United FC') {
            return 'img/teams/SHE/Home.png';
        
        } else if (homename == 'Aston Villa FC') {
            return 'img/teams/AVI/Home.png';
        
        }

    } else if (location == "Away") {

        // Wolverhampton Wanderers FC - White
        if (awayname == "Wolverhampton Wanderers FC") {
            if (homename == "Fulham FC" || homename == "Tottenham Hotspur FC") {
                return 'img/teams/WOL/Home.png';
            } else {
                return 'img/teams/WOL/Away.png';
            }

        // Fulham FC - Blue
        } else if (awayname == "Fulham FC") {
            if (homename == "Chelsea FC" || homename == "Leicester City FC" || homename == "Cardiff City FC" || homename == "Everton FC") {
                return 'img/teams/FUL/Home.png';
            } else {
                return 'img/teams/FUL/Away.png';
            }

        // Liverpool FC - White
        } else if (awayname == "Liverpool FC") {
            if (homename == "Tottenham Hotspur FC" || homename == "Manchester City FC") {
                return 'img/teams/LIV/Third.png';
            } else {
                return 'img/teams/LIV/Away.png';
            }

        // Manchester City FC - Black
        } else if (awayname == "Manchester City FC") {
            if (homename == "Chelsea FC" || homename == "Leicester City FC" || homename == "Cardiff City FC" || homename == "Everton FC"){
                return 'img/teams/MCI/Home.png';
            } else {
                return 'img/teams/MCI/Away.png';
            }

        // Newcastle United FC - Dark Blue
        } else if (awayname == 'Newcastle United FC') {
            if (homename == "Manchester United FC" || homename == "Liverpool FC" || homename == "Arsenal FC" || homename == "AFC Bournemouth" || homename == "Watford FC" || homename == 'West Ham United FC' || homename == "Chelsea FC" || homename == "Leicester City FC" || homename == "Cardiff City FC" || homename == "Everton FC" || homename == "Crystal Palace FC") {
                return 'img/teams/NEW/Third.png';
            } else {
                return 'img/teams/NEW/Away.png';
            }

        // Arsenal FC - Navy Blue
        } else if (awayname == "Arsenal FC") {
            if (homename == "Chelsea FC" || homename == "Leicester City FC" || homename == "Cardiff City FC" || homename == "Everton FC") {
                return 'img/teams/ARS/Third.png';
            } else {
                return 'img/teams/ARS/Away.png';
            }

        // Chelsea FC - White
        } else if (awayname == "Chelsea FC") {
            if (homename == "Tottenham Hotspur FC" || homename == "Manchester City FC") {
                return 'img/teams/CHE/Home.png';
            } else {
                return 'img/teams/CHE/Away.png';
            }

        // Tottenham Hotspur FC - Navy Blue
        } else if (awayname == "Tottenham Hotspur FC") {
            if (homename == "Chelsea FC" || homename == "Leicester City FC" || homename == "Cardiff City FC" || homename == "Everton FC" || homename == "Newcastle United FC" || homename == "Fulham FC") {
                return 'img/teams/TOT/Third.png';
            } else {
                return 'img/teams/TOT/Away.png';
            }

        // Everton FC - Black
        } else if (awayname == "Everton FC") {
            if (homename == "Chelsea FC" || homename == "Leicester City FC" || homename == "Cardiff City FC" || homename == "Everton FC") {
                return 'img/teams/EVE/Third.png';
            } else {
                return 'img/teams/EVE/Away.png';
            }

        // Manchester United FC - Light Orange (White)
        } else if (awayname == "Manchester United FC") {
            if (homename == "Tottenham Hotspur FC" || homename == "Manchester City FC" || homename == "Wolverhampton Wanderers FC") {
                return 'img/teams/MUN/Home.png';
            } else {
                return 'img/teams/MUN/Away.png';
            }

        // Leicester City FC - Dark Grey
        } else if (awayname == "Leicester City FC") {
            if (homename == "Chelsea FC" || homename == "Leicester City FC" || homename == "Cardiff City FC" || homename == "Everton FC") {
                return 'img/teams/LEI/Third.png';
            } else {
                return 'img/teams/LEI/Away.png';
            }

        // Burnley FC - Black
        } else if (awayname == "Burnley FC") {
            if (homename == "Chelsea FC" || homename == "Leicester City FC" || homename == "Cardiff City FC" || homename == "Everton FC") {
                return 'img/teams/BUR/Third.png';
            } else {
                return 'img/teams/BUR/Away.png';
            }

        // Huddersfield Town AFC - Black & Red
        } else if (awayname == "Huddersfield Town AFC") {
            if (homename == "Manchester United FC" || homename == "Liverpool FC" || homename == "Arsenal FC" || homename == "AFC Bournemouth" || homename == "Watford FC" || homename == 'West Ham United FC') {
                return 'img/teams/HUD/Third.png';
            } else {
                return 'img/teams/HUD/Away.png';
            }

        // Cardiff City FC - White
        } else if (awayname == "Cardiff City FC") {
            if (homename == "Fulham FC" || homename == "Tottenham Hotspur FC") {
                return 'img/teams/CAR/Third.png';
            } else {
                return 'img/teams/CAR/Away.png';
            }

        // West Ham United FC - Dark Teal
        } else if (awayname == "West Ham United FC") {
            if (homename == "Chelsea FC" || homename == "Leicester City FC" || homename == "Cardiff City FC" || homename == "Everton FC" || homename == "Liverpool FC") {
                return 'img/teams/WHU/Third.png';
            } else {
                return 'img/teams/WHU/Away.png';
            }

        // Southampton FC - Yellow
        } else if (awayname == "Southampton FC") {
            if (homename == "Wolverhampton Wanderers FC"){
                return 'img/teams/SOU/Third.png';
            } else {
                return 'img/teams/SOU/Away.png';
            }

        // Crystal Palace FC - White
        } else if (awayname == "Crystal Palace FC") {
            if (homename == "Fulham FC" || homename == "Tottenham Hotspur FC") {
                return 'img/teams/CRY/Home.png';
            } else {
                return 'img/teams/CRY/Away.png';
            }

        // Brighton & Hove Albion FC - Green
        } else if (awayname == "Brighton & Hove Albion FC") {
            if (homename == "Chelsea FC" || homename == "Leicester City FC" || homename == "Cardiff City FC" || homename == "Everton FC") {
                return 'img/teams/BHA/Home.png';
            } else {
                return 'img/teams/BHA/Away.png';
            }

        // Watford FC - Green
        } else if (awayname == "Watford FC") {
            if (homename == "Chelsea FC" || homename == "Leicester City FC" || homename == "Cardiff City FC" || homename == "Everton FC") {
                return 'img/teams/WAT/Home.png';
            } else {
                return 'img/teams/WAT/Away.png';
            }

        // AFC Bournemouth - White
        } else if (awayname == "AFC Bournemouth") {
            if (homename == "Fulham FC" || homename == "Tottenham Hotspur FC") {
                return 'img/teams/BOU/Third.png';
            } else {
                return 'img/teams/BOU/Away.png';
            }
        
        // Norwich City FC - Red
        } else if (awayname == 'Norwich City FC') {
            if (homename == "Arsenal FC" || homename == "Liverpool FC" || homename == "Manchester United FC" || homename == "West Ham United FC" || homename == "Sheffield United FC" || homename == "Aston Villa FC" || homename == "AFC Bournemouth" || homename == "Southampton FC") {
                return 'img/teams/NOR/Home.png';
            } else {
                return 'img/teams/NOR/Away.png';
            }
        
        // Sheffield United FC - White
        } else if (awayname == 'Sheffield United FC') {
            if (homename == "Fulham FC" || homename == "Tottenham Hotspur FC" || homename == "Manchester City FC") {
                return 'img/teams/SHE/Home.png';
            } else {
                return 'img/teams/SHE/Away.png';
            }
        
        // Aston Villa - Light Blue 
        } else if (awayname == 'Aston Villa FC') {
            if (homename == "Fulham FC" || homename == "Tottenham Hotspur FC" || homename == "Manchester City FC") {
                return 'img/teams/AVI/Home.png';
            } else {
                return 'img/teams/AVI/Away.png';
            }
        
        }
    }
}

// Constructs the ladder Items
function ladderItem(array, number) {
    $('.c-ladder__item-' + number + ' div.c-ladder__team').children('span').text(teamAbrev(array.team.name)[0].name);  
    $('.c-ladder__item-' + number + ' div.c-ladder__team').children('img').attr('src', teamImg(array.team.name));  
    $('.c-ladder__item-' + number + ' div.c-ladder__played').text(array.playedGames);
    $('.c-ladder__item-' + number + ' div.c-ladder__wins').text(array.won);
    $('.c-ladder__item-' + number + ' div.c-ladder__draws').text(array.draw);
    $('.c-ladder__item-' + number + ' div.c-ladder__losses').text(array.lost);
    $('.c-ladder__item-' + number + ' div.c-ladder__points-for').text(array.goalsFor);
    $('.c-ladder__item-' + number + ' div.c-ladder__points-against').text(array.goalsAgainst);
    $('.c-ladder__item-' + number + ' div.c-ladder__percentage').text(array.goalDifference);
    $('.c-ladder__item-' + number + ' div.c-ladder__points').text(array.points);
}
function roundCalc(d) {
    var currentDate = new Date(d);
    var month = currentDate.getMonth();
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();

    // Gameday 1
    if (year == "2018" && month <= 7 && date <= 11) {
        return 1;

    // Gameday 2    
    } else if (year == "2018" && month == 7 && date <= 20){
        return 2;

    // Gameday 3
    } else if (year == "2018" && month == 7 && date <= 27){
        return 3;

    // Gameday 4
    } else if (year == "2018" && month == 7 && date <= 31 || year == "2018" && month == 8 && date <= 2){
        return 4;

    // Gameday 5
    } else if (year == "2018" && month == 8 && date <= 17){
        return 5;

    // Gameday 6
    } else if (year == "2018" && month == 8 && date <= 23){
        return 6;

    // Gameday 7
    } else if (year == "2018" && month == 8 && date <= 31 || year == "2018" && month == 9 && date <= 1){
        return 7;

    // Gameday 8
    } else if (year == "2018" && month == 9 && date <= 7){
        return 8;

    // Gameday 9
    } else if (year == "2018" && month == 9 && date <= 22){
        return 9;

    // Gameday 10
    } else if (year == "2018" && month == 9 && date <= 28){
        return 10;

    // Gameday 11
    } else if (year == "2018" && month == 9 && date <= 31 || year == "2018" && month == 10 && date <= 5){
        return 11;

    // Gameday 12
    } else if (year == "2018" && month == 10 && date <= 11){
        return 12;

    // Gameday 13
    } else if (year == "2018" && month == 10 && date <= 26){
        return 13;

    // Gameday 14
    } else if (year == "2018" && month == 10 && date <= 30 || year =="2018" && month == 11 && date <= 5){
        return 14;

    // Gameday 15
    } else if (year == "2018" && month == 11 && date <= 5){
        return 15;

    // Gameday 16
    } else if (year == "2018" && month == 11 && date <= 10){
        return 16;

    // Gameday 17
    } else if (year == "2018" && month == 11 && date <= 16){
        return 17;

    // Gameday 18
    } else if (year == "2018" && month == 11 && date <= 23){
        return 18;

    // Gameday 19
    } else if (year == "2018" && month == 11 && date <= 27){
        return 19;

    // Gameday 20
    } else if (year == "2018" && month == 11 && date <= 30){
        return 20;

    // Gameday 21
    } else if (year == "2019" && month == 0 && date <= 3){
        return 21;

    // Gameday 22
    } else if (year == "2019" && month == 0 && date <= 14){
        return 22;

    // Gameday 23
    } else if (year == "2019" && month == 0 && date <= 20){
        return 23;

    // Gameday 24
    } else if (year == "2019" && month == 0 && date <= 30){
        return 24;

    // Gameday 25
    } else if (year == "2019" && month == 1 && date <= 2){
        return 25;

    // Gameday 26
    } else if (year == "2019" && month == 1 && date <= 12){
        return 26;

    }

    
}
function teamAbrev(array){
    var team = array;

    if (team == 'Wolverhampton Wanderers FC') {
        return [{
            code: 'WOL',
            name: 'Wolves'
        }];
    } else if (team == 'Fulham FC') {
        return [{
            code: 'FUL',
            name: 'Fulham'
        }];
    } else if (team == 'Liverpool FC') {
        return [{
            code: 'LIV',
            name: 'Liverpool'
        }];
    } else if (team == 'Manchester City FC') {
        return [{
            code: 'MCI',
            name: 'Man City'
        }];
    } else if (team == 'Newcastle United FC') {
        return [{
            code: 'NEW',
            name: 'Newcastle'
        }];
    } else if (team == 'Arsenal FC') {
        return [{
            code: 'ARS',
            name: 'Arsenal'
        }];
    } else if (team == 'Chelsea FC') {
        return [{
            code: 'CHE',
            name: 'Chelsea'
        }];
    } else if (team == 'Tottenham Hotspur FC') {
        return [{
            code: 'TOT',
            name: 'Totenham'
        }];
    } else if (team == 'Everton FC') {
        return [{
            code: 'EVE',
            name: 'Everton'
        }];
    } else if (team == 'Manchester United FC') {
        return [{
            code: 'MUN',
            name: 'Man United'
        }];
    } else if (team == 'Leicester City FC') {
        return [{
            code: 'LEI',
            name: 'Leicester'
        }];
    } else if (team == 'Burnley FC') {
        return [{
            code: 'BUR',
            name: 'Burnley'
        }];
    } else if (team == 'Huddersfield Town AFC') {
        return [{
            code: 'HUD',
            name: 'Huddersfield'
        }];
    } else if (team == 'Cardiff City FC') {
        return [{
            code: 'CAR',
            name: 'Cardiff'
        }];
    } else if (team == 'West Ham United FC') {
        return [{
            code: 'WHU',
            name: 'West Ham'
        }];
    } else if (team == 'Southampton FC') {
        return [{
            code: 'SOU',
            name: 'Southampton'
        }];
    } else if (team == 'Crystal Palace FC') {
        return [{
            code: 'CRY',
            name: 'Crystal Palace'
        }];
    } else if (team == 'Brighton & Hove Albion FC') {
        return [{
            code: 'BHA',
            name: 'Brighton'
        }];
    } else if (team == 'Watford FC') {
        return [{
            code: 'WAT',
            name: 'Watford'
        }];
    } else if (team == 'AFC Bournemouth') {
        return [{
            code: 'BOU',
            name: 'Bournemouth'
        }];
    } else if (team == 'Norwich City FC') {
        return [{
            code: 'NOR',
            name: 'Norwich Cty'
        }];
    } else if (team == 'Sheffield United FC') {
        return [{
            code: 'SHE',
            name: 'Sheffield Utd'
        }];
    } else if (team == 'Aston Villa FC') {
        return [{
            code: 'AVI',
            name: 'Aston Villa'
        }];
    }
}

// Applies the correct team image to the referenced team code.
function teamImg(team) {
    if (team == 'Wolverhampton Wanderers FC') {
        return 'img/teams/WOL/Logo.png';
    } else if (team == 'Fulham FC') {
        return 'img/teams/FUL/Logo.png';
    } else if (team == 'Liverpool FC') {
        return 'img/teams/LIV/Logo.png';
    } else if (team == 'Manchester City FC') {
        return 'img/teams/MCI/Logo.png';
    } else if (team == 'Newcastle United FC') {
        return 'img/teams/NEW/Logo.png';
    } else if (team == 'Arsenal FC') {
        return 'img/teams/ARS/Logo.png';
    } else if (team == 'Chelsea FC') {
        return 'img/teams/CHE/Logo.png';
    } else if (team == 'Tottenham Hotspur FC') {
        return 'img/teams/TOT/Logo.png';
    } else if (team == 'Everton FC') {
        return 'img/teams/EVE/Logo.png';
    } else if (team == 'Manchester United FC') {
        return 'img/teams/MUN/Logo.png';
    } else if (team == 'Leicester City FC') {
        return 'img/teams/LEI/Logo.png';
    } else if (team == 'Burnley FC') {
        return 'img/teams/BUR/Logo.png';
    } else if (team == 'Huddersfield Town AFC') {
        return 'img/teams/HUD/Logo.png';
    } else if (team == 'Cardiff City FC') {
        return 'img/teams/CAR/Logo.png';
    } else if (team == 'West Ham United FC') {
        return 'img/teams/WHU/Logo.png';
    } else if (team == 'Southampton FC') {
        return 'img/teams/SOU/Logo.png';
    } else if (team == 'Crystal Palace FC') {
        return 'img/teams/CRY/Logo.png';
    } else if (team == 'Brighton & Hove Albion FC') {
        return 'img/teams/BHA/Logo.png';
    } else if (team == 'Watford FC') {
        return 'img/teams/WAT/Logo.png';
    } else if (team == 'AFC Bournemouth') {
        return 'img/teams/BOU/Logo.png';
    } else if (team == 'Norwich City FC') {
        return 'img/teams/NOR/Logo.png';
    } else if (team == 'Sheffield United FC') {
        return 'img/teams/SHE/Logo.png';
    } else if (team == 'Aston Villa FC') {
        return 'img/teams/AVI/Logo.png';
    }
}
//
// Layout - Vertically Centered
// ==========================================================================

// ***
// This function vertically centers an object element within 
// its parent element by calculating the height of the parent,
// the height of the child and adding padding to the top and 
// bottom of the child element.
//
// Parent Element
// --------------
// The parent element must be a jQuery object.
// eg: $('.o-vert-center')
//
// Child Element
// -------------
// The child element must be a direct child of the parent and
// be passed through the function with only its classname.
// eg: '.o-vert-center__object'
// *

function vertCenter(element, child) {

    var parentHeight = element.parent().height();
    // This will give the element the same height
    // and line-height as it's parent container.
    element.css({
        'height': parentHeight + 'px',
        'line-height': parentHeight + 'px'
    });
    
    element.children(child).css({
        'height': element.children(child).height(),
        'padding-top': ( parentHeight - element.children(child).height() )/2 + 'px',
        'padding-bottom': ( parentHeight - element.children(child).height() )/2 + 'px'
    });
}

function clearStyles(element, child) {
    element.attr('style', '');
    child.attr('style', '');
}

// Function applied to the following parent/child classes:
// vertCenter($('.o-vert-center'), '.o-vert-center__object');

// On window resize clear previous styles then re-run the function.
$(window).on('resize', function() {
    // clearStyles($('.o-vert-center'), $('.o-vert-center__object'));
    // vertCenter($('.o-vert-center'), '.o-vert-center__object');
});


//
// UI - Buttons
// ==========================================================================

// Variables
// var gitButton = document.getElementById('js-button-github');

// gitButton.addEventListener('click', function(){
//     window.open('https://github.com/Toshibot/webapp-boilerplate', '_blank');
// });
