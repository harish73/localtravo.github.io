<?php

//Receiving Data From HTML Form
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['Email'];
$number = $_POST['number'];
$password = $_POST['password1'];
//Receiving Data From HTML Form

//Encrypted Password
$password = md5($password);
//Encrypted Password

//Connection To Database
require_once('config.php');
$conn = mysqli_connect($a, $b, $c, $d);
//Connection To Database


//Query To Check If Email Is Registered Or Not
$query = $conn->prepare("SELECT * FROM customers WHERE email = ?");
$query->bind_param("s",$email);
//Query To Check If Email Is Registered Or Not

$query->execute();
$result = $query->get_result();

if($result->num_rows == 0)
{

	//Query To Insert User Details In Users Table
    $query = $conn->prepare("INSERT INTO customers (fname, lname,email,mobile,password) VALUES (?, ?, ?, ?, ?)");
    $query->bind_param("sssis", $fname, $lname, $email, $number,$password);
    //Query To Insert User Details In Users Table

    $query->execute();

    //Set Email And Password Cookie With 30 Days Validity
    $cookie1 = "email";
    $cookie2 = "password";

    setcookie($cookie1, $email, time() + (86400 * 30));
    setcookie($cookie2, $password, time() + (86400 * 30));
    //Set Email And Password Cookie With 30 Days Validity

    echo "<h1>Signup Success ! You Will Be Redirected To Dashboard After 5 Seconds..</h1>";

    //Redirect To Dashboard
    header( "refresh:5,url=tajmahal.html" );
    //Redirect To Dashboard
}
elseif($result->num_rows == 1)
{
	echo "<h1>Email Already Registered ! <a href='index.html'>Try Again</a></h1>";
}

?>





