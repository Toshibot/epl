
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