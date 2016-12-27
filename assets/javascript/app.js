
///////////// this Jquery effect hides chosen windows on pageload////
$("#trivia").hide();
$("#end").hide();

//+++++++++++++++++Click Events++++++++++++++++++++++
//===================================================
$(document).on('click', '.start', function(){
	$('#screen1').hide();
	$('#trivia').show();
	game.questionStart();
});


//+++++++++++++++++Global variables++++++++++++++++++
//===================================================

var panel = $('#quiz');
var panelAnsw = $('#answ');
var countStart = 20;


//+++++++++++++++++Trivia Variable.+++++++++++++++++
//=================================================== 
var questions = 
	[

		{
			question: "What single city contains about 20% of the residents of its entire continent",
			answer: ["Mexico", "California", "Sydney"],
			correctAnswer: "Sydney"
		},
		{
			question: "Madagascar is an island located of the southeast coast of what continent?",
			answer: ["Africa", "Poland", "Barsil", "Uruguay"],
			correctAnswer: "Africa"
		},
		{
			question: "Lake Tahoe straddles the border between which two U.S. states?",
			answer: ["Mexico", "California"],
			correctAnswer: "California & Nevada"
		},
		{
			question: "In what country would you find Mount Kilimanjaro?",
			answer: ["Mexico", "California"],
			correctAnswer: "Tanzania"
		}

	];

//////////// Create object with var game and/////////////////
var game = {
	questions: questions,
	currentQuestion: 0,
	counter: countStart,
	correct: 0,
	incorrect: 0,
	countdown: function() {//This function decrases timer by 1 sec
		game.counter--;//this argument decreases the count.
		$('#timer').html(game.counter);//load the counter into the html tag.

		if (game.counter == 0) {//When the count hits 0... 
			game.timeOut();//...The time out function is called. 
		}
	},
	questionStart: function() {//This function loas the questions and sets timer
		timer = setInterval(game.countdown, 1000);//SetInterval Method used to specify 
		panel.html('<h2>' + questions[this.currentQuestion].question + '</h2>');//loads questions with a h2 tag into the html tag panel instance. 
		for (var i = 0; i < questions[this.currentQuestion].answer.length; i++) {//this loops through the questions.answer array and appends it to the panelAnsw instance.
			panelAnsw.append('<label><input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"' + 'data-name"' + questions[this.currentQuestion].answer[i] + '">' + " " + questions[this.currentQuestion].answer[i] + '</label><br>');
		}
	},
	nextQuestion: function() {//here the counter resets and loads the next question.
		game.counter = countStart;//create an instance for countStart.
		$('#timer').html(game.counter);//load the counter into the html tag.
		game.currentQuestion++;//adds 1 question every time this function runs.
		game.questionStart();//callback to start new question.
	},
	timeOut: function() {//function for when the clock runs out.
		clearInterval(timer);//this sets the timer count to 0.
		$('#timer').html(game.counter);//load the counter into the html tag.

		panel.html('<h2>Sorry Time is Up Bro!!</h2>');//load text into html tag
		panelAnsw.append('<h3>Here is The Correct Answer: ' + questions[this.currentQuestion].correctAnswer);//load text into html tag and the correct answer.
		if (game.currentQuestion === questions.length - 1) {
			setTimeout(game.results, 3 * 1000); 
		} else {
			setTimeout(game.nextQuestion, 3 * 1000);
		}
	},
	results: function() {
		clearInterval(timer);//this sets the timer count to 0.
		panel.html('<h2>Great Job Buddy, Lets see your Skills</h2>');
		panelAnsw.append('<h3>Correct Answers: ' + game.correct + '</h3>');
		panelAnsw.append('<h3>Correct Answers: ' + game.correct + '</h3>');
		panelAnsw.append('<h3>Correct Answers: ' + game.correct + '</h3>');
	}
};
	

	
		
		
	




