$("button").click(function(){
    $("p").text("click on this bookshelf, this might hold the key");
    $(".books").show();
});

$(".books").click(function(){
    $(".key").show();
    $(".books").hide();
    $("p").text("nice you found the key, click the key to get out of here");
    $("button").text("leave");
});

$(".key").click(function(){
    (".fight").fadeIn();
});