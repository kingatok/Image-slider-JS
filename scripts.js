$(function() {
	var carouselList = $('#carousel ul');
	var interval = setInterval(changeSlides, 3000);
	function changeSlides() {
		carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
	}

	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({marginLeft: 0});
	}

	function moveLastSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		firstItem.before(lastItem);
		carouselList.css({marginLeft: -400});
	}

	$('#next').on('click', function(event) {
		clearInterval(interval);
		carouselList.animate({'marginLeft': -400}, moveFirstSlide);
	});

	$('#prev').on('click', function(event) {
		clearInterval(interval);
		carouselList.animate({'marginLeft': 0}, moveLastSlide);
	});
});