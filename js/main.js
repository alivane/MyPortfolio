$(document).ready(function(){
	var contador = 1 ;
	$('.hola').css('display','none')
	$('nav').css('display','none')
	$("i").click(function(){
		$('nav').toggle();
		$('.hola').toggle();
		$('.fa-bars').toggle();
	})
})