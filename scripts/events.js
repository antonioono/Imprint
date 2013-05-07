var habitOpen   = false;

$(document).ready(function(){
    $(".page.profile.open .habit").click(function() {
        // already opened
        if (($(this).hasClass("closed")) || ($(this).hasClass("open"))) {
            $(this).siblings(".open").removeClass("open");
            $(this).siblings().removeClass("closed");
            $(this).removeClass("closed").removeClass("open");
            habitOpen = false;
        } else { // none opened
            $(this).addClass("open");
            $(".habit").not(this).addClass("closed");
            habitOpen = true;
        }
    });
    
    $(".page.profile.open .habit").not("open").mouseover(function() {
        $(this).siblings().addClass("other-hover");
    });
    
    $(".page.profile.open .habit").not("open").mouseout(function() {
        $(".habit").removeClass("other-hover");
    });   
    
    $(".logo").click(function(){
        $(".habit").removeClass("open closed");
    });
    
    $("nav a").click(function(){
        // if ($(this).hasClass("current")) {
        //     null;
        // } else {
        //     $(this).addClass("current");
        //     $("nav a").not(this).removeClass("current");
        //     
        //     var thisId = $(this).attr("id");
        //     $("section." + thisId)
        //         .addClass("open").removeClass("closed");
        //         
        //     $("section:not(."+thisId+")")
        //         .addClass("closed").removeClass("open");
        // }
        // if ($(this).hasClass("profile")) {
        //     profileOpen = false;
        // } else {
        //     profileOpen = true;
        // 
        // }
        if ($(this).hasClass("profile")) {
            switchSides("profile");
        } else {
            switchSides("friends");
        }
        reset();
    });
    
    $(".page.closed").click(function(){
        if ($(this).hasClass("profile")) {
            // $(this).addClass("open").removeClass("closed");
            // $(".page.friends").addClass("closed").removeClass("open");
            // alert("foo")
            switchSides("profile");
            reset();
        } else if ($(this).hasClass("friends")) {
            switchSides("friends");
            // $(this).addClass("open").removeClass("closed");
            // $(".page.profile").addClass("closed").removeClass("open");
        }
    });
    
    function switchSides(side){
        if (side === "friends") {
            $("body").addClass("friends").removeClass("profile");
        } else {
            $("body").addClass("profile").removeClass("friends");
        }
        reset();
    }
    
    function reset() {
        $(".page.profile .habit").removeClass("open").removeClass("closed");
    }
});