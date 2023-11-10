<?php
  if(isset( $_POST['FullName']))
  $name = $_POST['FullName'];
  if(isset( $_POST['InputEmail']))
  $email = $_POST['InputEmail'];
  if(isset( $_POST['InputPhone']))
  $phone = $_POST['InputPhone'];


  $content="From: $name \n Email: $email \n Message: $phone";
  $recipient = "harsh.autowebbed@gmail.com";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $content, $mailheader) or die("Error!");
  echo "Email sent!";
?>