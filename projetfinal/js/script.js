
$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});
$(document).ready(function(){
    $('#boutonh1').click(function() {
        $('h1').css("background-color", "red");
    });
});


$(document).ready(function() {
    $("#btn2").click(function () {
        $("#test2").html("<b>Merci à l'univers de nous avoir donnée de si bon joueur et joueuse de hockey au canada</b>");
    });
});


$(document).ready(function(){
    $('#victorieux').click(function(){
        $("img").attr("width", "500");
    });
});

$(document).ready(function(){
    $('#boutonh2').click(function() {
        $('h2').css("background-color", "green");
    });
});

$(document).ready(function() {
    $("#btn3").click(function () {
        $("#test3").html("<b>Christine Sinclaire est petêtre anglophne, mais c'est une très belle femme</b>");
    });
});


$(document).ready(function(){
    $('#victorieuse').click(function(){
        $("img").attr("width", "500");
    });
});

var waypoint = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function(direction) {
        console.log('Scrolled to waypoint!')
    }
});

