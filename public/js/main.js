$(document).ready(function(){

var ul = $('.client-nav__dropdown');
var li = $('.client-nav__list-item');



// data('dropdown', li.index(this)+1)

li.hover(
	function (e) {

		// /**/console.log($(this).before('content'););
		// $(this).children('a').after('<span></span>');
		$(this).children('.client-nav__dropdown').toggle();
		$(this).children('span').toggle();

		/*$(this).data('dropdown', li.index(this));

		liNumber = $(this).data('dropdown');

		$(ul.get(liNumber)).toggle();*/

	})



});