<?php
$servername = "localhost";
$username = "adhu";
$password = "xxkxx212";
$dbname = "User";
//Create connection
$conn = new mysqli($webtech, $adhu, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$user = $_REQUEST['user'];
$pass = $_REQUEST['password'];
//
$sql = "SELECT id FROM admin WHERE username = '$user' and passcode = '$pass'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
$active = $row['active'];
$count = mysqli_num_rows($result);
//
if($count == 1) {
    session_register("username");
    $_SESSION['login_user'] = $user;
    
    header("location: home.php");
 }else {
    $error = "Your Login Name or Password is invalid";
 }