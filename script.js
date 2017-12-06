$(document).ready(function() {
	var register_button = $('#register_button');
	var signin_button = $('#signin_button');
	var signup_button = $('#signup_button');

	var password = $('#password').val();
  	var username= $('#password').val();

  	var signupform = $('.signup');
  	var signinform = $('.signin');
  	var signuplink = $('.signuplink');

  	register_button.click(function() {
  		console.log("hello");
  		signupform.css("display", "block");
  		signinform.css("display", "none");
  	});
  });