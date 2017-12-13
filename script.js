var cb = new Codebird;
cb.setConsumerKey("DYOgeh59AX3eCyfpm42Mh2JVK", "S64PaNOgq7Dl2AULKitA5HH6SmJGUbYHPzFTpvabr2FbDPMiwr")
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
var ans = 0;
window.localStorage["score"] = "0";
var Wrong1;
var Wrong2;
var Wrong3;

if (!window.localStorage.hasOwnProperty("ath_score")) {
  window.localStorage['ath_score'] = "0";
} 

if (!window.localStorage.hasOwnProperty("rand_score")) {
  localStorage["rand_score"] = "0";
}

if (!window.localStorage.hasOwnProperty("real_score")) {
  localStorage["real_score"] = "0";
}

if (!window.localStorage.hasOwnProperty("pol_score")) {
  localStorage["pol_score"] = "0";
}

if (!window.localStorage.hasOwnProperty("musi_score")) {
  localStorage["musi_score"] = "0";
}

if (!window.localStorage.hasOwnProperty("act_score")) {
  localStorage["act_score"] = "0";
}
// keep track of unique tweets
if (!window.localStorage.hasOwnProperty("unique_tweets")) {
  window.localStorage['unique_tweets'] = JSON.stringify([]);
}

function signout() {
  var url = "index.html";
  window.location = url;
}

function redirect() {
  var url = "category.html";
  window.location = url;
}

function scores() {
  var url = "scores.html";
  window.location = url;
}

$(document).ready(function() {

  function query(item, category, names_list) {
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
        if (reply == "undefined") {
          console.log("hello");
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
            console.log(name)
          }
        }
      }

      window.localStorage["wrong1"] = name[0];
      window.localStorage["wrong2"] = name[1];
      window.localStorage["wrong3"] = name[2];



        var unique_tweets = JSON.parse(window.localStorage["unique_tweets"]);
        unique_tweets.push(tweet);

        window.localStorage["unique_tweets"] = JSON.stringify(unique_tweets);
        window.localStorage["tweet"] = tweet;
        window.localStorage["question_no"] = 1;
        window.localStorage["answer"] = answer;
        window.localStorage["screen_name"] = reply[num].user.screen_name;
         
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
  var reality_star_button = $('#reality');
  var random_button = $('#random');

  // query

  athlete_button.click(function(e) {
    e.preventDefault();
    var item = athlete[Math.floor(Math.random()*athlete.length)];
    query(item,athlete,athName);
  });

  musician_button.click(function() {
    var item = music[Math.floor(Math.random()*music.length)];
    query(item, music, muName);
  });

  politician_button.click(function() {
    var item = poli[Math.floor(Math.random()*poli.length)];
    query(item, poli, poliNames);
  });

  actor_button.click(function() {
    var item = actor[Math.floor(Math.random()*actor.length)];
    query(item, actor, actNames);
  });

  reality_star_button.click(function() {
    var item = realStar[Math.floor(Math.random()*realStar.length)];
    query(item, realStar, relNames);
  });

  random_button.click(function() {
    var item = random[Math.floor(Math.random()*random.length)];
    query(item, random, ranNames);
  });

});

