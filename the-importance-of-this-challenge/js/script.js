$(".stream-nav").on("click", function() {
    // A selector to match all cards in all streams
    var allStreamsCardsSelector = ".card";
    // A selector to match just this stream's cards
    // for this, we use the class with the name of the stream,
    // which is the same as this nav link's id and then the "-card" suffix.
    var thisStreamCardsSelector = "." + this.id + "-card";

    // First remove the highlight from all of the cards
    $(allStreamsCardsSelector).removeClass("card-highlight");
    // Then apply the highlight to just this stream's cards
    $(thisStreamCardsSelector).addClass("card-highlight");
});

$(".stream-nav").on("click", function() {
    var allStreamsCardsSelector = ".card";
    var thisStreamCardsSelector = "." + this.id + "-card";

    $(allStreamsCardsSelector).removeClass("card-highlight");
    $(thisStreamCardsSelector).addClass("card-highlight");
});

// //  Challenge: Add yellow highlights to links 

// $("p").on("click", function(){
//     var pLink = $(this).children("a");
//     $(pLink).addClass("highlightAnchor");
// });


// // Challenge 1 Traversing: Now with this knowledge of traversing the DOM, 
// // we can continue from the previous lesson. Given the following HTML, 
// // what is the relationship between the button and p elements? 
// // Use that relationship to close the p element using .slideToggle(‘slow’)

// $("button").on("click", function(){
//     var descritionP = $(this).prev("p");
//     $(descritionP).slideToggle("slow");
// });


// // Challenge 2 Traversing: Return to the cards page: 
// // Give the paragraphs inside the cards a display: none;
// // Use slideDown to display the card paragraphs when the card_image is clicked.

// $(document).ready(function(){
//   $("button").prev("p").css("display", "none"); 

//   $(".card_image").on("click", function(){
//       var hiddenP = $(this).next().children("p");
//       $(hiddenP).slideDown("slow");
//   });
// });


// // Challenge 3 Traversing: When a card is clicked on, the background color is highlighted
// // – e.g., set background-color to pink via adding a new class. 
// // When the card is clicked again, it is unhighlighted

$(document).ready(function() {
    $(".card").on("click", function() {
        $(this).toggleClass("card-highlight");
    });
});


// Challenge 4: Add two more nav elements to the nav bar, select and all. 
// When select is clicked, all panels disappear except those highlighted by clicking on them. 
// It is a difficult challenge. Think about what is different about the highlighted panels. 
// How could we select only those without the highlighting?
// Then make all the panels reappear by clicking all. 
// A lot is going on here, but this combining of functions and selections is what makes jQuery so powerful. 
// Take your time to understand what’s happening before moving on to the next section.


// $(document).ready(function() {
//     $("#select_btn").on("click", function() {
        
//         var panel = (".card");
        
//         if (panel.class("card-highlight")){
//             $(panel).show();
//         } else {
//             $(panel).hide();
//         }
//     });
// });

// $(document).ready(function() {
//     $("#select_btn").on("click", function() {
        
//         // var panel = $("#select_btn").parent().parent().next();
//         var panel = 
        
//         if ((div.class("card-highlight")) === true){
//             $(div).css("display", "initial");
//         } else {
//             $(div).css("display", "none");
//         }
//     });
// });

// Some help from the instructor (advised to use the :not)

$(document).ready(function() {
    $("#select_btn").on("click", function() {
        
        var panel = $("#select_btn").parent().parent().next();
        
        if ("panel:not(.card-highlight)"){
            $(".card").hide();
        } else {
            $("panel").show();
        }
    });
});