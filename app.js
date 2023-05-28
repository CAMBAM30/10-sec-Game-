$(document).ready(function() {
    var myQuestion;
    var interval;
    var timeRemaining = 10;
    var Score = 0;
    var highScore = 0;

    var fixTimeRemaining = function (amount) {
        timeRemaining += amount;
        $('#time-Remaining').text(timeRemaining);
    };
    var fixScore = function (amount) {
        Score += amount;
        $('#Score').text(Score);
    };
    var highScore = function ()
    var beginGame = function () {
        if (!interval) {
            if (timeRemaining === 0){
                fixTimeRemaining(10);
                fixScore(-Score);
            }
            interval = setInterval(function () {
                fixTimeRemaining(-1);
                if(timeRemaining === 0) {
                    clearInterval(interval);
                    interval = undefined;
                }
            }, 1000);
        }
    };
    var numberGenerator = function (size) {
        return Math.floor(Math.random() * size);
    };
    var questionMaker = function () {
        var question = {};
        var num1 = numberGenerator (10);
        var num2 = numberGenerator(10);
        question.answer = num1 + num2;
        question.equation = String(num1) + " + " + String(num2);
        return question;
    };
 
    var makeNewQuestion = function () {
    myQuestion = questionMaker();
    $('#equation').text(myQuestion.equation);
    }
    var rightAnswer = function (playerInput, answer) {
        if(playerInput === answer) {
            makeNewQuestion();
            $('#player-input').val('');
            fixTimeRemaining(+1);
            fixScore(+1);
        }
    };
    $('#player-input').on('keyup', function () {
        beginGame();
        rightAnswer(Number($(this).val()), myQuestion.answer);
    });
    makeNewQuestion();
});