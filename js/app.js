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
	    playCool();	
	    $('.ryu-ready').hide();
	    $('.ryu-still').hide();
	    $('.ryu-cool').show();
    }   
  }).keyup(function(e) {
  		stopCool();
	    $('.ryu-cool').hide();
	    $('.ryu-still').show();
    // }
  });


function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

var coolMusic = false;

function playCool() {
	coolMusic = !coolMusic;
	if (coolMusic) {
		$('#so-cool')[0].volume = 0.5;
		// $('#so-cool')[0].load();
		$('#so-cool')[0].play();
	}
}

function stopCool() {
	$('#so-cool')[0].pause();
	$('#so-cool')[0].load();
}
