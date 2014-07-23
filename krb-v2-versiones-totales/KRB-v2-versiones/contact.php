<?php
	$email=$_POST["emailc"];
	$msg=$_POST["msg"];
	$name=$_POST["name"];
	$para      = 'krb992@gmail.com';
	$titulo = $name.' quiere contactarte';
	$mensaje = $msg."\n\n".$email;
	$cabeceras = 'From:'.$email . "\r\n";

	mail($para, $titulo, $mensaje, $cabeceras);/*
	header("Location: http://www.kevinrodriguez.pe/#services");*/
	header('Location: ' . $_SERVER['HTTP_REFERER']);
?>