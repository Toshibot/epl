// ==========================================================================
// Initialisation
// ==========================================================================

// Core Functions 
dataLadder();
dataFixture();
// ==========================================================================
// Fixture - Functions
// ==========================================================================


// 
// Ladder
// ======

var ladder = function(){

    // GWS
    var giants = $('.c-ladder__team:contains("Greater Western Sydney")'); 
    giants.children('span').text('GWS');
    giants.children('img').attr('src', 'img/teams/gws.svg');

    var hawks = $('.c-ladder__team:contains("Hawthorn")');
    hawks.children('img').attr('src', 'img/teams/hawks.svg');

    var suns = $('.c-ladder__team:contains("Gold Coast")');
    suns.children('img').attr('src', 'img/teams/suns.svg');

    var swans = $('.c-ladder__team:contains("Sydney")');
    swans.children('img').attr('src', 'img/teams/swans.svg');

    var saints = $('.c-ladder__team:contains("St Kilda")');
    saints.children('img').attr('src', 'img/teams/saints.svg');

    var tigers = $('.c-ladder__team:contains("Richmond")');
    tigers.children('img').attr('src', 'img/teams/tigers.svg');

    var bombers = $('.c-ladder__team:contains("Essendon")');
    bombers.children('img').attr('src', 'img/teams/bombers.svg');

    var cats = $('.c-ladder__team:contains("Geelong")');
    cats.children('img').attr('src', 'img/teams/cats.svg');

    var demons = $('.c-ladder__team:contains("Melbourne")');
    demons.children('img').attr('src', 'img/teams/demons.svg');

    var crows = $('.c-ladder__team:contains("Adelaide")');
    crows.children('img').attr('src', 'img/teams/crows.svg');

    var blues = $('.c-ladder__team:contains("Carlton")');
    blues.children('img').attr('src', 'img/teams/blues.svg');
    
    // Port Adelaide
    var port = $('.c-ladder__team:contains("Port Adelaide")');
    port.children('img').attr('src', 'img/teams/port.svg');

    var lions = $('.c-ladder__team:contains("Brisbane")');
    lions.children('img').attr('src', 'img/teams/lions.svg');

    var eagles = $('.c-ladder__team:contains("West Coast")');
    eagles.children('img').attr('src', 'img/teams/eagles.svg');

    var kangaroos = $('.c-ladder__team:contains("North Melbourne")');
    kangaroos.children('img').attr('src', 'img/teams/kangaroos.svg');

    var magpies = $('.c-ladder__team:contains("Collingwood")');
    magpies.children('img').attr('src', 'img/teams/magpies.svg');

    var dockers = $('.c-ladder__team:contains("Fremantle")');
    dockers.children('img').attr('src', 'img/teams/dockers.svg');

    var dogs = $('.c-ladder__team:contains("Bulldogs")');
    dogs.children('img').attr('src', 'img/teams/dogs.svg');

}

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

        $('.js-fixture-round').text("Gameday " + currentRoundNo);

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

    if (match_status == true) {

        $('.js-fixture').before(
            '<div class="c-fixture__game c-fixture__game--completed">' +
                '<div class= "c-fixture__date c-date" >' +
                    '<span class="c-date__day">' + date.day + '</span>' +
                    '<span class="c-date__month">' + date.month + '</span>' +
                    '<span class="c-date__date">' + date.date + '</span>' +
                    '<span class="c-date__time">' + date.time + '</span>' +
                '</div >' +
                '<div class="c-fixture__team js-fixture-team-1">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Home") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.homeTeam.name) + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.score.fullTime.homeTeam + '</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Away") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.awayTeam.name) + '</span>' +
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
                    '<span class="js-team-text">' + teamAbrev(array.homeTeam.name) + '</span>' +
                    '<span class="c-fixture__score js-score-text">-</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Away") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.awayTeam.name) + '</span>' +
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
            return 'img/teams/MUN/Home.png';

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
        }

    // Away Team Kit Switching

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

        // Liverpool FC - Purple (Blue & Black)
        } else if (awayname == "Liverpool FC") {
            if (homename == "Chelsea FC" || homename == "Leicester City FC" || homename == "Cardiff City FC" || homename == "Everton FC") {
                return 'img/teams/LIV/Third.png';
            } else {
                return 'img/teams/LIV/Away.png';
            }

        // Manchester City FC - Navy Blue
        } else if (awayname == "Manchester City FC") {
            if (homename == "Chelsea FC" || homename == "Leicester City FC" || homename == "Cardiff City FC" || homename == "Everton FC"){
                return 'img/teams/MCI/Home.png';
            } else {
                return 'img/teams/MCI/Away.png';
            }

        // Newcastle United FC - Navy & Red
        } else if (awayname == 'Newcastle United FC') {
            if (homename == "Manchester United FC" || homename == "Liverpool FC" || homename == "Arsenal FC" || homename == "AFC Bournemouth" || homename == "Watford FC" || homename == 'West Ham United FC') {
                return 'img/teams/NEW/Home.png';
            } else {
                return 'img/teams/NEW/Away.png';
            }

        // Arsenal FC - Navy Blue
        } else if (awayname == "Arsenal FC") {
            if (homename == "Chelsea FC" || homename == "Leicester City FC" || homename == "Cardiff City FC" || homename == "Everton FC") {
                return 'img/teams/ARS/Home.png';
            } else {
                return 'img/teams/ARS/Away.png';
            }

        // Chelsea FC - Yellow
        } else if (awayname == "Chelsea FC") {
            if (homename == "Wolverhampton Wanderers FC") {
                return 'img/teams/CHE/Home.png';
            } else {
                return 'img/teams/CHE/Away.png';
            }

        // Tottenham Hotspur FC - Navy Blue
        } else if (awayname == "Tottenham Hotspur FC") {
            if (homename == "Chelsea FC" || homename == "Leicester City FC" || homename == "Cardiff City FC" || homename == "Everton FC") {
                return 'img/teams/TOT/Home.png';
            } else {
                return 'img/teams/TOT/Away.png';
            }

        // Everton FC - Black
        } else if (awayname == "Everton FC") {
            if (homename == "Chelsea FC" || homename == "Leicester City FC" || homename == "Cardiff City FC" || homename == "Everton FC") {
                return 'img/teams/EVE/Home.png';
            } else {
                return 'img/teams/EVE/Away.png';
            }

        // Manchester United FC - Navy Blue
        } else if (awayname == "Manchester United FC") {
            if (homename == "Chelsea FC" || homename == "Leicester City FC" || homename == "Cardiff City FC" || homename == "Everton FC") {
                return 'img/teams/MUN/Home.png';
            } else {
                return 'img/teams/MUN/Away.png';
            }

        // Leicester City FC - Dark Grey
        } else if (awayname == "Leicester City FC") {
            if (homename == "") {
                return 'img/teams/LEI/Home.png';
            } else {
                return 'img/teams/LEI/Away.png';
            }

        // Burnley FC - Unknown
        } else if (awayname == "Burnley FC") {
            if (homename == "") {
                return 'img/teams/BUR/Home.png';
            } else {
                return 'img/teams/BUR/Away.png';
            }

        // Huddersfield Town AFC - Black & Red
        } else if (awayname == "Huddersfield Town AFC") {
            if (homename == "Manchester United FC" || homename == "Liverpool FC" || homename == "Arsenal FC" || homename == "AFC Bournemouth" || homename == "Watford FC" || homename == 'West Ham United FC') {
                return 'img/teams/HUD/Home.png';
            } else {
                return 'img/teams/HUD/Away.png';
            }

        // Cardiff City FC - White
        } else if (awayname == "Cardiff City FC") {
            if (homename == "Fulham FC" || homename == "Tottenham Hotspur FC") {
                return 'img/teams/CAR/Home.png';
            } else {
                return 'img/teams/CAR/Away.png';
            }

        // West Ham United FC - Dark Teal
        } else if (awayname == "West Ham United FC") {
            if (homename == "Chelsea FC" || homename == "Leicester City FC" || homename == "Cardiff City FC" || homename == "Everton FC") {
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
                return 'img/teams/BOU/Home.png';
            } else {
                return 'img/teams/BOU/Away.png';
            }
        }
    }
}

