$(document).ready(function(){
    
    $("#login").click(loginHandler);
    $("#register").click(registerHandler);

});

// fumction is called when login button is pressed
function loginHandler(event){
    var requestData = {
        username:$("#username").val(),
        password:$("#password").val()
    }
    localStorage['username'] = $("#username").val();
    sessionStorage['user'] = $("#username").val();
    
    $.ajax({
        method:'POST',
        url:'http://localhost:3000/friends/login',
        data:requestData,
        dataType:'json'
    }).done(loginResponseHandler);
}

// fumction is called when register button is pressed
function registerHandler(event){
    var requestData = {
        username:$("#username").val(),
        password:$("#password").val()
    }
    $.ajax({
        method:'POST',
        url:'http://localhost:3000/friends/register',
        data:requestData,
        dataType:'json'
    }).done(registerResponseHandler);    
}

function registerResponseHandler(data){
    $("#status").text(data.status);
}
function loginResponseHandler(data){
    if(data.status === "Ok"){
        window.location.href='http://localhost:3000/persons.html';
    }else{
        $("#status").text(data.status);
    }
}

function renderPersonView(data){
    console.log(data);
    $("html").html(data);
}