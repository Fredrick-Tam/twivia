var cb = new Codebird;
cb.setConsumerKey("DYOgeh59AX3eCyfpm42Mh2JVK", "S64PaNOgq7Dl2AULKitA5HH6SmJGUbYHPzFTpvabr2FbDPMiwr")
var ans = 0;
var athlete = ["KingJames", "Cristiano", "rogerfederer", "TigerWoods", "serenawilliams", "kobebryant", "usainbolt", "StephenCurry30", "tbrady4", "KDTrey5", "FloydMayweather", "MichaelPhelps", "MariaSharapova", "LewisHamilton", "MickelsonHat" ];
var music = ["Beyonce", "taylorswift13","rihanna", "justinbieber‏", "Madonna", "shakira","springsteen", "S_C_", "PaulMcCartney", "Drake", "Adele", "selenagomez", "ladygaga", "JLo", "eltonofficial"];
var realStar = ["BLACCHYNA","KendraWilkinson", "heidimontag", "snooki", "Kateplusmy8","KendallJenner‏", "NeNeLeakes","SimonCowell", "RyanSeacrest", "Bethenny","KylieJenner", "khloekardashian","KimKardashian", "kourtneykardash", "KrisJenner"];
var actor = ["TheRock", "tomhanks", "JimCarrey", "RobertDowneyJr","SamuelLJackson", "TomCruise", "LeoDiCaprio","BenAffleck", "Zendaya", "DisasterArtist", "EmmaWatson", "officialjaden", "IMKristenBell", "halleberry", "violadavis" ];
var poli = ["realDonaldTrump", "BarackObama", "HillaryClinton", "narendramodi ‏", "Pontifex", "MichelleObama", "BillClinton", "David_Cameron", "Number10gov", "MayorofLondon", "Schwarzenegger", "MooreSenate", "alfranken", "SarahPalinUSA", "CondoleezzaRice"];
var random = ["KingJames", "Cristiano", "rogerfederer", "TigerWoods", "serenawilliams", "kobebryant", "usainbolt", "StephenCurry30", "tbrady4", "KDTrey5", "FloydMayweather", "MichaelPhelps", "MariaSharapova", "LewisHamilton", "MickelsonHat", "Beyonce", "taylorswift13","rihanna", "justinbieber‏", "Madonna", "shakira","springsteen", "S_C_",
"PaulMcCartney", "TheRock", "tomhanks", "JimCarrey", "RobertDowneyJr","SamuelLJackson", "TomCruise", "LeoDiCaprio","BenAffleck", "Zendaya", "DisasterArtist", "EmmaWatson", "officialjaden", "IMKristenBell", "halleberry", "violadavis" , "Drake", "Adele", "selenagomez", "ladygaga", "JLo", "eltonofficial", "BLACCHYNA","KendraWilkinson", "heidimontag", "snooki", "Kateplusmy8","KendallJenner‏", "NeNeLeakes","SimonCowell", "RyanSeacrest", "Bethenny","KylieJenner", "khloekardashian","KimKardashian", "kourtneykardash", "KrisJenner"];
var target = "";
function redirect() {
  var url = "category.html";
  window.location = url;
}

if (!window.localStorage.hasOwnProperty("wrong_options")) {
  console.log('init local storage of wrong_options');
  window.localStorage['wrong_options'] = JSON.stringify([]);
} else {
  console.log('wrong tweets: ', 
    window.localStorage['wrong_options']);
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
	var answer_div = Math.floor(Math.random()*3) + 1;

	$(answers[0]).text(wrong_options[0]);
	$(answers[1]).text(wrong_options[1]);
	$(answers[2]).text(wrong_options[2]);
	$(answers[answer_div]).text(answer);

	function query(item, category) {
		// update question number
		$("#next-q").css("display", "none");
		question_number = Number(question_number) + 1;
		localStorage["question_no"] = question_number;
		if (question_number > 10) {
			if (localStorage["score"] < 4) {
			window.location = 'great.html';
			} else if (localStorage["score"] > 3 && localStorage["score"] < 8) {
			window.location = 'decent.html';
			} else {
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

				var unique_tweets = JSON.parse(window.localStorage["unique_tweets"]);
				unique_tweets.push(tweet);

				window.localStorage["unique_tweets"] = JSON.stringify(unique_tweets);
				window.localStorage["tweet"] = tweet;
				window.localStorage["answer"] = answer;
				target.removeClass("selected");
				target.removeClass("not-selected");
				$("button.option").removeClass("selected");
				var catset = new Set(category);
        		catset.delete(item);

		        var names = [];
		        //get iterator:
		        var iter = catset.values();
		        //get first entry:
		        var first = iter.next();
		        names[0] = first.value;
		        var second = iter.next();
		        names[1] = second.value;
		        var third = iter.next();
		        names[2] = third.value;
		        target.removeClass("selected");
		        while(ans < 3) {
		          var new_params = {
		            screen_name: names[ans],
		            count: "1",
		          };
		          cb.__call(
		           "statuses_userTimeline",
		           new_params,
		           function (reply, rate, err) {
		            if (err) {
		              console.log("error response or timeout exceeded" + err.error);
		            }
		            var wrong_options = JSON.parse(window.localStorage["wrong_options"]);
		            wrong_options.push(reply[0].user.name);
		            window.localStorage["wrong_options"] = JSON.stringify(wrong_options);
		            
		          })
		          ans = ans +1;
		        }

				var wrong_options = JSON.parse(localStorage["wrong_options"]);
				$(".questionNo").text("Question " + question_number);
				$("#tweet").text(tweet);
				$(".score").text("Score: " + score);

				var answers = ["#answer-1", "#answer-2", "#answer-3", "#answer-4"];
				var len = answers.length;
				var answer_div = Math.floor(Math.random()*3) + 1;

				var i = answers.indexOf(answer_div);
				if(i != -1) {
					answers.splice(i, 1);
				}

				$(answers[0]).text(wrong_options[0]);
				$(answers[1]).text(wrong_options[1]);
				$(answers[2]).text(wrong_options[2]);
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
		var screen_name = localStorage["screen_name"]; 
		// if (random.indexOf(screen_name) > -1 && random.length > 20) {
		// 	array = random.slice();
		// } else 
		if (athlete.indexOf(screen_name) > -1) {
			array = athlete.slice();
		} else if (actor.indexOf(screen_name) > -1) {
			array = actor.slice();
		} else if (poli.indexOf(screen_name) > -1) {
			array = poli.slice();
		} else if (realStar.indexOf(screen_name) > -1) {
			array = realStar.slice();
		}
		else if (music.indexOf(screen_name) > -1) {
			array = music.slice();
		}

		var item = array[Math.floor(Math.random()*array.length)];
    	query(item, array);
	});
});
