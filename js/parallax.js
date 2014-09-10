var st = $(window).scrollTop(),
	h = $(window).height(), w = $(window).width(),
	section01_bg_length = st / 3,
	alpha;

var set_screen = function () {
	st = $(window).scrollTop();
	h = $(window).height();
	w = $(window).width();

	section01_bg_length = st / 3;

	// The startpoint is when the top of the screen has reached 400% of the browser window, or rather, it has travelled four screen lengths
	var section04_icons_startpoint =  h * 1.4;

	// How many steps into the fifth section have been taken
	var section04_icons_iterator =  (st - section04_icons_startpoint) / (h);

	var section04_icons_width = $('.section04').width();

	// The object's position is speed times steps
	var	section04_icons_position = ((-w * section04_icons_iterator)) + (w * 0.5);

	$('.section01').css({
		'-webkit-transform' : 'translateY(' + section01_bg_length + 'px)',
		'-moz-transform' : 'translateY(' + section01_bg_length + 'px)',
		'-o-transform' : 'translateY(' + section01_bg_length + 'px)',
		'transform' : 'translateY(' + section01_bg_length + 'px)'
	});

	if (st > h * 1.5) {
		$('.section03').animate({'background-color' : '#FFF770'});
	}

	if (st < h * 1.5) {
		$('.section03').animate({'background-color' : 'auto'});
	}

	// Icon animations, starts at 4 screen height down the screen
	if (st > section04_icons_startpoint) {
		$('.section03-iconbox').css({'-webkit-transform' : 'translateX(' + section04_icons_position.toString() + 'px)'});
		$('.section03-iconbox').css({'-moz-transform' : 'translateX(' + section04_icons_position.toString() + 'px)'});
		$('.section03-iconbox').css({'-o-transform' : 'translateX(' + section04_icons_position.toString() + 'px)'});
		$('.section03-iconbox').css({'transform' : 'translateX(' + section04_icons_position.toString() + 'px)'});
	}
};

$().ready(set_screen);

$(window).scroll(set_screen);
$(window).resize(set_screen);
