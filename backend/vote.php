<?php
include './connection.php';
$party = $_POST['party'];
$voterId = $_POST['voterId'];

$query = "SELECT * FROM `votes` WHERE `voterId` = '$voterId'";
$result = mysqli_query($link, $query);
if ($result->num_rows > 0) {
    echo json_encode("ALREADY VOTED");
    return;
}

$query = "INSERT INTO `votes` (`partyName`, `voterId`) VALUES (
    '".mysqli_real_escape_string( $link, $party )."', 
    '".mysqli_real_escape_string( $link, $voterId )."'
    )";

    if (mysqli_query($link, $query)) {
        echo json_encode('SUCCESS');
    } else {
        echo json_encode("FAILED");
    }
