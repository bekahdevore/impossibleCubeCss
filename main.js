$('#container').click(function(){
	if($('#container').hasClass('play')) {
		  $(this).stop().fadeOut(500);
  		  $('#container').stop().removeClass('play');
	} else {
		  $('#container').stop().addClass('play');
		  $('#pause').stop().fadeIn(500);
	}
});

$('#rc').click(function(){
  $('.hide').toggleClass('rc');
});
