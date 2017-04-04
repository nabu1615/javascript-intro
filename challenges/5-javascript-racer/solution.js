$(document).on('keyup', function(e) {
	var player1 = $('#player-one'),
	    player2 = $('#player-two');

	if (count(base) == 0) {
		if (e.which == 80) {
			move(player1);
		}

		if (e.which == 81) {
			move(player2);
		}
	}
})

function move(selector) {
	var currentActive = selector.find('.item__place span[class="active"]'),
		playerName = selector.find('.item__title').text();

	if (currentActive.data("index") !== 10 ) {
		selector.find('.item__place span').removeClass('active').addClass('disable');
		currentActive.next('.disable').removeClass('disable').addClass('active');
	} else {
		alert(`${playerName} Wins`)
	}
}

var base = $('#counter');

var count = function(base) {
	val = base.html();
	return val;
}

setInterval(function() {
	n = count(base)
	if (parseInt(n) !== 0) {
		base.html(count(base) - 1)
	}
}, 1000)	

