<?php
  if(isset( $_POST['FullName']))
  $name = $_POST['FullName'];

  if(isset( $_POST['InputEmail']))
  $email = $_POST['InputEmail'];

  if(isset( $_POST['InputPhone']))
  $phone = $_POST['InputPhone'];

  if(isset( $_POST['InputPickup']))
  $pickupAddress = $_POST['InputPickup'];

  if(isset( $_POST['InputDateTime']))
  $datetime = $_POST['InputDateTime'];


  $content="From: $name \n Email: $email \n Phone: $phone \n Pickup Address : $pickupAddress \n Date Time : $ $datetime" ;
  $recipient = "harsh.autowebbed@gmail.com";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $content, $mailheader) or die("Error!");
  echo "Email sent!";
?>