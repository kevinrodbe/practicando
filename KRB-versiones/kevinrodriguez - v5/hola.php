<?php
	<?php
	$email=$_POST["emails"];
	$para      = 'krb992@gmail.com';
	$titulo = 'Suscripción';
	$mensaje = 'Quiero suscribirme: '.$_POST["emails"]."\n\n".$email;
	$cabeceras = 'From:  '.$email. "\r\n";


	mail($para, $titulo, $mensaje, $cabeceras);
	header("Location: http://www.kevinrodriguez.pe/#services");
?>
?>