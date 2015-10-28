console.log("Here are we");
/*
window.onload = function (event) {
    console.log(event);
};
*/
$(document).ready(function() {
    $("#head").css("background-color","lightblue")
        .css("padding","20px").css("border-radius","8px");
    $(".about").html("<b>New text</b>");
    $("[data-dummy]").html("<p>Hello world</p>");
    
    var setting = {
        method:"GET",
        url:"http://localhost:28017/oma/person/",
        dataType:"jsonp",
        jsonp:"jsonp"
    };
    $.ajax(setting).done(function(data){
        console.log(data);
        for(i=0; i<data.rows.length; i++){
           var html =  "<tr>" +
                        "<td>" + data.rows[i].name + "</td>" +
                        "<td>" + data.rows[i].address + "</td>" +
                        "<td>" + data.rows[i].age + "</td>" +
                    "</tr>";
            $(html).appendTo("tbody");
               
        }
    });
});

/*
$(document).ready(domReady);
function domReady(){
   
};*/