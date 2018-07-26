// ==========================================================================
// Initialisation
// ==========================================================================

// Core Functions 
dataLadder();
dataFixture();

// Data - Fixture/Results

function dataFixture() {

    var self = this;
    self.tasksURI = "http://api.football-data.org/v2/competitions/2021/matches";

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

        $('.js-fixture-round').text(currentRoundNo);

        for (i = 0; i < matches.length; i++) {
            const element = matches[i];
            
            if (element.matchday == currentRoundNo) {
                currentRound.push(element);
            }
        }

        console.log(currentRound);

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
    self.tasksURI = "http://api.football-data.org/v2/competitions/2021/standings";

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


function dateTime(d) {

    var date = new Date(d);

    function day(d) {
        var day = d.getDay();

        if (day == 0) {
            return 'Sonntag';
        } else if (day == 1) {
            return 'Montag';
        } else if (day == 2) {
            return 'Dienstag';
        } else if (day == 3) {
            return 'Mittwoch';
        } else if (day == 4) {
            return 'Donnerstag';
        } else if (day == 5) {
            return 'Freitag';
        } else if (day == 6) {
            return 'Samstag';
        }
    }

    function month(d) {
        var m = d.getMonth();

        if (m == 0) {
            return 'Jan';
        } else if (m == 1) {
            return 'Feb';
        } else if (m == 2) {
            return 'Mär';
        } else if (m == 3) {
            return 'Apr';
        } else if (m == 4) {
            return 'Mai';
        } else if (m == 5) {
            return 'Jun';
        } else if (m == 6) {
            return 'Jul';
        } else if (m == 7) {
            return 'Aug';
        } else if (m == 8) {
            return 'Sep';
        } else if (m == 9) {
            return 'Okt';
        } else if (m == 10) {
            return 'Nov';
        } else if (m == 11) {
            return 'Dez';
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
                    '<img class="js-team-img" src="' + kitImg(array.Team1.TeamName,array.Team2.TeamName,"Home") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.Team1.TeamName) + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.MatchResults[1].PointsTeam1 + '</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + kitImg(array.Team1.TeamName,array.Team2.TeamName,"Away") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.Team2.TeamName) + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.MatchResults[1].PointsTeam2 + '</span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + array.Location + '</div>' +
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
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name,array.awayTeam.name,"Home") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.homeTeam.name) + '</span>' +
                    '<span class="c-fixture__score js-score-text">-</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name,array.awayTeam.name,"Away") + '" />' +
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
        if (homename == '1. FC Nürnberg') {
            return 'img/teams/Nuernberg/Home.png';

        } else if (homename == '1. FSV Mainz 05') {
            return 'img/teams/Mainz/Home.png';

        } else if (homename == 'Bayer Leverkusen') {
            return 'img/teams/Leverkusen/Home.png';

        } else if (homename == 'Borussia Dortmund') {
            return 'img/teams/Dortmund/Home.png';

        } else if (homename == 'Borussia Mönchengladbach') {
            return 'img/teams/Gladbach/Home.png';

        } else if (homename == 'Eintracht Frankfurt') {
            return 'img/teams/Frankfurt/Home.png';

        } else if (homename == 'FC Augsburg') {
            return 'img/teams/Augsburg/Home.png';

        } else if (homename == 'FC Bayern') {
            return 'img/teams/Bayern/Home.png';

        } else if (homename == 'FC Schalke 04') {
            return 'img/teams/Schalke/Home.png';

        } else if (homename == 'Fortuna Düsseldorf') {
            return 'img/teams/Duesseldorf/Home.png';

        } else if (homename == 'Hannover 96') {
            return 'img/teams/Hannover/Home.png';

        } else if (homename == 'Hertha BSC') {
            return 'img/teams/Hertha/Home.png';

        } else if (homename == 'RB Leipzig') {
            return 'img/teams/Leipzig/Home.png';

        } else if (homename == 'SC Freiburg') {
            return 'img/teams/Freiburg/Home.png';

        } else if (homename == 'TSG 1899 Hoffenheim') {
            return 'img/teams/Hoffenheim/Home.png';

        } else if (homename == 'VfB Stuttgart') {
            return 'img/teams/Stuttgart/Home.png';

        } else if (homename == 'VfL Wolfsburg') {
            return 'img/teams/Wolfsburg/Home.png';

        } else if (homename == 'Werder Bremen') {
            return 'img/teams/Bremen/Home.png';
        }

    // Away Team Kit Switching

    } else if (location == "Away") {

        // 1. FC Nürnberg - White
        if (awayname == "1. FC Nürnberg") {
            if (homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig") {
                return 'img/teams/Nuernberg/Home.png';
            } else {
                return 'img/teams/Nuernberg/Away.png';
            }

        // 1. FSV Mainz 05 - Blue
        } else if (awayname == "1. FSV Mainz 05") {
            if (homename == "FC Schalke 04" || homename == "Hertha BSC" || homename == "TSG 1899 Hoffenheim") {
                return 'img/teams/Mainz/Third.png';
            } else {
                return 'img/teams/Mainz/Away.png';
            }

        // Bayer Leverkusen - White
        } else if (awayname == "Bayer Leverkusen") {
            if (homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig") {
                return 'img/teams/Leverkusen/Third.png';
            } else {
                return 'img/teams/Leverkusen/Away.png';
            }

        // Borussia Dortmund - Red
        } else if (awayname == "Borussia Dortmund") {
            if (homename == "SC Freiburg" || homename == "FC Bayern" || homename == "1. FC Nürnberg" || homename == "1. FSV Mainz 05" || homename == "Hannover 96" || homename == "Fortuna Düsseldorf"){
                return 'img/teams/Dortmund/Home.png';
            } else {
                return 'img/teams/Dortmund/Away.png';
            }

        // Borussia Mönchengladbach - Black
        } else if (awayname == 'Borussia Mönchengladbach') {
            if (homename == "Eintracht Frankfurt" || homename == "Bayer Leverkusen") {
                return 'img/teams/Gladbach/Home.png';
            } else {
                return 'img/teams/Gladbach/Away.png';
            }

        // Eintracht Frankfurt - White
        } else if (awayname == "Eintracht Frankfurt") {
            if (homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig") {
                return 'img/teams/Frankfurt/Home.png';
            } else {
                return 'img/teams/Frankfurt/Away.png';
            }

        // FC Augsburg - Green
        } else if (awayname == "FC Augsburg") {
            if (homename == "Werder Bremen" || homename == "VfL Wolfsburg") {
                return 'img/teams/Augsburg/Third.png';
            } else {
                return 'img/teams/Augsburg/Away.png';
            }

        // FC Bayern - Light Green
        } else if (awayname == "FC Bayern") {
            return 'img/teams/Bayern/Away.png';

        // FC Schalke 04 - White
        } else if (awayname == "FC Schalke 04") {
            if (homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig") {
                return 'img/teams/Schalke/Home.png';
            } else {
                return 'img/teams/Schalke/Away.png';
            }

        // Fortuna Düsseldorf - White (Possible Third Kit Coming)
        } else if (awayname == "Fortuna Düsseldorf") {
            if (homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig") {
                return 'img/teams/Duesseldorf/Home.png';
            } else {
                return 'img/teams/Duesseldorf/Away.png';
            }

        // Hannover 96 - Black
        } else if (awayname == "Hannover 96") {
            if (homename == "Eintracht Frankfurt" || homename == "Bayer Leverkusen") {
                return 'img/teams/Hannover/Home.png';
            } else {
                return 'img/teams/Hannover/Away.png';
            }

        // Hertha BSC - Black
        } else if (awayname == "Hertha BSC") {
            if (homename == "Eintracht Frankfurt" || homename == "Bayer Leverkusen") {
                return 'img/teams/Hertha/Home.png';
            } else {
                return 'img/teams/Hertha/Away.png';
            }

        // RB Leipzig - Dark Blue (Black and Blue)
        } else if (awayname == "RB Leipzig") {
            if (homename == "Eintracht Frankfurt" || homename == "Bayer Leverkusen" || homename == "FC Schalke 04" || homename == "Hertha BSC" || homename == "TSG 1899 Hoffenheim") {
                return 'img/teams/Leipzig/Home.png';
            } else {
                return 'img/teams/Leipzig/Away.png';
            }

        // SC Freiburg - White
        } else if (awayname == "SC Freiburg") {
            if (homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig") {
                return 'img/teams/Freiburg/Home.png';
            } else {
                return 'img/teams/Freiburg/Away.png';
            }

        // TSG 1899 Hoffenheim - White
        } else if (awayname == "TSG 1899 Hoffenheim") {
            if (homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig") {
                return 'img/teams/Hoffenheim/Third.png';
            } else {
                return 'img/teams/Hoffenheim/Away.png';
            }

        // VfB Stuttgart - Red
        } else if (awayname == "VfB Stuttgart") {
            if (homename == "SC Freiburg" || homename == "FC Bayern" || homename == "1. FC Nürnberg" || homename == "1. FSV Mainz 05" || homename == "Hannover 96" || homename == "Fortuna Düsseldorf"){
                return 'img/teams/Stuttgart/Third.png';
            } else {
                return 'img/teams/Stuttgart/Away.png';
            }

        // VfL Wolfsburg - White
        } else if (awayname == "VfL Wolfsburg") {
            if (homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig") {
                return 'img/teams/Wolfsburg/Home.png';
            } else {
                return 'img/teams/Wolfsburg/Away.png';
            }

        // Werder Bremen - Black
        } else if (awayname == "Werder Bremen") {
            if (homename == "Eintracht Frankfurt" || homename == "Bayer Leverkusen") {
                return 'img/teams/Bremen/Third.png';
            } else {
                return 'img/teams/Bremen/Away.png';
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

    // Round 1
    if (month <= 8) {
        return 1;

        
    } 
}
function teamAbrev(array){
    var team = array;

    if (team == '1. FC Nürnberg') {
        return 'FCN';
    } else if (team == '1. FSV Mainz 05') {
        return 'MAI';
    } else if (team == 'Bayer Leverkusen') {
        return 'B04';
    } else if (team == 'Borussia Dortmund') {
        return 'DOR';
    } else if (team == 'Borussia Mönchengladbach') {
        return 'BMG';
    } else if (team == 'Eintracht Frankfurt') {
        return 'SGE';
    } else if (team == 'FC Augsburg') {
        return 'AUG';
    } else if (team == 'FC Bayern') {
        return 'BAY';
    } else if (team == 'FC Schalke 04') {
        return 'S04';
    } else if (team == 'Fortuna Düsseldorf') {
        return 'DU';
    } else if (team == 'Hannover 96') {
        return 'HAN';
    } else if (team == 'Hertha BSC') {
        return 'BSC';
    } else if (team == 'RB Leipzig') {
        return 'RBL';
    } else if (team == 'SC Freiburg') {
        return 'SCF';
    } else if (team == 'TSG 1899 Hoffenheim') {
        return 'TSG';
    } else if (team == 'VfB Stuttgart') {
        return 'STU';
    } else if (team == 'VfL Wolfsburg') {
        return 'WOB';
    } else if (team == 'Werder Bremen') {
        return 'SVW';
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