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
		$('#slider').css('background-image','url(img/portada1.png)')
		$('#slider h1').html('<h1>Codigo sin Fronteras</h1>')
	}
	function cambiarFondo1(){
		$('#slider').css('background-image','url(img/cabeza.jpg)')
		$('#slider h1').html('<h1>Soy Front-End</h1>')
	}
	function cambiarFondo2(){
		$('#slider').css('background-image','url(img/portada1.png)')
		$('#slider h1').html('<h1>Responsabilidad, y trabajo en equipo</h1>')
	}
	var nuevoFondo;
	function myFunction(){
		nuevoFondo = setInterval(cambiarFondo,10000);
		nuevoFondo = setInterval(cambiarFondo1,20000);
		nuevoFondo = setInterval(cambiarFondo2,30000);
	}
});