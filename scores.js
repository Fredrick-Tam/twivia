var cb = new Codebird;
cb.setConsumerKey("DYOgeh59AX3eCyfpm42Mh2JVK", "S64PaNOgq7Dl2AULKitA5HH6SmJGUbYHPzFTpvabr2FbDPMiwr")

$(document).ready(function() {
	var ath = window.localStorage['ath_score'];
	var rand = window.localStorage['rand_score'];
	var real = window.localStorage['real_score'];
	var pol = window.localStorage['pol_score'];
	var musi = window.localStorage['musi_score'];
	var act = window.localStorage['act_score'];

	$(".athelete").text("Athelete High Score: " + ath);
	$(".musician").text("Musician High Score: " + musi);
	$(".actor").text("Actor High Score: " + act);
	$(".politician").text("Politician High Score: " + pol);
	$(".realitystar").text("Reality Star High Score: " + real);
	$(".random").text("Random High Score: " + rand);

});