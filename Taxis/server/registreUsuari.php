<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $json = file_get_contents('php://input');//Recibe el json de angular
  $params = json_decode($json);

  require("db.php");
  session_start();
  $con = retornarConexion();

  class Result{}
  $response = new Result();

  $instruccion = "select count(*) as 'rows' from usuaris where correu = '$params->correu'";
  $res = mysqli_query($con, $instruccion);
  $datos = mysqli_fetch_assoc($res);

  if ($datos['rows'] == 0) {

    // Insertem a la BBDD
    mysqli_query(
      $con, "insert into usuaris (nom,cognom,telefon,correu,contrasenya)
      values ('$params->nom','$params->cognom','$params->telefon','$params->correu','$params->pass')"
    );

    // GENERA LOS DATOS DE RESPUESTA
    $response->resultado = 'OK';
    $response->mensaje = 'Usuari Registrat, Enhorabona!';

  }elseif ($datos['rows'] != 0) {

    $response->resultado = 'KO';
    $response->mensaje = 'Aquest correu electronic ja esta registrat';

  }

  header('Content-Type: aplication/json');
  echo json_encode($response);

?>
