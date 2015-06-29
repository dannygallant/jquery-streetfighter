$(document).ready(function(){
	runIntro();
	play();
});

function play() {
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
	})
};

	$(document).keydown(function(e) {
    if (e.keyCode == 88) {
	    playCool();	
	    $('.ryu-ready').hide();
	    $('.ryu-still').hide();
	    $('.ryu-cool').show();
    }   
  })
	.keyup(function(e) {
		if (e.keyCode == 88) {
  		stopCool();
	    $('.ryu-cool').hide();
	    $('.ryu-ready').show();
	}
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

function runIntro() {
  $('.sf-logo').fadeIn(2500, function() {
    $(this).fadeOut(1000, function() {
      $('.tech-logos').fadeIn(2500, function() {
        $(this).fadeOut(1500, function() {
      	  $('.presented-by').fadeIn(2500, function() {
         	  $('.throw').fadeIn(1000);
              	$('.look-cool').fadeIn(1000);
          })
        })
      })
    })
  })
}
