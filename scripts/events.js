$(document).ready(function(){
    $(".habit").click(function(){
        if ($(this).hasClass("closed")) {
            $(".open").removeClass("open");
            $(".closed").removeClass("closed");
        } else {
            $(this).addClass("open");
            $(".habit").not(this).addClass("closed");
        }
    });
});