
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