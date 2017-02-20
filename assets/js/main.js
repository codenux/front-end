/*!
 * Main Javascript
 *
 * Contributing author: Rully Ardiansyah (@DeVoresyah)
 */
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('#main-menu').addClass('navbar-fixed-top');
        $('#main-menu').removeClass('top-menu');
		$('#main-menu').addClass('top-fixed-menu');
    } else {
        $('#main-menu').removeClass('navbar-fixed-top');
        $('#main-menu').removeClass('top-fixed-menu');
		$('#main-menu').addClass('top-menu');
    }
});

$(document).ready(function(){
	$('.side-menu').css('height', $('.content').height());
})