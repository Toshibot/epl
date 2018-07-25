
// Constructs the ladder Items
function ladderItem(array, number) {
    $('.c-ladder__item-' + number + ' div.c-ladder__team').children('span').text(array.TeamName);  
    $('.c-ladder__item-' + number + ' div.c-ladder__team').children('img').attr('src', teamImg(array.TeamName));  
    $('.c-ladder__item-' + number + ' div.c-ladder__played').text(array.Matches);
    $('.c-ladder__item-' + number + ' div.c-ladder__wins').text(array.Won);
    $('.c-ladder__item-' + number + ' div.c-ladder__draws').text(array.Draw);
    $('.c-ladder__item-' + number + ' div.c-ladder__losses').text(array.Lost);
    $('.c-ladder__item-' + number + ' div.c-ladder__points-for').text(array.Goals);
    $('.c-ladder__item-' + number + ' div.c-ladder__points-against').text(array.OpponentGoals);
    $('.c-ladder__item-' + number + ' div.c-ladder__percentage').text(array.GoalDiff);
    $('.c-ladder__item-' + number + ' div.c-ladder__points').text(array.Points);
}