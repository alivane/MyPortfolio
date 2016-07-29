$(document).ready(function(){
	var contador = 1 ;
	$('.hola').css('display','none')
	$('nav').css('display','none')
	$(".menu_bar").click(function(){
		$('nav').toggle();
		$('.hola').toggle();
		$('.fa-bars').toggle();
	})
})