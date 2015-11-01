$( document ).ready(function() {
  // Handler for .ready() called.
  //clicking an a tag changes the background color
  $("a").click(function() {
    $(this).toggleClass("black");
  });
  //clicking an h2 tag hides the title
  $("h2").click(function() {
  $(this).slideUp();
});

});
