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

        // Newcastle United FC - Navy & Red
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