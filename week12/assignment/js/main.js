$(function () {
  console.log("Document ready is loaded.");
  //build the nav menu
  //select all of the recipe headings
  var menuItems = $('article h2');
  //create an unordered list to hold the headings
  var list = $("<ul id='bookmarks'>");
  //create a counter to generate a unique tag name for each anchor
  var i = 0;

  //give each recipe heading a named anchor and a link for the list and set the HTML of the h2 to contain the link destination
  menuItems.each(function(indx, elm){
  //make a new LI tag for the list that links to the anchor tag and has the same text as the H2
  list.append($("<li><a href='#bookmark" + i++ + "'> " + $(this).text() + "</a></li>").addClass('btn a'));
});
//insert the new menuItems list in the navDiv
$('#navDiv').html(list);

  //select all of the articles
  var
    recipeArticles = $('article'),
    link = $(this).html("<a name='bookmark" + i++ + "'></a>" + $(this).html()),
    j = 0;

    //give each recipe article a unique ID
    recipeArticles.each(function(indx, elm){
      $(this).attr("id", "recipe" + j++);
      $(link).click(function() {
          $("#introPara").fadeOut("slow"),
          $("#recipe0").animate({opacity: 1}, 4000);
      });
  });
});
