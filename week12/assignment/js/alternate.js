$(function () {
  console.log("Document ready is loaded.");

  //select all of the recipe articles
  var
    menuItems = $('#navDiv li'),
    recipeArticles = $('article'),
    i = 0,
    j = 0;

    //give each nav item a unique ID
    menuItems.each(function(indx, elm){
      $(this).attr("id", "link" + i++);
    });

    //give each recipe article a unique ID
    recipeArticles.each(function(indx, elm){
      $(this).attr("id", "recipe" + j++);
    });

    $('#link0').click(function() {
      $("#recipe0").animate({opacity: 1}, 2000),
      $('article:first').nextAll().fadeOut("slow");
    });

    $('#link1').mouseenter(function() {
      $('recipe').fadeOut("slow"),
      $('article #recipe1').animate({opacity: 1}, 2000);
    });

    $('#link2').click(function() {
      $('article.prev').fadeOut("slow"),
      $('#recipe2').slideToggle('slow', 'swing').css("opacity", "1");
    });

    $('#link3').click(function() {
      $('#recipe3').animate({opacity: 1})
    })
});
