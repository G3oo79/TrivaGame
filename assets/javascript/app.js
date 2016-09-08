$(document).ready(function() {
	//Global Variables.
	//=======================================

	var trivia = 
		[

			{
				"question1": "What single city contains about 20% of the residents of its entire continent",
				"options": ["Mexico", "California", "Sydney"],
				"answer": "Sydney"
			},
			{
				"question2": "Madagascar is an island located of the southeast coast of what continent?",
				"options": ["Africa", "Poland", "Barsil", "Uruguay"],
				"answer": "Africa"
			},
			{
				"question3": "Lake Tahoe straddles the border between which two U.S. states?",
				"options": ["Mexico", "California"],
				"answer": "California & Nevada"
			},
			{
				"question4": "In what country would you find Mount Kilimanjaro?",
				"options": ["Mexico", "California"],
				"answer": "Tanzania"
			}

		];

	
		$('.quiz').on('click', function(){
		setInterval(function(){$('.quiz').append($(trivia).attr("value",key).text(value)); }, 3000);
		console.log('.quiz');
	});
	

		/*for (var j=0; j<trivia[i].options.length; j++){
			quizArea.append("<button class='optionBtn' data-answer=" + trivia[i].answer + ">" + trivia[i].options[j] + '<button>')
		};
	*/

	
	var possibleAnswer = "";
	var wrongAnswer = "";
	var rightAnswer = "";
	var timer = 0;


	//Randomize question
	

	//
	console.log(trivia);
	
	

	//Get var questions and place it in html.
	// document.getElementById("question").innerHTML = trivia[randomQuestion];

	//Functions
	//=======================================
	


	//Reset Function
	//========================================


	//Game Start
	//=======================================


	/*$(document).on('click', '.optionBtn', function(){

		alert($(this).text());
		if($(this).text() == $(this).data("answer")){
			alert("HELLO");
		}
	})*/










});