function checkFirstName()  {
    var firstName = $('#firstName').val();
    var reg = /^[a-zA-z -.]{2,10}$/;
    if (reg.test(firstName)) {
        $('#firstNameError').text(' ');
        return true;
    }
    else {
        $('#firstNameError').text('First name should be 2 to 10 character');
        return false;
    }
}

// last name
$('#firstName').keyup(function(){
   checkFirstName();
});
function checkLastName() {
    var lastName = $('#lastName').val();
    var reg = /^[a-zA-z -.]{2,10}$/;
    if (reg.test(lastName)) {
        $('#lastNameError').text(' ');
        return true;
    }
    else {
        $('#lastNameError').text('Last name should be 2 to 10 character');
        return false;
    }
}
$('#lastName').keyup(function(){
   checkLastName();
});

// E-mail
function checkEmailAddress() {
    var emailAddress = $('#emailAddress').val();
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    if (reg.test(emailAddress)) {
        $('#emailAddressError').text(' ');
        return true;
    }
    else {
        $('#emailAddressError').text('Email Address is Invalid');
        return false;
    }
}

$('#emailAddress').keyup(function(){
    checkEmailAddress();
});

// Password
function checkPassword(){
    var password = $('#password').val();
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (reg.test(password)) {
        $('#passwordError').text(' ');
        return true;
    }
    else {
        $('#passwordError').text('Password is invalid');
        return false;
    }
}

$('#password').keyup(function(){
    checkPassword();
});

// Confirm Password
function confirmpassword(){
    var confirmpassword = $('#confirmpassword').val();
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (reg.test(confirmpassword)) {
        $('#confirmpasswordError').text(' ');
        return true;
    }
    else {
        $('#confirmpasswordError').text('Password and confirm password does not match');
        return false;
    }
}

$('#confirmpassword').keyup(function(){
    confirmpassword();
});

$('#showHide').click(function () {
    var attrValue = $('#password').attr('type');

    if (attrValue == 'password'){
        $('#password').attr('type', 'text');
    } else{
        $('#password').attr('type', 'password');
    }
});

// Gender

function checkGenderInfo() {
    var genderInfo = $('input[type="radio"]:checked').val();
    if(genderInfo == 'male'  || genderInfo == 'female'){
        $('#genderError').text(' ');
        return true;
    } else {
        $('#genderError').text('Please give your Gender Info');
        return false;
    }
}

function checkDistrictName() {
    var districtValue = $('#district').val();
    if (districtValue == ' '){
        $('#districtError').text('Please give us your district info')
        return false;
    }else{
        $('#districtError').text(' ')
        return true;
    }
}


$('#form').submit(function () {
    if(checkFirstName() == true && checkLastName() == true && checkEmailAddress() == true && checkPassword() == true && confirmpassword() == true && checkGenderInfo() == true && checkDistrictName() == true){
        return true;
    } else {
        return false;
    }
});











$ (window).scroll(function(){
   var menuPosition =  $("#menu").position();
   // alert(menuPosition.top);
    var windowScrollPosition = $(window).scrollTop();

    if (menuPosition.top <= windowScrollPosition) {
        $('#ul').css({
            'position' : 'fixed',
            'top' : '0px',
            'width' : '90%'
        })
    }
    else {
        $('#ul').css ({
            'position' : 'relative',
            'top' : '0px',
            'width' : '100%'
        })
    }
});


/*
$(window).scroll(function(){
    var menu = $('#menu').position();
    var windowScroll = $(window).scrollTop();

    if(windowScroll >= menu) {
        $('#ul').css({
            'position' : 'fixed',
            'top' : '0px',
            'width' : '90%'
        });
    }
    else {
        $('#ul).css({

        });
    }
});
 */