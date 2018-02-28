/*
var DwarfItem;
var MageItem;
var PriestItem;
var RogueItem;
*/
$(document).ready(function(){
/*
    $('#MainImg').slick({
        dots: false,
        infinite: false,
        arrows:false,
        autoplay: false,
        autoplaySpeed: 7500,
	});
    $('#MainImg').on('afterChange', function(event, slick, currentSlide){
        if($('#MainImg').slick('slickCurrentSlide') == 0)
        {
            $("#GameContainer").css("max-height", "5000px");
            $("#MainNav").css("background", "#214B9B");
            $(".logo").css("border-color", "#214B9B transparent transparent #214B9B");
            $("#Footer").css("background", "linear-gradient(#163369, #1f4893 80%)");
        }
        else
        {
            $("#GameContainer").css("max-height", "0");
            $("#MainNav").css("background", "#352041")
            $(".logo").css("border-color", "#352041 transparent transparent #352041");
            $("#Footer").css("background", "linear-gradient(#533267, #352041 80%)");
        }
    });
*/
/*
    $('#DungeonCarousel').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        infinite: false,
        arrows:true,
        autoplay: false,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 920,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
	});

    DwarfItem = $("#Dwarf");
    MageItem = $("#Mage");
    PriestItem = $("#Priest");
    RogueItem = $("#Rogue");

    DwarfSpeech = $("#DwarfSpeech");
    MageSpeech = $("#MageSpeech");
    PriestSpeech = $("#PriestSpeech");
    RogueSpeech = $("#RogueSpeech");
    
    MageItem.css("opacity", 1);
    MageSpeech.css("opacity", 1);
    MageItem.css("animation-name", "none");
    $("#SpeechPointer").css("left", "31%");

    DwarfItem.click(function(){
        $("#SpeechPointer").css("left", "4%");
        DwarfItem.css("opacity", 1);
        MageItem.css("opacity", 0.5);
        PriestItem.css("opacity", 0.5);
        RogueItem.css("opacity", 0.5);

        DwarfSpeech.css("opacity", 1);
        MageSpeech.css("opacity", 0);
        PriestSpeech.css("opacity", 0);
        RogueSpeech.css("opacity", 0);

        DwarfItem.css("animation-name", "none");
        MageItem.css("animation-name", "grow-shrink");
        PriestItem.css("animation-name", "grow-shrink");
        RogueItem.css("animation-name", "grow-shrink");
    });
    MageItem.click(function(){
        $("#SpeechPointer").css("left", "31%");
        MageItem.css("opacity", 1);
        DwarfItem.css("opacity", 0.5);
        PriestItem.css("opacity", 0.5);
        RogueItem.css("opacity", 0.5);

        DwarfSpeech.css("opacity", 0);
        MageSpeech.css("opacity", 1);
        PriestSpeech.css("opacity", 0);
        RogueSpeech.css("opacity", 0);
        
        DwarfItem.css("animation-name", "grow-shrink");
        MageItem.css("animation-name", "none");
        PriestItem.css("animation-name", "grow-shrink");
        RogueItem.css("animation-name", "grow-shrink");
    });
    PriestItem.click(function(){
        $("#SpeechPointer").css("left", "calc(67% - 70px)");
        PriestItem.css("opacity", 1);
        DwarfItem.css("opacity", 0.5);
        MageItem.css("opacity", 0.5);
        RogueItem.css("opacity", 0.5);

        DwarfSpeech.css("opacity", 0);
        MageSpeech.css("opacity", 0);
        PriestSpeech.css("opacity", 1);
        RogueSpeech.css("opacity", 0);

        DwarfItem.css("animation-name", "grow-shrink");
        MageItem.css("animation-name", "grow-shrink");
        PriestItem.css("animation-name", "none");
        RogueItem.css("animation-name", "grow-shrink");
    });
    RogueItem.click(function(){
        $("#SpeechPointer").css("left", "calc(96% - 70px)");
        RogueItem.css("opacity", 1);
        PriestItem.css("opacity", 0.5);
        DwarfItem.css("opacity", 0.5);
        MageItem.css("opacity", 0.5);

        DwarfSpeech.css("opacity", 0);
        MageSpeech.css("opacity", 0);
        PriestSpeech.css("opacity", 0);
        RogueSpeech.css("opacity", 1);

        DwarfItem.css("animation-name", "grow-shrink");
        MageItem.css("animation-name", "grow-shrink");
        PriestItem.css("animation-name", "grow-shrink");
        RogueItem.css("animation-name", "none");
    });

    $("#MenuExpander").click(function(){
        if($(".main-links-list").height() == "152")
        {
            $(".main-links-list").height("0px");
        }
        else
        {
            $(".main-links-list").height("152px");
        }
    });
*/
    $("#HomeLink").click(function(){
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
        $('#MainImg').slick('slickGoTo', 0);
    });
    $("#StudioLink").click(function(){
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
        $('#MainImg').slick('slickGoTo', 1);
    });
    $("#ContactLink").click(function(){
        $('#MainImg').slick('slickGoTo', 0);
        $('html, body').delay(500).animate({
            scrollTop: $("#Contact").offset().top
        }, 1000);
    });

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