function getGoalQuestion1() {
    return $('.goalQuestion1').val();
}

function getGoalQuestion2() {
    return $('.goalQuestion2').val();
}

function getGoalQuestion3() {
    return $('.goalQuestion3').val();
}

function storeQuestions() {
    myStorage = window.localStorage;
    myStorage.setItem('goalQuestion1', getGoalQuestion1());
    myStorage.setItem('goalQuestion2', getGoalQuestion2());
    myStorage.setItem('goalQuestion3', getGoalQuestion3());
}
