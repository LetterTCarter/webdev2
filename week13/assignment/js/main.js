$(function() {
	console.log("Document is ready for action");

	//hide the initial quiz area
	$('#mainContent article').hide();
	$('.state p').hide();

	//function to display states on menu item click
	$('li').click(function() {
		var selectedArticle = $("#" + this.id + "Quiz");
        if ($(selectedArticle).is(":visible")) {
          $(selectedArticle).fadeOut({duration: 800});
        } else {
          $("#mainContent article").hide(),
					$('.state p').hide();
          $(selectedArticle).slideDown(1000, "swing");
        };
				$("#home h4").replaceWith("<h4>Click the state for the answer!</h4>");
				//loads the answer on click of the state
				$('article img').click(function() {
					$('.state p').show().removeClass("quiz").addClass("visible");
				})
		});

	//click function to reload the page
	$('header h1').click(function() {
		location.reload();
	});
});
