(function ($) {
	'use strict';
	$.fn.slider = function (options) {

	//default options
	var settings = $.extend($.fn.slider.defaultOptions, options);

	var init = function () {
		var $this = $(this);
		var width = $this.width();
		$this.find('.image img').css('width' , width + 'px');
		$this.find('.left.image').css('width' , Math.floor(width * settings.initialPosition));
		if (settings.showInstruction) {
			var $instrDiv = $('<div></div>')
				.addClass('instruction')
				.append('<p></p>');

			$instrDiv.children('p')
				.text(settings.instructionText);

			$this.append($instrDiv);	

			//set left offset of instruction
			$instrDiv.css('left', (settings.initialPosition - $instrDiv.children('p').width() / (2 * width)) * 100 + '%');
		}			
	};

	var slideResize = function (e) {
		e.preventDefault();
		//hide instructions
		$(e.currentTarget).children('.instruction').hide();
		var width;
		if(e.type.startsWith('touch')){
			width = e.originalEvent.touches[0].clientX - e.currentTarget.offsetLeft;
		} else {
			width = e.offsetX === undefined ? e.pageX - e.currentTarget.offsetLeft : e.offsetX;
		}
		$(this).find('.left.image').css('width', width + 'px');
	};

	var enableSliderDrag = function (e) {
		e.preventDefault();
		$(this).css('cursor' , 'ew-resize')
			.on('mousemove.sliderns', slideResize)
			.on('touchmove.sliderns', slideResize);
	};

	var disableSliderDrag = function (e) {
		e.preventDefault();
		$(this).css('cursor', 'normal')
			.off('mousemove.sliderns')
			.off('touchmove.sliderns');
	};

	var redrawSlider = function () {
		return $('.slider.responsive').each(init);					
	};
	
	$(window).on('resize', redrawSlider);
	return this.each(init)
		.on('click touchstart', slideResize)
		.on('mousedown touchstart', enableSliderDrag)
		.on('mouseup touchend', disableSliderDrag);
	};

	$.fn.slider.defaultOptions= {
			initialPosition: 0.2,
			showInstruction: false,
			instructionText: 'Click and Drag'
	};	

}(jQuery));