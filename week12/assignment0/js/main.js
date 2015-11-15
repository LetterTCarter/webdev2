$(function () {
  console.log("Document ready is loaded.");
  //create the nav menu by grabbing h1 titles
	var $recipeItems = $('article h2');
	//this function builds the nav and all of it's functionality
	$recipeItems.each(function(i){
		//create unique id for each article containing H1 recipe title
		$(this).parent().attr('id', 'recipe-' + i);
		var navText = $(this).text();
		//create an li and a element that links to cooresponding recipe title
		$('#navDiv').append('<a href="#recipe-' + i + '"><li>' + navText + '</li></a>').addClass('btn');

		var //vars created AFTER nav is built
			$link = $('a[href="#recipe-' + i + '"]'),
			$linkLi = $('a[href="#recipe-' + i + '"] li')
		;
		//click any link
		$link.click(function(){
			//look for class current, fade it out...
			$('.current').animate({opacity: 0}, 200, function(){
				$(this).removeClass('current');//remove current class....
			});
			//find the recipe that cooresponds to link and fade it in
			$('#recipe-' + i).animate({opacity: 1}, 1400, function(){
				$(this).addClass('current');//add class current
			})
		});
  });
//insert the new menuItems list in the navDiv
$('#navDiv').html(list);
});
