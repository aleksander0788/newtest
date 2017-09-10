$(document).ready(function(){

var li = $('.client-nav__list-item');

li.hover(
	function (e) {

		$(this).children('.client-nav__dropdown').toggle();
		$(this).children('span').toggle();

	})
});