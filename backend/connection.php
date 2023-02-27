<?php
define( 'URLROOT', 'http://192.168.1.51/election' );
header( 'Access-Control-Allow-Origin: *' );
header( 'Access-Control-Allow-Methods: GET, POST, OPTIONS' );
header( 'Access-Control-Allow-Headers: *' );
header('X-Frame-Options: ALLOW');
// header( 'Content-Type: application/json; charset=utf-8' );

$link = mysqli_connect( 'localhost', 'root', '', 'election' );

if ( mysqli_connect_error() ) {
    die( 'There Was An Error Connecting To The Database' );
}
?>