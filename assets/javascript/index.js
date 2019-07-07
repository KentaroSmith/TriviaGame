$(document).ready()

//7 questions Moes tavern, Cheers, McLaren's (How I met your mother), Paddy's pub from
//it' always sunny, prancing pony lotr, the winchester (shaun of the dead), ten forward(startrek next gen)
var questions = [{
    question: "In 'The Simpsons', Moe is the owner of Moe's Tavern. What is Moe's last name?",
    answers: ["Szyslak", "Krabappel", "Chalmers", "Skinner"],
    correct_answer: "Szyslak"
},
{
    question: "In 'Cheers', which side character went on to have their own spin-off show?",
    answers: ["Seinfeld", "Frasier", "Diane", "Cliff"],
    correct_answer: "Frasier"
},
{
    question: "At MacLaren's, what is the name of the bartender in 'How I met your Mother'?",
    answers: ['Carl', "Paddy", "George", "Gunter"],
    correct_answer: 'Carl'
},
{
    question: "In 'It's Always Sunny in Phillidelphia' who in the gang doesn't own a stake in Paddy's pub?",
    answers: ["Dennis", "Frank", "Mac", "Dee"],
    correct_answer: "Dee"
},
{
    question: "'The Prancing Pony' is the bar Frodo and Sam are supposed to meet Gandalf at. What town is it located in?",
    answers: ["Bucklebury", "Bywater", "Bree", "Hobbiton"],
    correct_answer: "Bree"
},
{
    question: "In 'Shaun of the Dead', what is the name of the pub that Shaun wants to meet up at?",
    answers: ["The Enfield", "Ruger's", 'The Winchester', "Remmington's"],
    correct_answer: 'The Winchester'
},
{
    question: "Who played the bartender aboard the Enterprise in 'Star Trek: The Next Generation'?",
    answers: ["Whoopi Goldberg", "Nichelle Nichols", "Penny Johnson Jerald", "Denise Crosby"],
    correct_answer: "Whoopi Goldberg"
}];
var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("time's up")
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $(".choices").prepend('<h2>Time remaining: <span id="counter">120</span></h2>')
        $("#game_master").text("GO!");
        $("#start").hide();
        for (var i = 0; i < questions.length; i++) {
            var bar_question = $("<h4>").text(questions[i].question);
            $(".choices").append(bar_question);

            for (var j = 0; j < questions[i].answers.length; j++) {
                $(".choices").append("<input type='radio' name ='question-" + i + "' value ='" + questions[i].answers[j] + "' >" + questions[i].answers[j]);
            }
        }
    },
    done: function () {
        for (var i = 0; i < questions.length; i++)
            $.each($("input[name='question-" + i + "']:checked"), function () {
                console.log("loop is working")
                if ($(this).val() === questions[i].correct_answer) {
                    game.correct++;
                    console.log(questions[i].correct_answer, "Correct!");
                }
                else {
                    game.incorrect++;
                    console.log(questions[i].correct_answer, "Incorrect", ($(this).val()));
                }
            })
        this.result();

    },
    result: function () {
        clearInterval(timer);
        $('.choices h2').remove();
        $("#game_master").remove();
        $("#submit").remove();

        $('.choices').html('<h2>Finished!</h2>');
        $(".choices").append("<h3>Correct Answers: " + game.correct + "</h3>");
        $(".choices").append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
        $(".choices").append("<h3> Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
    }
}

$("#start").on("click", function () {
    game.start();

    //the below text was my first run. Not the DRYest code in the world.
    //var option1 = $("<li>").text(questions[i].answers[0]).append($("<input type='radio' value=0>"));
    //var option2 = $("<li>").text(questions[i].answers[1]).append($("<input type='radio' value=1>"));
    //var option3 = $("<li>").text(questions[i].answers[2]).append($("<input type='radio' value=2>"));
    //var option4 = $("<li>").text(questions[i].answers[3]).append($("<input type='radio' value=3>"));

    //$(".choices").append(bar_question).append(ulist).append(option1, option2, option3, option4);

    $("#end_choices").append($('<a class="btn btn-primary btn-lg" href="#" role="button" id="submit">').text("Submit"));

});
$(document).on("click", "#submit", function () {
    game.done();
    //When we submit, loop through the answers selected and compare to correct_answer in objects
    //add up score and display stats
    //hide the question choices and possibly show right answers for things you got wrong? - work in progress.
})
