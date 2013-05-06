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
    
    $(".logo").click(function(){
        $(".habit").removeClass("open closed");
    })
    
    $("nav a").click(function(){
        if ($(this).hasClass("current")) {
            $("nav a").not(this).addClass("current");
            $(this).removeClass("current");
        } else {
            $(this).addClass("current");
            $("nav a").not(this).removeClass("current");
            
            var thisId = $(this).attr("id");
            $("section." + thisId)
                .addClass("open").removeClass("closed");
                
            $("section:not(."+thisId+")")
                .addClass("closed").removeClass("open");
        }
    })
});