var cb = new Codebird;
cb.setConsumerKey("DYOgeh59AX3eCyfpm42Mh2JVK", "S64PaNOgq7Dl2AULKitA5HH6SmJGUbYHPzFTpvabr2FbDPMiwr")
var next_q = $('#play-again');

$(document).ready(function() {
	var register_button = $('#register_button');
    var login_button = $('#login_button');
	var signin_button = $('#signin_button');
	var signup_button = $('#signup_button');
	var next_q = $('#play-again');

	var signupform = $('.signup');
	var signinform = $('.signin');
	var signuplink = $('.signuplink');

	var cb = new Codebird;
	cb.setConsumerKey("DYOgeh59AX3eCyfpm42Mh2JVK", "S64PaNOgq7Dl2AULKitA5HH6SmJGUbYHPzFTpvabr2FbDPMiwr")



	register_button.click(function() {
		signupform.css("display", "block");
		signinform.css("display", "none");
    register_button.css("display", "none");
    login_button.css("display", "block");

	});

  login_button.click(function() {
    signupform.css("display", "none");
    signinform.css("display", "block");
    register_button.css("display", "block");
    login_button.css("display", "none");
  })


  store.set('user', { name:'Marcus' });

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


  next_q.click(function() {
    var params = {
                q: "@KingJames"
               };
     cb.__call(
            "search_tweets",
            params,
            function (reply, rate, err) {
                console.log(reply);
                console.log(err);
            }
        )
   });

    });

var athlete = ["KingJames", "Cristiano", "rogerfederer", "TigerWoods", "serenawilliams", "kobebryant", "usainbolt", "StephenCurry30", "tbrady4", "KDTrey5", "FloydMayweather", "MichaelPhelps", "MariaSharapova", "LewisHamilton", "MickelsonHat" ]
var music = ["Beyonce", "taylorswift13","rihanna", "justinbieber‏", "Madonna", "shakira","springsteen", "S_C_", "PaulMcCartney", "Drake", "Adele", "selenagomez", "ladygaga", "JLo", "eltonofficial"]
var realStar = ["BLACCHYNA","KendraWilkinson", "heidimontag", "snooki", "Kateplusmy8","KendallJenner‏", "NeNeLeakes","SimonCowell", "RyanSeacrest", "Bethenny","KylieJenner", "khloekardashian","KimKardashian", "kourtneykardash", "KrisJenner"]
var actors = ["TheRock", "tomhanks", "JimCarrey", "RobertDowneyJr","SamuelLJackson", "TomCruise", "LeoDiCaprio","BenAffleck", "Zendaya", "DisasterArtist", "EmmaWatson", "officialjaden", "IMKristenBell", "halleberry", "violadavis" ]
var poli = ["realDonaldTrump", "BarackObama", "HillaryClinton", "narendramodi ‏", "Pontifex", "MichelleObama", "BillClinton", "David_Cameron", "Number10gov", "MayorofLondon", "Schwarzenegger", "MooreSenate", "alfranken", "SarahPalinUSA", "CondoleezzaRice"]
var i = 0
 var query = function() {
         if(i == 15){
            i = 0
            }

                 var params = {
                        screen_name: realStar[i],
                        count: "1"
                        };
                  cb.__call(
                   "statuses_userTimeline",
                     params,
                     function (reply, rate, err) {
                         console.log(reply[0].text);
                         document.getElementById("tweet").innerHTML = reply[0].text

                       }
        )
        i = i +1
    }