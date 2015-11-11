//Document ready function
$(function() {
  //creating the image rotator
  setInterval("rotateImages()", 3000);
});

//rotating image function
function rotateImages () {
  //select the current photo
  var oCurPhoto = $('#hero div.current');
  //select the next photo
  var oNxtPhoto = oCurPhoto.next();
  if (oNxtPhoto.length == 0)
      oNxtPhoto = $('#hero div:first');
      //if photo is current, mark as previous
      oCurPhoto.removeClass('current').addClass('previous');
      //fade out current photo and move previous photo up
      oNxtPhoto.css({opacity: 0.0}).addClass('current').animate({opacity: 1.0}, 1000, function() {
        oCurPhoto.removeClass('previous');
      });
};
