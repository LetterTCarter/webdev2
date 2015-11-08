$(function() {
  //adding the provided icon to the front of each list item in the nav
  $("<img src='icon.png'/>").prependTo("#menu li a");

  //changing the header background color on h1 click
  $("#header h1").click(function() {
    $("#header").toggleClass("newBackground");
  });

  //change the text color of an LI element in a sidebar sublist
  $("#sidebar_content_1 li a:first").css("color", "red");

  //Move the position of the even “numbered” LI elements in one of the sub-lists in the sidebar to the right by 5 pixels
  $("#sidebar_content_2 li a:even").css("padding-left", "5px");

  //clicking an h2 tag in the sidebar hides the content below it
  $("#sidebar h2:first").click(function() {
    $("#sidebar_content_1 ul").slideToggle();
  });

  //clicking the last h2 in the main content area replaces all of the content
  $("#content h2:last").click(function() {
    $("<p>This is new content in the #Content DIV. Though, not nearly as cool as RJ's moving box! ha!</p>").replaceAll("div #content");
  });
});
