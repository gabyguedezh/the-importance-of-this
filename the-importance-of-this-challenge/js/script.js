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

$(".stream-nav").on("click", function(){
    var allStreamsCardsSelector = ".card";
    var thisStreamCardsSelector = "." + this.id + "-card";
    
    $(allStreamsCardsSelector).removeClass("card-highlight");
    $(thisStreamCardsSelector).addClass("card-highlight");
});

$("p").on("click", function(){
    var pLink = $(this).children("a");
    $(pLink).addClass("highlightAnchor");
});

// Challenge Traversing: Now with this knowledge of traversing the DOM, 
// we can continue from the previous lesson. Given the following HTML, 
// what is the relationship between the button and p elements? 
// Use that relationship to close the p element using .slideToggle(‘slow’)

$("button").on("click", function(){
    var descritionP = $(this).prev("p");
    $(descritionP).slideToggle("slow");
});