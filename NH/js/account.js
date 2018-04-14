$( document ).ready(function() {
    populateGoalQuestions();
});

myStorage = window.localStorage;
var goalQuestion1 = myStorage.getItem('goalQuestion1');
var goalQuestion2 = myStorage.getItem('goalQuestion2');
var goalQuestion3 = myStorage.getItem('goalQuestion3');

function populateGoalQuestions() {
    $('.profileGoalQuestion1').text(goalQuestion1);
    $('.profileGoalQuestion2').text(goalQuestion2);
    $('.profileGoalQuestion3').text(goalQuestion3);
}
