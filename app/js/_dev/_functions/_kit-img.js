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