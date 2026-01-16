
var redirect = document.getElementById('bn');
if (redirect) {
    redirect.addEventListener("click", () => {
        window.location.href = "signup.html";
    });
}

var redirect2 = document.getElementById('sin-btn');
if (redirect2) {
    redirect2.addEventListener("click", () => {
        window.location.href = "signin.html";
    });
}


function abc() {

    var val = true;

    var username = document.forms['sin-form']["fname"].value;
    if (username.length == 0) {
        alert("Username field cannot be empty");
        return val = false;
    }


    var pword = document.forms['sin-form']["fpass"].value;
    if (pword == "") {
        alert("Password field cannot be empty");
        return val = false;
    }
    return val;

}



document.addEventListener("DOMContentLoaded", function () {
    var login = document.getElementById('login');
    if (login) {
        login.addEventListener("click", function () {
            if (abc()) {

                window.location.href = "User.html"
            }
        });
    }
});


function xyz() {
    vl = true;

    var FirstN = document.forms['sup-form']["fn"].value;
    if (FirstN == "") {
        alert("You forget to fill your First Name");
        return vl = false;
    }

    var LastN = document.forms['sup-form']["ln"].value;
    if (LastN == "") {
        alert("You forget to fill your Last Name");
        return vl = false;
    }

    var eml = document.forms['sup-form']["email"].value;
    if (eml == "") {
        alert("You forget to fill your email information");
        return vl = false;
    }

    var birthday = document.forms['sup-form']["dob"].value;
    if (birthday == "") {
        alert("You forget to fill your birth date");
        return vl = false;
    }


    var pwd = document.forms['sup-form']["password"].value;
    if (pwd == "") {
        alert("You forgot to set your password");
        return vl = false;
    }


    var cpwd = document.forms['sup-form']["conpass"].value;
    if (cpwd == "") {
        alert("You forgot to confirm your passowrd")
        return vl = false;
    }

    if (pwd != cpwd) {
        alert("Both passwords not matched.");
        return vl = false;
    }
    return vl;
}


document.addEventListener("click", function () {


    var password = document.getElementById('pass')
    var show = document.getElementById('show');

    show.onclick = function () {
        if (password.type == "password") {
            password.type = "text";
            show.textContent = "Hide";
            event.preventDefault();
        }

        else {
            password.type = "password";
            show.textContent = "Show";
            event.preventDefault();

        }
    }


});




document.addEventListener("click", function () {


    var password = document.getElementById('cpass')
    var show = document.getElementById('showing');

    show.onclick = function () {
        if (password.type == "password") {
            password.type = "text";
            show.textContent = "Hide";
            event.preventDefault();
        }

        else {
            password.type = "password";
            show.textContent = "Show";
            event.preventDefault();
        }
    }
});



document.addEventListener("DOMContentLoaded", function () {
    var signup = document.getElementById('sup-btn');
    if (signup) {
        signup.addEventListener("click", function () {
            if (xyz()) {
                window.location.href = "Thankyou.html"
            }
        });
    }
});



document.addEventListener("DOMContentLoaded", function () {
    var ok = document.getElementById('ok');
    if (ok) {
        ok.addEventListener("click", function () {
            window.location.href = "signin.html";
        });
    }
});



document.addEventListener("DOMContentLoaded", function(){
    var fine = document.getElementById('fine');
    if (fine){
        fine.addEventListener("click", function(){
            window.location.href = "signin.html";
        });
    }
});