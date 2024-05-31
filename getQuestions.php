<?php
header('Content-Type: application/json');

// Read the JSON file
$jsonData = file_get_contents('questions.json');
echo $jsonData;
?>
