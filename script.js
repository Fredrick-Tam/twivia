$(document).ready(function() {
	var register_button = $('#register_button');
  var login_button = $('#login_button');
	var signin_button = $('#signin_button');
	var signup_button = $('#signup_button');

	var signupform = $('.signup');
	var signinform = $('.signin');
	var signuplink = $('.signuplink');

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

  });