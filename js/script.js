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
		$('#select-city').val('Днепр');
		$('#select-district').val('Днепровски р-н').css('display', 'none');
		$('#select-service').val('Маникюр');
		$('#select-extended-service').val('Свадебный маникюр').css('display', 'none');
		$('#min-price').val('0');
		$('#max-price').val('400');
		$('#price').css('display', 'none');
		$('#radius5').prop('checked', 'checked');
		$('#distance-search').css('display', 'none');
		$('#search-checkbox input:checked').prop('checked', false);
		$('#search-checkbox').css('display', 'none');
	}

	$('#m-search-active_map').click(activeMapBlock);

	$('#m-search-active_list').click(activeListBlock);

	function activeMapBlock() {
		if ($('#m-map_block').css('display') == 'none') {
			$('#m-map_block').css('display', 'block');
			$('#m-search-active_map').addClass('m-search-tab_bg');
			$('#m-search-active_list').removeClass('m-search-tab_bg');
			$('#m-list_block').css('display', 'none');
		}
	}

	function activeListBlock() {
		if ($('#m-list_block').css('display') == 'none') {
			$('#m-list_block').css('display', 'block');
			$('#m-search-active_list').addClass('m-search-tab_bg');
			$('#m-search-active_map').removeClass('m-search-tab_bg');
			$('#m-map_block').css('display', 'none');
		}
	}

	$('#m-footer_reset-search').click(resetMobileSearch);

	function resetMobileSearch() {		
		$('#m-select-city').val('Днепр');
		$('#m-select-district').val('Днепровски р-н');
		$('#m-select-service').val('Маникюр');
		$('#m-select-extended-service').val('Свадебный маникюр');
		$('#min-price').val('0');
		$('#max-price').val('400');
		$('#m-search-checkbox input:checked').prop('checked', false);
	}

	$('.m-tab-link').click(function() {
		var m_tab_id = $(this).attr('data-tab');

		$('.m-tab-link').removeClass('m-current');
		$('.m-tab-content').removeClass('current');

		$(this).addClass('m-current');
		$("#" + m_tab_id).addClass('current');
	});

	$('#m-about_text-more').click(showMoreText);

	function showMoreText() {
		$('.m-about_text').addClass('m-about_more-text');
		$('.m-about_text').removeClass('m-about_text');
		$('#m-about_text-more').css('display', 'none');
	}

	$('#m-show-menu').click(showHeaderMenu);
	$('#exit-menu').click(hideHeaderMenu);
	
	function showHeaderMenu() {
		$('#m-slide-out').css('left', '0');
	}
	
	function hideHeaderMenu() {
		$('#m-slide-out').css('left', '-100%');
	}

	

	$('#m-news-active_news').click(activeNewsBlock);

	$('#m-news-active_blog').click(activeBlogBlock);

	function activeNewsBlock() {
		if ($('#m-news-news_block').css('display') == 'none') {
			$('#m-news-news_block').css('display', 'block');
			$('#m-news-active_news').addClass('m-search-tab_bg');
			$('#m-news-active_blog').removeClass('m-search-tab_bg');
			$('#m-news-blog_block').css('display', 'none');
		}
	}

	function activeBlogBlock() {
		if ($('#m-news-blog_block').css('display') == 'none') {
			$('#m-news-blog_block').css('display', 'block');
			$('#m-news-active_blog').addClass('m-search-tab_bg');
			$('#m-news-active_news').removeClass('m-search-tab_bg');
			$('#m-news-news_block').css('display', 'none');
		}
	}

});