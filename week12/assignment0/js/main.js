$(function () {
  console.log("Document ready is loaded.");
  //grab all of the article h2s for the nav
	var $recipeItems = $('article h2');
	//build the nav and make it function properly
	$recipeItems.each(function(i){
		//assign a unique id to the h2s with the h2 text
		$(this).parent().attr('id', 'recipe-' + i);
		var navText = $(this).text();
		//create an li and a element that links to cooresponding recipe title
		$('#navDiv').append('<a href="#recipe-' + i + '"><li>' + navText + '</li></a>').addClass('btn');

		var //created for menu functionality
			$link = $('a[href="#recipe-' + i + '"]'),
			$linkLi = $('a[href="#recipe-' + i + '"] li');
		//click any link
		$link.click(function(){
			//look for class current, fade it out...
			$('.current').animate({opacity: 0}, 200, function(){
				$(this).removeClass('current');//remove current class....
        $('article h1').detach();
			});
			//find the recipe that cooresponds to link and fade it in
			$('#recipe-' + i).animate({opacity: 1}, 2000, function(){
				$(this).addClass('current');//add class current
        $('article h2').prepend("<h1>What a tasty choice!</h1>");
			});
		});
    //add hover class on link hover
    $linkLi.hover(function() {
      $(this).toggleClass('hover');
    });
  });
  $('#navDiv h3').hover(function() {
    $(this).toggleClass('hover'),
    $(this).click(function(){
      $('#contentDiv').fadeOut(2000);
    });
  });
  animateHeader();
});
function animateHeader() {
	$("header").animate({
    width: "100%",
    opacity: 1
  }, 2000, "swing");
};
