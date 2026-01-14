
function abc(){

    var val = true;

    var name = document.forms['sin-form']["fname"].value;
    if(name.length == 0){
        alert("Username field cannot be empty");
        return val = false;
    }


    var pword = document.forms['sin-form'] ["fpass"].value;
    if(pword == ""){
        alert("Password field cannot be empty");
        return val = false;
    }
    return val;
}