// equal box height jquery code
equalheight = function (container) {

	var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = new Array(),
		$el,
		topPosition = 0;
	$(container).each(function () {

		$el = $(this);
		$($el).height('auto')
		topPostion = $el.position().top;

		if (currentRowStart != topPostion) {
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0; // empty the array
			currentRowStart = topPostion;
			currentTallest = $el.height();
			rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}
		for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
}

$(document).ready(function () {
	$(".product-slider").slick({
		vertical: true,
		slidesToShow: 4,
		slidesToScroll: 3,
		arrows: true,
		adaptiveHeight: true
	});
});

$(window).resize(function () {

});

$(window).load(function () {
	equalheight('');
});

$(window).resize(function () {
	equalheight('');
});


// function homeMainContentHeight() {
// 	var headerHeight = $('#header').innerHeight();
// 	var windowHeight = $(window).innerHeight();
// 	var mainListHeight = windowHeight - headerHeight;

// 	$('.main-product-listing').css('min-height', mainListHeight + 'px');
// }