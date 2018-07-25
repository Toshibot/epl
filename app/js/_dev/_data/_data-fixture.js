
// Data - Fixture/Results

function dataFixture() {
    $.getJSON('https://www.openligadb.de/api/getcurrentgroup/pl', function(json){
        $('.js-fixture-round').text(json.GroupName);
    })

    
    // Dummy Dev File
    $.getJSON('http://api.football-data.org/v1/fixtures', function(json){

        console.log('fixture loaded');
        console.log(json);

            for (i = 0; i < json.length; i++) {
                const element = json[i];
                fixtureItem(element);
            }

    });

}

