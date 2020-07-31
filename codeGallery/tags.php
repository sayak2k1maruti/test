<?php
require_once("../php.php");
$stmt = $pdo->prepare('SELECT tag_name FROM Tags
    WHERE tag_name LIKE :prefix');
$stmt->execute(array( ':prefix' => $_GET['term']."%"));
$retval = array();
while ( $row = $stmt->fetch(PDO::FETCH_ASSOC) ) {
    $retval[] = $row['tag_name'];
}
echo(json_encode($retval, JSON_PRETTY_PRINT));
?>