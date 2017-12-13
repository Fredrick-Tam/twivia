var cb = new Codebird;
cb.setConsumerKey("DYOgeh59AX3eCyfpm42Mh2JVK", "S64PaNOgq7Dl2AULKitA5HH6SmJGUbYHPzFTpvabr2FbDPMiwr")
var ans = 0;
var athName = ["Lebron James", "Cristiano Ronaldo", "Roger Federer", "Tiger Woords", "Serena Williams", "Kobe Bryant", "Usain Bolt", "Stephen Curry", "Tom Brady", "Kevin Durant", "Floyd MayWeather", "Michael Phelps", "Maria Sharapoca", "Lewis Hamilton", "Phil Mickelson"];
var athlete = ["KingJames", "Cristiano", "rogerfederer", "TigerWoods", "serenawilliams", "kobebryant", "usainbolt", "StephenCurry30", "tbrady4", "KDTrey5", "FloydMayweather", "MichaelPhelps", "MariaSharapova", "LewisHamilton", "MickelsonHat" ];
var muName = ["Beyonce", "Taylor Swift", "Rihanna", "Justin Bieber", "Madonna", "Shakira", "Bruce Springsteen", "JayZ", "Paul McCartney", "Drake", "Adele", "Lady Gala", "Selena Gomez", "Jennifer Lopez", "Bruno Mars", "Elton John"];
var music = ["Beyonce", "taylorswift13","rihanna", "justinbieber‏", "Madonna", "shakira","springsteen", "S_C_", "PaulMcCartney", "Drake", "Adele", "selenagomez", "ladygaga", "JLo", "eltonofficial"];
var relNames = ["Black Chyna", "Kate Gossein", "Kenda Wilkinson", "Nicole Polizzi", "Heidi Montag", "Kendall Jenner", "Nene Leakes", "Simon Cowell", "Betheeny Frankel", "Kylie Jenner", "Kris Jener", "Ryan Seacrest", "Kourtney Kardashian", "Khloe Kardashian", "Kim Kardashian"];
var realStar = ["BLACCHYNA","KendraWilkinson", "heidimontag", "snooki", "Kateplusmy8","KendallJenner‏", "NeNeLeakes","SimonCowell", "RyanSeacrest", "Bethenny","KylieJenner", "khloekardashian","KimKardashian", "kourtneykardash", "KrisJenner"];
var actNames = ["Dwayne Johnson", "Jim Carrey", "Tom Hanks", "Robert Downey Jr", "Samuel L.Jackson", "Tom Cruise", "Zendaya", "Leonardo DiCaprio", "Ben Affleck", "James Franco", "Emma Watson", "Jaden Smith", "Kristen Bell", "Halle Berry", "Viola Davis"];
var actor = ["TheRock", "tomhanks", "JimCarrey", "RobertDowneyJr","SamuelLJackson", "TomCruise", "LeoDiCaprio","BenAffleck", "Zendaya", "DisasterArtist", "EmmaWatson", "officialjaden", "IMKristenBell", "halleberry", "violadavis" ];
var poliNames = ["Donald Trump", "Barack Obama", "Hiliary Clinton", "Pope Francis", "Narendra Modi", "Arnold Schwarzenegger", "Michelle Obama", "Bill Clinton", "David Cameron", "Sadiq Khan", "Theresa May", "Roy Moore", "Al Franken", "Sarah Palin"];
var poli = ["realDonaldTrump", "BarackObama", "HillaryClinton", "narendramodi ‏", "Pontifex", "MichelleObama", "BillClinton", "David_Cameron", "Number10gov", "MayorofLondon", "Schwarzenegger", "MooreSenate", "alfranken", "SarahPalinUSA", "CondoleezzaRice"];
var ranNames = ["Lebron James", "Cristiano Ronaldo", "Roger Federer", "Tiger Woords", "Serena Williams", "kobebryant", "usainbolt", "StephenCurry30", "tbrady4", "KDTrey5", "FloydMayweather", "MichaelPhelps", "MariaSharapova", "LewisHamilton", "MickelsonHat", "Beyonce", "Taylor Swift", "Rihanna", "Justin Bieber", "Madonna", "Shakira", "Bruce Springsteen", "JayZ", "Paul McCartney", "TheRock", "tomhanks", "JimCarrey", "RobertDowneyJr","SamuelLJackson", "TomCruise", "LeoDiCaprio","BenAffleck", "Zendaya", "DisasterArtist", "EmmaWatson", "officialjaden", "IMKristenBell", "halleberry", "violadavis"];
var random = ["KingJames", "Cristiano", "rogerfederer", "TigerWoods", "serenawilliams", "kobebryant", "usainbolt", "StephenCurry30", "tbrady4", "KDTrey5", "FloydMayweather", "MichaelPhelps", "MariaSharapova", "LewisHamilton", "MickelsonHat", "Beyonce", "taylorswift13","rihanna", "justinbieber‏", "Madonna", "shakira","springsteen", "S_C_",
"PaulMcCartney", "TheRock", "tomhanks", "JimCarrey", "RobertDowneyJr","SamuelLJackson", "TomCruise", "LeoDiCaprio","BenAffleck", "Zendaya", "DisasterArtist", "EmmaWatson", "officialjaden", "IMKristenBell", "halleberry", "violadavis" , "Drake", "Adele", "selenagomez", "ladygaga", "JLo", "eltonofficial", "BLACCHYNA","KendraWilkinson", "heidimontag", "snooki", "Kateplusmy8","KendallJenner‏", "NeNeLeakes","SimonCowell", "RyanSeacrest", "Bethenny","KylieJenner", "khloekardashian","KimKardashian", "kourtneykardash", "KrisJenner"];
var target = "";
function redirect() {
  var url = "category.html";
  window.location = url;
}


