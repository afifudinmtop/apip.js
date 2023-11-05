<?php
$username = $_POST['username'];
$password = $_POST['password'];

if ($username == "admin" && $password == "admin") {
    echo "ok";
}
else{
    echo "xxx";
}