<?php

if (isset($_POST["myemailform"]) && !empty($_POST["myemailform"]))
{
	//This page shouldn't be accessed directly.
	echo "error; you need to submit the form";
}
$name = $_POST['name'];
$email = $_POST['email'];
$enquiry = $_POST['enquiry'];

$email_subject = "New form submission";
$email_body = "You got a new message from the following user: $name.\n".
"Email address: $email\n".
"Here is the message: \n $enquiry\n\n\n\n\n\n This message was sent to:".

$to = "tomemmersonba@gmail.com";
$headers = "From: someone@tomemmerson.website";

//send email
mail($to,$email_subject,$email_body,$headers);


//navigate back to webpage
header("Location:http://tomemmerson.website/pages/confirmation.html");
?>