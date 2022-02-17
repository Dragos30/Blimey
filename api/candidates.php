<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");

function console_log( $data ) {
  echo '<script>';
  echo 'console.log('. json_encode( $data ) .')';
  echo '</script>';
}

function sendMail($mailTo, $subject, $message, $from_name, $from_lname, $from_email, $filename) {
    $path = 'uploads/';
    $file = $path.$filename;
    $content = file_get_contents( $file);
    $content = chunk_split(base64_encode($content));
    $uid = md5(uniqid(time()));
    $name = basename($file);

    // header
    $header = "From: ".$from_name." <".$from_email.">\r\n";
    $header .= "Reply-To: ".$from_email."\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";

    // message & attachment
    $nmessage = "--".$uid."\r\n";
    $nmessage .= "Content-type:text/plain; charset=iso-8859-1\r\n";
    $nmessage .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $nmessage .= $from_name."\n";
    $nmessage .= $from_lname."\n";
    $nmessage .= $from_email."\n";
    $nmessage .= $message."\r\n\r\n";
    $nmessage .= "--".$uid."\r\n";
    // $nmessage .= "Content-Type: application/octet-stream; name=\"".$filename."\"\r\n";
    $nmessage .= "Content-Transfer-Encoding: base64\r\n";
    $nmessage .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
    $nmessage .= $content."\r\n\r\n";
    $nmessage .= "--".$uid."--";

    if (mail($mailTo, $subject, $nmessage, $header)) {
        return true;
    } else {
        return false;
    }
}

function uploadFile() {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["uploadFile"]["name"]);

    if (move_uploaded_file($_FILES["uploadFile"]["tmp_name"], $target_file)) {
        return $_FILES["uploadFile"]["name"];
    } else {
        return false;
    }
}

$fileName = uploadFile();
// Info@blimeyrecruitment.co.uk

if($fileName) {
     if (sendMail(
            "Info@blimeyrecruitment.co.uk",           //$mailTo
            "New mail from " . $_POST['name'],   //$subject
            $_POST['message'],                  //$message
            $_POST['name'],                     //$from_name
            $_POST['lname'],                    //$lname
            $_POST['email'],                    //$from_email
            $fileName                           //$filename
        )) {
            
http_response_code(200);
       echo "<h1>Email Sent Successfully!</h1>";
    } else {
        echo "<h1>Email sending failed.</h1>";
    }
} 
else {
    echo "<h1>Could not upload file.</h1>";
}

?>