// $("p").click(function(){
//     $(this).slideToggle("slow");
// });

// Code above was to show how does THIS work

// $("button").mouseenter(function(){
//     $(this).removeClass("makeRed").addClass("makeBlue");
// });
// $("button").mouseleave(function(){
//     $(this).removeClass("makeBlue").addClass("makeRed");
// });

// Code above was to show THIS in action

// $(document).ready(function(){
//   $(".box").on("click", function(){
//       var classNames = $(this).attr("class").split(" ");
//       $("." + classNames[1]).css("background-color", "red")
//   }); 
// });

// The code avobe was to show how to create a variable containing a string, which can be split into two classes

$(document).ready(function(){
  $(".box").on("click", function(){
      var classNames = $(this).attr("class").split(" ");
      var boxClass = classNames[0];
      var className = classNames[1];
      if ($(this).css("background-color") == "rgb(255, 0, 0)") {
        //   If this object is already red, turn it black
        $("." + className).css("background-color", "#000");
      } else {
        //   else turn all elements with a box class black
        // and then change the color of all elements
        // with the same class name as the clicked element
        // to red.
        $("." + boxClass).css("background-color", "#000");
        $("." + className).css("background-color", "red");
      }
  }); 
});

