$(document).ready(function() {
    var myQuestion;
    var timeRemaining = 10;
    var numberGenerator = function (size) {
        return Math.floor(Math.random() * size);
    }
    var questionMaker = function () {
        var question = {};
        var num1 = numberGenerator (10);
        var num2 = numberGenerator(10);
        question.answer = num1 + num2;
        question.equation = String(num1) + " + " + String(num2);
        return question;
    }
    var fixTimeRemaining = function (amount) {
        timeRemaining += amount;
        $('#time-Remaining').text(timeRemaining);
    }
    var makeNewQuestion = function () {
    myQuestion = questionMaker();
    $('#equation').text(myQuestion.equation);
    }
    var rightAnswer = function (playerInput, answer) {
        if(playerInput === answer) {
            makeNewQuestion();
            $('#player-input').val('');
            fixTimeRemaining(+1);
        }
    }
    $('#player-input').on('keyup', function () {
        rightAnswer(Number($(this).val()), myQuestion.answer);
    });
    var interval = setInterval(function () {
        fixTimeRemaining(-1);
        if(timeRemaining === 0) {
            clearInterval(interval);
        }
    }, 1000);
    makeNewQuestion();
});