var question_number = localStorage["question_no"];
var choice1 = $("#answer-1");
var choice2 = $("#answer-2");
var choice3 = $("#answer-3");
var choice4 = $("#answer-4");

if (!window.localStorage.hasOwnProperty("score")) {
	localStorage["score"] = "0";
} else { 
    console.log(localStorage["score"]);
}

$(document).ready(function() {
	var user_choice = "";
	var tweet = localStorage["tweet"];
	var answer = localStorage["answer"];
	var score = Number(localStorage['score']);
	$(".questionNo").text("Question " + question_number);
	var wrong_options = JSON.parse(localStorage["wrong_options"]);
	$("#tweet").text(tweet);
	$(".score").text("Score: " + score);
	var answers = ["#answer-1", "#answer-2", "#answer-3", "#answer-4"];
	var len = answers.length;
	var answer_div = Math.floor(Math.random()*len);
	var newarray = [];

	for (var i = 0; i < 4; i++ ) {
		if (i != answer_div) {
			newarray.push(answers[i]);
		}
	}

	$(newarray[0]).text(window.localStorage["wrong1"]);
	$(newarray[1]).text(window.localStorage["wrong2"]);
	$(newarray[2]).text(window.localStorage["wrong3"]);
	$(answers[answer_div]).text(answer);

	function query(item, category,names_list) {
		// update question number
		$("#next-q").css("display", "none");
		question_number = Number(question_number) + 1;
		localStorage["question_no"] = question_number;
		console.log(score);
		if (question_number > 10) {
			if (localStorage["score"] < 4) {
			window.location = 'great.html';
			} else if (localStorage["score"] > 3 && localStorage["score"] < 8) {
			window.location = 'decent.html';
			} else if (localStorage["score"] > 8) {
			window.location = 'great.html';	
			}
		}

		var params = {
			screen_name: item,
			count: "200",
			exclude_replies: "true",
			include_rts: "false"
		};
		cb.__call(
			"statuses_userTimeline",
			params,
			function (reply, rate, err) {
				if (err) {
					console.log("error response or timeout exceeded" + err.error);
				}

				var len = reply.length -1;
				var num = Math.floor((Math.random() * len));
				var tweet = reply[num].text;
				var answer = reply[num].user.name;

				var name = [];

		        while(name.length < 3) {
		          var possible = names_list[Math.floor((Math.random()* names_list.length))];
		          if(name.length == 0){
		            if(possible !=answer) {
		              name.push(possible);
		            }
		          }
		          else{
		          if(possible !=answer && name.indexOf(possible) < 0) {
		            name.push(possible)
		          }
		        }
		      }
		      window.localStorage["wrong1"] = name[0];
		      window.localStorage["wrong2"] = name[1];
		      window.localStorage["wrong3"] = name[2];
		      console.log(localStorage);

				var unique_tweets = JSON.parse(window.localStorage["unique_tweets"]);
				unique_tweets.push(tweet);

				window.localStorage["unique_tweets"] = JSON.stringify(unique_tweets);
				window.localStorage["tweet"] = tweet;
				window.localStorage["answer"] = answer;
				target.removeClass("selected");
				target.removeClass("not-selected");
				$("button.option").removeClass("selected");

		        target.removeClass("selected");
		        

				var wrong_options = JSON.parse(localStorage["wrong_options"]);
				$(".questionNo").text("Question " + question_number);
				$("#tweet").text(tweet);
				$(".score").text("Score: " + score);

				var answers = ["#answer-1", "#answer-2", "#answer-3", "#answer-4"];

				var len = answers.length;
				var answer_div = Math.floor(Math.random()*len);
				var newarray = [];
				for (var i = 0; i < 4; i++ ) {
					if (i != answer_div) {
						newarray.push(answers[i]);
					}
				}

					$(newarray[0]).text(window.localStorage["wrong1"]);
					$(newarray[1]).text(window.localStorage["wrong2"]);
					$(newarray[2]).text(window.localStorage["wrong3"]);
					$(answers[answer_div]).text(answer);
	})
	}


	$("button.option").click(function() {
		$("button.option").removeClass("selected");
		user_choice = $(this).text();
		target = $(this);
		$("#next-q").css("display", "block");
	})


	$("#next-q").click(function() {
		answer = localStorage["answer"];
		if (user_choice == answer) {
			target.addClass("selected");
			score = score + 1;
			localStorage["score"] = score.toString();
		} else {
			target.addClass("not-selected");
			$("button.option:contains("+answer+")").addClass("selected");
		}

		var array = [];
		var array2 = [];
		var screen_name = localStorage["screen_name"]; 
		// if (random.indexOf(screen_name) > -1 && random.length > 20) {
		// 	array = random.slice();
		// } else 
		if (athlete.indexOf(screen_name) > -1) {
			array = athlete.slice();
			array2 = athName.slice();
		} else if (actor.indexOf(screen_name) > -1) {
			array = actor.slice();
			array2 = actNames.slice();
		} else if (poli.indexOf(screen_name) > -1) {
			array = poli.slice();
			array2 = poliNames.slice();
		} else if (realStar.indexOf(screen_name) > -1) {
			array = realStar.slice();
			array2 = relNames.slice();
		}
		else if (music.indexOf(screen_name) > -1) {
			array = music.slice();
			array2 = muName.slice();
		}

		var item = array[Math.floor(Math.random()*array.length)];
    	query(item, array, array2);
	});
});
