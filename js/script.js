$(document).ready(function() {

	changeContainerSize();

	hideSliderBlock();
	
	$('ul.tablist li').click(function() {
		var tab_id = $(this).attr('data-tab');

		$('ul.tablist li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
 
	$('#foo').click(function() {
		$('#slide-out').toggleClass('menu--active');
	});

	$(window).resize(changeContainerSize);

	$(window).resize(hideSliderBlock);

	function changeContainerSize() {
		if($(window).width() < 992) {
			$('.new-width').addClass('container').removeClass('container-fluid');
		} else {
			$('.new-width').addClass('container-fluid').removeClass('container');
		}
	}

	function hideSliderBlock() {
		if($(window).width() < 1370) {
			$('.all').css('display', 'none');
		} else {
			$('.all').css('display', 'block');
		}
	}

	$('.best-masters__show-map').click(activeSearchBlock);

	$('.best-masters__hide-map').click(function(event){
		activeBestMastersBlock(event);
		hideSliderBlock(event);
	});

	function activeSearchBlock() {
		$('.best-masters').css('background-color', '#373737').css('color', '#ffffff');
		$('.best-masters__show-map').css('display', 'none');
		$('.best-masters__hide-map').css('display', 'block');
		$('.all').css('display', 'none');
		$('.best-masters__hide-search').css('display', 'block');
	}

	function activeBestMastersBlock() {
		$('.best-masters').css('background-color', '#F8F8F8').css('color', 'black');
		$('.best-masters__show-map').css('display', 'block');
		$('.best-masters__hide-map').css('display', 'none');
		$('.all').css('display', 'block');
		$('.best-masters__hide-search').css('display', 'none');
	}

	$('#extended-search').click(activeExtendedSearch);

	$('#reset-search').click(resetExtendedSearch);

	function activeExtendedSearch() {
		$('#reset-search').css('display', 'block');
		$('#extended-search').css('display', 'none');
		$('#select-district').css('display', 'block');
		$('#select-extended-service').css('display', 'block');
		$('#price').css('display', 'block');
		$('#distance-search').css('display', 'block');
		$('.wrap-search-checkbox').css('display', 'flex');
	}

	function resetExtendedSearch() {
		$('#reset-search').css('display', 'none');
		$('#extended-search').css('display', 'flex');		
		$("#select-city").val('Днепр');
		$("#select-district").val('Днепровски р-н').css('display', 'none');
		$("#select-service").val('Маникюр');
		$("#select-extended-service").val('Свадебный маникюр').css('display', 'none');
		$('#min-price').val('0');
		$('#max-price').val('400');
		$('#price').css('display', 'none');
		$('#radius5').prop('checked', 'checked');
		$('#distance-search').css('display', 'none');
		$('#search-checkbox input:checked').prop('checked', false);
		$('#search-checkbox').css('display', 'none');
	}

});