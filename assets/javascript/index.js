$(document).ready()
var score = 0;
var right = 0;
var wrong = 0;
var no_answer = 0;
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
    question: "What is the name of the bar in 'How I met your Mother'?",
    answers: ["MacLaren's", "Paddy's", "MacDonald's", "Central Perk"],
    correct_answer: "MacLaren's"
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
    question: "In 'Shaun of the Dead', what song comes on the jukebox while the group fights off Zombies at the Winchester?",
    answers: ["Stayin Alive", "Thriller", "Don't stop me now", "Maneater"],
    correct_answer: "Don't stop me now"
},
{
    question: "Who played the bartender aboard the Enterprise in 'Star Trek: The Next Generation'?",
    answers: ["Whoopi Goldberg", "Nichelle Nichols", "Penny Johnson Jerald", "Denise Crosby"],
    correct_answer: "Whoopi Goldberg"
}];
$("#start").on("click", function () {
    $("#game_master").text("GO!");
    $("#start").hide();
    for (var i = 0; i < questions.length; i++) {
        var bar_question = $("<h4>").text(questions[i].question);
        var ulist = $("<ul class = 'options'>");
        //var options;
        // for (var j = 0; i < questions[i].answers.length; j++) {
        //    options = $("<li>").text(questions[i].answers[j]);
        //}
        var option1 = $("<li>").text(questions[i].answers[0]).append($("<input type='radio' value=0>"));
        var option2 = $("<li>").text(questions[i].answers[1]).append($("<input type='radio' value=1>"));
        var option3 = $("<li>").text(questions[i].answers[2]).append($("<input type='radio' value=2>"));
        var option4 = $("<li>").text(questions[i].answers[3]).append($("<input type='radio' value=3>"));

        $(".choices").append(bar_question).append(ulist).append(option1, option2, option3, option4);
    }
    $("#end_choices").append($('<a class="btn btn-primary btn-lg" href="#" role="button" id="submit">').text("Submit"));
});
$("#submit").on("click", function () {
    //When we submit, loop through the answers selected and compare to correct_answer in objects
    //add up score and display stats
    //hide the question choices and possibly show right answers for things you got wrong?
    alert("submit works");


})