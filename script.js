var cb = new Codebird;
cb.setConsumerKey("DYOgeh59AX3eCyfpm42Mh2JVK", "S64PaNOgq7Dl2AULKitA5HH6SmJGUbYHPzFTpvabr2FbDPMiwr")
var next_q = $('#play-again');

function redirect() {
  var url = "category.html";
  window.location = url;
}

$(document).ready(function() {

  var tweet = '';
  var answer = '';
  var unique_tweets = [];

  function query(item) {
  var num = Math.floor((Math.random() * 99) + 1);
  var params = {
      screen_name: item,
      count: "100",
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
      tweet = reply[num].text;
      answer = reply[num].user.name;
      unique_tweets.push(tweet);
      console.log(tweet);
    }
    )
  }


	var register_button = $('#register_button');
  var login_button = $('#login_button');
	var signin_button = $('#signin_button');
	var signup_button = $('#signup_button');
	var next_q = $('#play-again');

	var signupform = $('.signup');
	var signinform = $('.signin');
	var signuplink = $('.signuplink');
  var first_time = $('.firsttime')

	register_button.click(function() {
		signupform.css("display", "block");
		signinform.css("display", "none");
    register_button.css("display", "none");
    login_button.css("display", "block");
    first_time.css("display", "none");
	});

  login_button.click(function() {
    signupform.css("display", "none");
    signinform.css("display", "block");
    register_button.css("display", "block");
    login_button.css("display", "none");
    first_time.css("display", "block");
  })

  signup_button.click(function() {
    var signup_password = $('#signup_password').val();
    var signup_username = $('#signup_username').val();

    if (signup_username == '' || signup_password == '') {
      $('.empty-form1').css("display", "block");
      return;
    } else {
      store.set('user', { name: signup_username, password: signup_password });
      signupform.css("display", "none");
      signinform.css("display", "block");
      register_button.css("display", "block");
      login_button.css("display", "none");
    }

  });

  signin_button.click(function() {
    var signin_password = $('#signin_password').val();
    var signin_username = $('#signin_username').val();

    if (signin_username == '' || signin_password == '') {
      $('.empty-form1').css("display", "block");
      return;
    } else if (store.get('user').signin_username == '') {
      $('.empty-form2').css("display", "block");
    } else {
      window.location = 'category.html';
    }

  });

  var athlete = ["KingJames", "Cristiano", "rogerfederer", "TigerWoods", "serenawilliams", "kobebryant", "usainbolt", "StephenCurry30", "tbrady4", "KDTrey5", "FloydMayweather", "MichaelPhelps", "MariaSharapova", "LewisHamilton", "MickelsonHat" ];
  var music = ["Beyonce", "taylorswift13","rihanna", "justinbieber‏", "Madonna", "shakira","springsteen", "S_C_", "PaulMcCartney", "Drake", "Adele", "selenagomez", "ladygaga", "JLo", "eltonofficial"];
  var realStar = ["BLACCHYNA","KendraWilkinson", "heidimontag", "snooki", "Kateplusmy8","KendallJenner‏", "NeNeLeakes","SimonCowell", "RyanSeacrest", "Bethenny","KylieJenner", "khloekardashian","KimKardashian", "kourtneykardash", "KrisJenner"];
  var actor = ["TheRock", "tomhanks", "JimCarrey", "RobertDowneyJr","SamuelLJackson", "TomCruise", "LeoDiCaprio","BenAffleck", "Zendaya", "DisasterArtist", "EmmaWatson", "officialjaden", "IMKristenBell", "halleberry", "violadavis" ];
  var poli = ["realDonaldTrump", "BarackObama", "HillaryClinton", "narendramodi ‏", "Pontifex", "MichelleObama", "BillClinton", "David_Cameron", "Number10gov", "MayorofLondon", "Schwarzenegger", "MooreSenate", "alfranken", "SarahPalinUSA", "CondoleezzaRice"];

  var athlete_button = $('#athlete');
  var musician_button = $('#music');
  var politician_button = $('#politician');
  var actor_button = $('#actor');
  var reality_star_button = $('#realitystar');
  var random_button = $('#random');

  // query

  athlete_button.click(function(e) {
    e.preventDefault();
    var item = athlete[Math.floor(Math.random()*athlete.length)];
    query(item);
    window.localStorage["tweet"] = tweet;
    window.localStorage["answer"] = answer;
    window.localStorage["unique_tweets"] = unique_tweets;
  });

  musician_button.click(function() {
    var item = music[Math.floor(Math.random()*music.length)];
    query(item);
    window.location = 'questions.html';
  });

  politician_button.click(function() {
    var item = poli[Math.floor(Math.random()*poli.length)];
    query(item);
    window.location = 'questions.html';
  });

  actor_button.click(function() {
    var item = actor[Math.floor(Math.random()*actor.length)];
    query(item);
    window.location = 'questions.html';
  });

  reality_star_button.click(function() {
    var item = realStar[Math.floor(Math.random()*realStar.length)];
    query(item);
    window.location = 'questions.html';
  });

  random_button.click(function() {
    var item = random[Math.floor(Math.random()*random.length)];
    query(item);
    window.location = 'questions.html';
  });

});

