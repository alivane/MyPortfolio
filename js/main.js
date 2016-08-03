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
	function cambiarFondo(){
		$('.contenido h1').html('<h1>Soy Front-End</h1>')
	}
	function cambiarFondo1(){
		$('.contenido h1').html('<h1>Habilidades en Back-End</h1>')
	}
	function cambiarFondo2(){
		$('.contenido h1').html('<h1>Mi Lema Responsabilidad, y trabajo en equipo</h1>')
	}
	var nuevoFondo;
	function myFunction(){
		nuevoFondo = setInterval(cambiarFondo,5000);
		nuevoFondo = setInterval(cambiarFondo1,10000);
		nuevoFondo = setInterval(cambiarFondo2,15000);
	}
});