$(document).ready(function(){
    /*
    Remove the load overlay either when the page is fully 
    loaded or after 6 seconds if for some reason it isnt 
    gone already.
    */
    $(window).on('load', function(){
        RemoveLoadScreen();
    });
    setTimeout(function() { 
        RemoveLoadScreen();
    }, 6000);
});

function RemoveLoadScreen()
{
    $("#LoadingOverlay").css("opacity", 0);
    $("#LoadingOverlay").delay(600).queue(function(next){
        $("#LoadingOverlay").hide();
        next();
    });
}