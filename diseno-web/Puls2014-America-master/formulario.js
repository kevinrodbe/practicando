var $form  = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#link'),
	$primerPost = $('.item').first(),
	$lista = $("#contenido");

if (localStorage.getItem('autosave')) {
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
}, 1000);

function mostrarOcultarFormulario(tito){
	tito.preventDefault();
	$form.slideToggle();
	$lista.slideToggle();
}

function agregarPost(e){
	console.log(e)
	e.preventDefault();
	var titulo = $titulo.val(),
		url = $url.val(),
		clone = $primerPost.clone();

	clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url)
	
	clone.hide()

	$lista.prepend(clone)
	mostrarOcultarFormulario();
	$titulo.val('');
	$url.val('');
	clone.slideDown();
}


$('nav').on('click', function(){ console.log("Soy un nav y me hicieron click");})
$('nav ul').on('click', function(){ console.log("Soy un ul y me hicieron click");})

$('#publicar_nav a').click( mostrarOcultarFormulario );
$('#formulario').on('submit', agregarPost)