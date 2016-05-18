
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	/*--- New Game ---*/

  	var prevGuesses = [];
  	var luckyNum = Math.floor((Math.random() * 100) + 1);;

  	function newGame(){
  		luckyNum = Math.floor((Math.random() * 100) + 1);
  		console.log(luckyNum);

  		$('#count').text("0");
  		$('#userGuess').val("");
  		$('ul#guessList').empty();
  		$("#feedback").text("Make your Guess!");
  		prevGuesses = [];
  	}

  	/* Start the first Game */
  	newGame();

  	$('.new').on('click', function() {
  		newGame();
  	});
  	
  	/* Game */
  
	function checknum(checkme){
		if(checkme % 1 == 0){

			parseInt(checkme);
			if ((checkme >= 0) && (checkme <= 100)) {
				console.log(checkme);
				$("ul#guessList").append('<li>' + checkme + '</li>');
				prevGuesses.push(checkme);
				$.each(prevGuesses, function(index, val) {
				    console.log(val);
				});
				
				return checkme;

			}
			else{
				alert("Please Enter a Valid Number 1-100")
			}
		}
		else{
			alert("Please Enter a Valid Number 1-100")
		}
	}

  	function getGuess(){
  		var guess = $("#userGuess").val();
  		checknum(guess);
  		$('#count').html(parseInt($('#count').html(), 10)+1)
  		return guess;
  	}
  	

  	function diff(a, b) { return  Math.abs(a - b) }

  	function hotness(userGuess, winningNum){

  		var difference = diff(userGuess,winningNum);

  		console.log(difference);
  		if(difference == 0){
  			$("#feedback").text("Winner!!!!!");
  		}  		
  		else if(difference <= 10){
  			$("#feedback").text("The Hotness!");
  		}
  		else if(difference <= 20){
  			$("#feedback").text("Hot");
  		}
   		else if(difference <= 30){
  			$("#feedback").text("Warm");
  		} 		
  		else if(difference <= 50){
  			$("#feedback").text("Cold");
  		}
  		else{
  			$("#feedback").text("Ice Cold");
  		}
  	}

  	$("#guessButton").click( function(event) {
	  event.preventDefault();
	  var currentGuess = getGuess();
	  hotness(currentGuess,luckyNum);
	  });

});


