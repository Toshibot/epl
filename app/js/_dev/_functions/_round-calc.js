function roundCalc(d) {
    var currentDate = new Date(d);
    var month = currentDate.getMonth();
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();

    // Gameday 1
    if (year == "2018" && month <= 7 && date <= 12) {
        return 1;

    // Gameday 2    
    } else if (year == "2018" && month == 7 && date <= 21){
        return 2;

    // Gameday 3
    } else if (year == "2018" && month == 7 && date <= 28){
        return 3;

    // Gameday 4
    } else if (year == "2018" && month == 7 && date <= 31 || year == "2018" && month == 9 && date <= 8){
        return 4;

    // Gameday 5
    } else if (year == "2018" && month == 8 && date <= 18){
        return 5;

    // Gameday 6
    } else if (year == "2018" && month == 8 && date <= 24){
        return 6;

    }
}