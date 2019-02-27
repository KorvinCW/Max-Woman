$(document).ready(function(){
	
	$('ul.tablist li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tablist li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	$(window).resize(function () {
		if($(window).width() < 992) {
			$('.new-width').addClass('container').removeClass('container-fluid');
		} else {
			$('.new-width').addClass('container-fluid').removeClass('container');
		}
	});

	$('#foo').click(function() {
		$('#slide-out').toggleClass('menu--active');
	});

});