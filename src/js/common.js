$(document).ready(function(){


// popup's tabs
	// onClick
	if ($('.mgid_PopupElement').length) {
		$('.mgid_tabsPopup li').on('click', function(){
			var _linkChosen = $(this).children('a').attr('href');
			if (!$(this).hasClass('is-active')) {
				$('.mgid_tabsPopup li').removeClass('is-active');
				$(this).addClass('is-active');
				$('.mgid_tabsPopup-panel').removeClass('is-active');
				$('.mgid_PopupContent').find(_linkChosen).addClass('is-active');
			}
		});
	}
	// hide select-options on outer click
	$(document).click(function(e) {
		if ($(e.target).closest('.mgid_PopupInner').length === 0) {
			$('.mgid_PopupElement').hide();
		}
	});
	// close button
	$('.mgid_closePopup').on('click', function(){
		$(this).parents('.mgid_PopupElement').hide();
	});

// mgid custom select
	if ($('.mgid_select').length) {
		$('.mgid_select').each(function(){
			var _thisSelect = $(this);
			var _optionIndex = 0;

			// create custom select
			$(_thisSelect).hide();
			$(_thisSelect).parent().append('<div class="mgid_select-wrap"></div>')
			$(_thisSelect).siblings('.mgid_select-wrap').append('<div class="mgid_select-item" data-option="0"></div>');
			$(_thisSelect).siblings('.mgid_select-wrap').children('.mgid_select-item').append('<span class="mgid_select-text"></span>');
			$(_thisSelect).siblings('.mgid_select-wrap').children('.mgid_select-item').children('.mgid_select-text').text($(this).children('option').eq(0).text());
			$(_thisSelect).siblings('.mgid_select-wrap').children('.mgid_select-item').append('<span class="mgid_select-icon"></span>');

			// create list options
			$(_thisSelect).siblings('.mgid_select-wrap').append('<ul class="mgid_select-list"></ul>');
			$(_thisSelect).children('option').each(function(){
				var _optionText = $(this).text();
				$(_thisSelect).siblings('.mgid_select-wrap').children('.mgid_select-list').append('<li>'+_optionText+'</li>');
				_optionIndex++;
			});
			$(_thisSelect).siblings('.mgid_select-wrap').children('.mgid_select-list').children('li').eq(0).addClass('is-active');
		});

		// select logic
		$('.mgid_select-list li').on('click', function(){
			$(this).siblings('li').removeClass('is-active');
			$(this)
				.addClass('is-active')
				.parent()
				.siblings('.mgid_select-item')
				.attr('data-option', $(this).index())
				.children('.mgid_select-text')
				.text($(this).text());
			// selected option
			$(this).parent().parent().siblings('.mgid_select').children('option').removeAttr('selected');
			$(this).parent().parent().siblings('.mgid_select').children('option').eq($(this).index()).attr('selected', 'selected');
		});

		// hide select-options on outer click
		$(document).click(function(e) {
			if ($(e.target).closest('.mgid_select-item').length === 0) {
				$('.mgid_select-list').hide();
			}
		});

		// show/hide select options
		$('.mgid_select-item').on('click', function(){
			$(this).siblings('.mgid_select-list').toggle();
		});
	}
	
	
});