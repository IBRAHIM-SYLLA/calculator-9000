<?php
// On autorise react a accéder au php aved les paramétre KORS
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");

$bdd = new PDO("mysql:host=localhost;dbname=calculator9000;charset=utf8",'root','');
$bdd->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
$bdd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

$sql = "SELECT * FROM `calculs`";
$result = $bdd->prepare($sql);
$result->execute();
$fetch = $result->fetchAll();

echo json_encode($fetch);
?>