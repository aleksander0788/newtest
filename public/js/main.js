$(document).ready(function(){
	var li = $('.client-nav__list-item');

	li.hover(
		function (e) {
			console.log('hi there');
			$(this).children('.client-nav__dropdown').toggle();
			$(this).children('span').toggle();

		});

	$('.partners__carousel').slick({
    infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 3,
	  prevArrow: '<span class="slick-arrow"></span>',
	  nextArrow: '<span class="slick-arrow slick-next"></span>'

  });

});