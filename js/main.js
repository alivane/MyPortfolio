$(document).ready(function(){
	$('.hola').css('display','none')
	$('nav').css('display','none')
	$(".bt-menu i").click(function(){
		$('nav').toggle();
		$('.hola').toggle();
		$('.fa-bars').toggle();
	})
})
$(document).ready(function(){
	myFunction()
	function cambiarLetra(){
		$('.contenido h1').html('<h1>Soy Front-End</h1>')
	}
	function cambiarLetra1(){
		$('.contenido h1').html('<h1>Tengo habilidades para Back-End</h1>')
	}
	function cambiarLetra2(){
		$('.contenido h1').html('<h1>Mi Lema Responsabilidad, y trabajo en equipo</h1>')
	}
	var nuevaLetra;
	function myFunction(){
		nuevaLetra = setInterval(cambiarLetra,5000);
		nuevaLetra = setInterval(cambiarLetra1,10000);
		nuevaLetra = setInterval(cambiarLetra2,15000);
	}
});