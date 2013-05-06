$(document).ready(function(){
    $(".profile.open .habit").click(function() {
        if (($(this).hasClass("closed")) || ($(this).hasClass("open"))) {
            $(this).siblings(".open").removeClass("open");
            $(this).siblings().removeClass("closed");
            $(this).removeClass("closed").removeClass("open");
        } else {
            $(this).addClass("open");
            $(".habit").not(this).addClass("closed");
        }
    });
    
    $(".profile.open .habit").not("open").mouseover(function() {
        $(this).siblings().addClass("other-hover");
    });
    
    $(".profile.open .habit").not("open").mouseout(function() {
        $(".habit").removeClass("other-hover");
    });   
    
    $(".logo").click(function(){
        $(".habit").removeClass("open closed");
    });
    
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
    });
    
    $(".friends .profile.closed").click(function(){
        $(this).removeClass("closed").addClass("open");
    });
});