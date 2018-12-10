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

    }

    
}