$(document).ready(function() {
    var myQuestion;
    var numberGenerator = function (size) {
        return Math.floor(Math.random() * size);
    }
    var questionMaker = function () {
        var question = {};
        var num1 = randomNumberGenerator (10);
        var num2 = randomNumberGenerator(10);

        question.answer = num1 + num2;
        question.equation = String(num1) + " + " + String(num2);
        return question;
    }
    myQuestion = questionMaker();

    $('#equation').text(myQuestion.equation);
});