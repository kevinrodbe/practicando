;(function($,window,undefined){/*la recibimso en una variable*/
	/*con la variable $ nos aseguramos que adentro de nuestra función, 
	$ es solamente un obj jquery. así $ no sea otra librería que usa $ como un objeto
	*/
	//Closure - función anónima
	$.fn.carousel=function(prev,sig){
		//este this es un obj jquery: varios li		
		return this.each(function(){
			/* este this dentro de este scope es un elemento del dom o elemtento HTML
			 puede ser un div, li, table, etc.. */
			$container=$(this).children().eq(0);
			/*=#marco->UL,LI,LI,LI---> Conatiner contendrá a UL porque es el 1ero*/
			console.log($container);
			if ($container) {
				var $fotos=$container.children();
				/*children() devuelve un obj jquery*/
				var cantidad=$fotos.length;
				var incremento=$fotos.outerWidth(true);
				/*outerWidth viene por defecto con FALSE.
				nos devuleve el ancho del elemento + padding y border. CON TRUE
				devuelve lo mismo más su margin				*/
				var enMarquesina=Math.floor($(this).width()/incremento);
				/*cuantos se estaran viendo*/
				var primerElemento=1;
				var estaMoviendo=false;
			};
			$container.css('width',(cantidad+enMarquesina)*incremento);
			for (var i = 0; i <enMarquesina; i++) {
				$container.append($fotos.eq(i).clone());
			};
			$(sig).click(function(e){
				e.preventDefault();
				if(!estaMoviendo){
					estaMoviendo=true;
					$container.animate({
						left: '-='+incremento
					},'swing',function(){
						estaMoviendo=false;
					});
				}
			});


		});
	}

})(jQuery, window)/*como parametro un obj jquery así la tenemos disponible en nuestra funcion 
y será recibida en la variable $ */
/*tambien podemos pasar otro parametro, y este puede ser global como window*/