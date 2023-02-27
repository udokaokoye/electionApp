<?php
include './connection.php';
$voterId = $_POST['voterId'];

$query = "SELECT * FROM `voters` WHERE `voterId` = '$voterId'";
$result = mysqli_query($link, $query);
if ($result->num_rows > 0) {
    $data = mysqli_fetch_assoc($result);
    echo json_encode($data);
} else {
    echo json_encode("NO VOTER");
}