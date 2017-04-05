$(document).ready(function() {
	// Create Post
	$('#posts').on('submit', function(e) {
		e.preventDefault()
		var url = this.getAttribute("action"),
			form = this,
			request = $.ajax({
				method: 'POST',
				url: url,
				data: $(form).serialize()
			});

		request.done(function(data) {
			$('.post-container').append(data)
		})
	});

	// Add Vote to a single post
	$('.post-container').on('click', '.vote-button', function(e) {
		e.preventDefault()
		var url = this.href,
			button = this,
			request = $.ajax({
			method: 'GET',
			url: url
		});

		request.done(function(response) {
			$('.vote-button').removeClass('active')
			$(button).parent().find('.points').html(response.points)
			$(button).addClass('active')
		})
	});
	// Delete Post
	$('.post-container').on('click', '.delete', function(e) {
		e.preventDefault()
		var url = this.href,
			button = this,
			request = $.ajax({
			method: 'DELETE',
			url: url
		});

		request.done(function(response) {
			document.getElementById(response.post_id).remove();
		})
	});
});
