$(document).ready(function() {
    var myQuestion;
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
    var makeNewQuestion = function () {
    myQuestion = questionMaker();
    $('#equation').text(myQuestion.equation);
    }
    var rightAnswer = function (playerInput, answer) {
        if(playerInput === answer) {
            makeNewQuestion();
            $('#player-input').val('');
        }
    }
    $('#player-input').on('keyup', function () {
        rightAnswer(Number($(this).val()), myQuestion.answer);
    });
    makeNewQuestion();
});