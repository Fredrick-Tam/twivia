var cb = new Codebird;
cb.setConsumerKey("DYOgeh59AX3eCyfpm42Mh2JVK", "S64PaNOgq7Dl2AULKitA5HH6SmJGUbYHPzFTpvabr2FbDPMiwr")

var athlete = ["KingJames", "Cristiano", "rogerfederer", "TigerWoods", "serenawilliams", "kobebryant", "usainbolt", "StephenCurry30", "tbrady4", "KDTrey5", "FloydMayweather", "MichaelPhelps", "MariaSharapova", "LewisHamilton", "MickelsonHat" ];
var music = ["Beyonce", "taylorswift13","rihanna", "justinbieber‏", "Madonna", "shakira","springsteen", "S_C_", "PaulMcCartney", "Drake", "Adele", "selenagomez", "ladygaga", "JLo", "eltonofficial"];
var realStar = ["BLACCHYNA","KendraWilkinson", "heidimontag", "snooki", "Kateplusmy8","KendallJenner‏", "NeNeLeakes","SimonCowell", "RyanSeacrest", "Bethenny","KylieJenner", "khloekardashian","KimKardashian", "kourtneykardash", "KrisJenner"];
var actor = ["TheRock", "tomhanks", "JimCarrey", "RobertDowneyJr","SamuelLJackson", "TomCruise", "LeoDiCaprio","BenAffleck", "Zendaya", "DisasterArtist", "EmmaWatson", "officialjaden", "IMKristenBell", "halleberry", "violadavis" ];
var poli = ["realDonaldTrump", "BarackObama", "HillaryClinton", "narendramodi ‏", "Pontifex", "MichelleObama", "BillClinton", "David_Cameron", "Number10gov", "MayorofLondon", "Schwarzenegger", "MooreSenate", "alfranken", "SarahPalinUSA", "CondoleezzaRice"];
var random = ["KingJames", "Cristiano", "rogerfederer", "TigerWoods", "serenawilliams", "kobebryant", "usainbolt", "StephenCurry30", "tbrady4", "KDTrey5", "FloydMayweather", "MichaelPhelps", "MariaSharapova", "LewisHamilton", "MickelsonHat", "Beyonce", "taylorswift13","rihanna", "justinbieber‏", "Madonna", "shakira","springsteen", "S_C_",
"PaulMcCartney", "TheRock", "tomhanks", "JimCarrey", "RobertDowneyJr","SamuelLJackson", "TomCruise", "LeoDiCaprio","BenAffleck", "Zendaya", "DisasterArtist", "EmmaWatson", "officialjaden", "IMKristenBell", "halleberry", "violadavis" , "Drake", "Adele", "selenagomez", "ladygaga", "JLo", "eltonofficial", "BLACCHYNA","KendraWilkinson", "heidimontag", "snooki", "Kateplusmy8","KendallJenner‏", "NeNeLeakes","SimonCowell", "RyanSeacrest", "Bethenny","KylieJenner", "khloekardashian","KimKardashian", "kourtneykardash", "KrisJenner"];
var ans = 0;
window.localStorage["score"] = "0";

// keep track of unique tweets
if (!window.localStorage.hasOwnProperty("unique_tweets")) {
  window.localStorage['unique_tweets'] = JSON.stringify([]);
}

if (!window.localStorage.hasOwnProperty("wrong_options")) {
  window.localStorage['wrong_options'] = JSON.stringify([]);
}

function redirect() {
  var url = "category.html";
  window.location = url;
}

$(document).ready(function() {

  function query(item, category) {
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
        var num = Math.floor((Math.random() * len) + 1);
        var tweet = reply[num].text;
        var answer = reply[num].user.name;

        var unique_tweets = JSON.parse(window.localStorage["unique_tweets"]);
        unique_tweets.push(tweet);

        window.localStorage["unique_tweets"] = JSON.stringify(unique_tweets);
        window.localStorage["tweet"] = tweet;
        window.localStorage["question_no"] = 1;
        window.localStorage["answer"] = answer;
        window.localStorage["screen_name"] = reply[num].user.screen_name;

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
            console.log(names);
            var wrong_options = JSON.parse(window.localStorage["wrong_options"]);
            wrong_options.push(reply[0].user.name);
            window.localStorage["wrong_options"] = JSON.stringify(wrong_options);
            
          })
          var i = category.indexOf(names[ans]);
          if(i != -1) {
            category.splice(i, 1);
          }
          ans = ans +1;
        }
      window.location.href = 'questions.html'; // redirect
    })
  }


  var register_button = $('#register_button');
  var login_button = $('#login_button');
  var signin_button = $('#signin_button');
  var signup_button = $('#signup_button');

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
    var signup_password2 = $('#signup_password2').val();
    var signup_username = $('#signup_username').val();

    if (signup_username == '' || signup_password == '' || signup_password2 == '') {
      $('.empty-form1').css("display", "block");
      return;
    } else if (signup_password != signup_password2) {
      $('.empty-form2').css("display", "block");
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
    } else if (store.get('user').name == signin_username && store.get('user').password == signin_password) {
      window.location = 'category.html';
    } else if (store.get('user').name != signin_username || store.get('user').password != signin_password) {
      $('.empty-form2').css("display", "block");
    }
  });

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
    query(item,athlete);
  });

  musician_button.click(function() {
    var item = music[Math.floor(Math.random()*music.length)];
    query(item, music);
  });

  politician_button.click(function() {
    var item = poli[Math.floor(Math.random()*poli.length)];
    query(item, politician);
  });

  actor_button.click(function() {
    var item = actor[Math.floor(Math.random()*actor.length)];
    query(item, actor);
  });

  reality_star_button.click(function() {
    var item = realStar[Math.floor(Math.random()*realStar.length)];
    query(item, realStar);
  });

  random_button.click(function() {
    var item = random[Math.floor(Math.random()*random.length)];
    query(item, random);
  });

});

