$(document).ready(function(){
		$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			});
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		// hide hadouken & stop sound
		// hide ryu-throwing and show ryu-ready
	})

});


$(document).keydown(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
      $('.ryu-cool').show();
    }   
  }).keyup(function(e) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    // }
  });







 // $(document).keydown(function(e) {
 //        if (e.which == 88) {
 //        	// alert('Press the x!');
 //           $('.ryu-ready').hide();
 //           $('.ryu-still').show();
 //        }
    // }).keyup(function(e) {
    //     if (e.which == 88) {
    //     	// alert('Press the x!');
    //        // $('.ryu-ready').show();
    //        // $('.ryu-cool').hide()};
// });



function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}