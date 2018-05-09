// $("p").click(function(){
//     $(this).slideToggle("slow");
// });

// Code above was to show how does THIS work

$("button").mouseenter(function(){
    $(this).removeClass("makeRed").addClass("makeBlue");
});
$("button").mouseleave(function(){
    $(this).removeClass("makeBlue").addClass("makeRed");
});

