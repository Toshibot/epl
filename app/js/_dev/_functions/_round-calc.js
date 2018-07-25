function roundCalc(d) {
    var currentDate = new Date(d);
    var month = currentDate.getMonth();
    var date = currentDate.getDate();

    // Round 3
    if (month == 3 && date <= 8) {
        return 3;

    // Round 4    
    } else if (month == 3 && date <= 15) {
        return 4;

    // Round 5    
    } else if (month == 3 && date <= 25) {
        return 5;

    // Round 6
    } else if (month == 3 && date <= 29) {
        return 6;

    // Round 7
    } else if (month == 4 && date <= 6) {
        return 7;

    // Round 8    
    } else if (month == 4 && date <= 13) {
        return 8;

    // Round 9
    } else if (month == 4 && date <= 20) {
        return 9;

    // Round 10
    } else if (month == 4 && date <= 27) {
        return 10;

    // Round 11
    } else if (month == 4 && date <= 31 || month == 5 && date <= 3) {
        return 11;

    // Round 12
    } else if (month == 5 && date <= 11) {
        return 12;

    // Round 13
    } else if (month == 5 && date <= 17) {
        return 13;

    // Round 14
    } else if (month == 5 && date <= 24) {
        return 14;

    // Round 15
    } else if (month == 5 && date <= 31 || month == 6 && date <= 1) {
        return 15;

    // Round 16
    } else if (month == 6 && date <= 8) {
        return 16;

    // Round 17
    } else if (month == 6 && date <= 15) {
        return 17;

    // Round 18
    } else if (month == 6 && date <= 22) {
        return 18;

    // Round 19
    } else if (month == 6 && date <= 29) {
        return 19;

    // Round 20
    } else if (month == 7 && date <= 5) {
        return 20;

    // Round 21
    } else if (month == 7 && date <= 12) {
        return 21;

    // Round 22
    } else if (month == 7 && date <= 19) {
        return 22;

    // Round 23
    } else if (month == 7 && date <= 23) {
        return 23;
    }

}