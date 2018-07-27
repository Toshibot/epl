function roundCalc(d) {
    var currentDate = new Date(d);
    var month = currentDate.getMonth();
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();

    // Round 1
    if (year == "2018" && month <= 8) {
        return 1;

    // Round 2    
    } else if (year == "2018" && month == 8 && date <= 20){
        return 2
    }
}