// Constructs the ladder Items
function ladderItem(array, number) {
    $('.c-ladder__item-' + number + ' div.c-ladder__team').children('span').text(array.team.name);  
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
    if (year == "2018" && month <= 8) {
        return 1;

    // Gameday 2    
    } else if (year == "2018" && month == 8 && date <= 20){
        return 2;

    // Gameday 3
    } else if (year == "2018" && month == 8 && date <= 27){
        return 3;

    // Gameday 4
    } else if (year == "2018" && month == 8 && date <= 31 || year == "2018" && month == 9 && date <= 7){
        return 4;

    // Gameday 5
    } else if (year == "2018" && month == 9 && date <= 17){
        return 5;

    }
}
function teamAbrev(array){
    var team = array;

    if (team == 'Wolverhampton Wanderers FC') {
        return 'WOL';
    } else if (team == 'Fulham FC') {
        return 'FUL';
    } else if (team == 'Liverpool FC') {
        return 'LIV';
    } else if (team == 'Manchester City FC') {
        return 'MCI';
    } else if (team == 'Newcastle United FC') {
        return 'NEW';
    } else if (team == 'Arsenal FC') {
        return 'ARS';
    } else if (team == 'Chelsea FC') {
        return 'CHE';
    } else if (team == 'Tottenham Hotspur FC') {
        return 'TOT';
    } else if (team == 'Everton FC') {
        return 'EVE';
    } else if (team == 'Manchester United FC') {
        return 'MUN';
    } else if (team == 'Leicester City FC') {
        return 'LEI';
    } else if (team == 'Burnley FC') {
        return 'BUR';
    } else if (team == 'Huddersfield Town AFC') {
        return 'HUD';
    } else if (team == 'Cardiff City FC') {
        return 'CAR';
    } else if (team == 'West Ham United FC') {
        return 'WHU';
    } else if (team == 'Southampton FC') {
        return 'SOU';
    } else if (team == 'Crystal Palace FC') {
        return 'CRY';
    } else if (team == 'Brighton & Hove Albion FC') {
        return 'BHA';
    } else if (team == 'Watford FC') {
        return 'WAT';
    } else if (team == 'AFC Bournemouth') {
        return 'BOU';
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
