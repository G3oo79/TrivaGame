$(document).ready(function() {
	//Global Variables.
	//======================================= 

	var quizArea = $('.quiz');

	var trivia = 
		[

			{
				"question": "What single city contains about 20% of the residents of its entire continent",
				"options": ["Mexico", "California", "Sydney"],
				"answer": "Sydney"
			},
			{
				"question": "Madagascar is an island located of the southeast coast of what continent?",
				"options": ["Africa", "Poland", "Barsil", "Uruguay"],
				"answer": "Africa"
			},
			{
				"question": "Lake Tahoe straddles the border between which two U.S. states?",
				"options": ["Mexico", "California"],
				"answer": "California & Nevada"
			},
			{
				"question": "In what country would you find Mount Kilimanjaro?",
				"options": ["Mexico", "California"],
				"answer": "Tanzania"
			}

		];

	

	for(var i=0; i<trivia.length; i++){
		quizArea.append('<h2>' + trivia[i].question + '<h2>');

		for (var j=0; j<trivia[i].options.length; j++){
			quizArea.append("<button class='optionBtn' data-answer=" + trivia[i].answer + ">" + trivia[i].options[j] + '<button>')
		}
	}

	/*q1 = {"What single city contains about 20% of the residents of its entire continent"

	}*/
	var possibleAnswer = "";
	var wrongAnswer = "";
	var rightAnswer = "";
	var timer = 0;


	//Randomize question
	var randomQuestion = Math.floor(Math.random() * trivia.length + []);

	//
	console.log(trivia);
	
	

	//Get var questions and place it in html.
	// document.getElementById("question").innerHTML = trivia[randomQuestion];

	//Functions
	//=======================================
	/*function ()*/


	//Reset Function
	//========================================


	//Game Start
	//=======================================


	$(document).on('click', '.optionBtn', function(){

		alert($(this).text());
		if($(this).text() == $(this).data("answer")){
			alert("HELLO");
		}
	})










});