$(document).ready(function(){
console.log('hi there');
var li = $('.client-nav__list-item');

li.hover(
	function (e) {
		console.log('hi there');
		$(this).children('.client-nav__dropdown').toggle();
		$(this).children('span').toggle();

	})
});