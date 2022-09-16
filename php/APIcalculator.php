<?php
// On autorise react a accéder au php aved les paramétre KORS
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");

// On récupère les donnée avec
$donnee_body = file_get_contents('php://input');
$donnee = json_decode($donnee_body, true);
$calcul= (STRING) $donnee['nombres'];
$resultat = $donnee['res'];

$bdd = new PDO("mysql:host=localhost;dbname=calculator9000;charset=utf8",'root','');
$bdd->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
$bdd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

$sql = "INSERT INTO `calculs`( `calcul`, `resultat`) VALUES (:calcul, :resultat)";
$result = $bdd->prepare($sql);
$result->execute([
    'calcul' => $calcul,
    'resultat' => $resultat
]);
?>