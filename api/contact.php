<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	
	$data = json_decode(file_get_contents("php://input"));

	if (empty($data->name)) {
		echo json_encode(["sent" => false, "message" => "No name"]);
		die();
	}

	if(empty($data->email)) {
		echo json_encode(["sent" => false, "message" => "No email"]);
		die();
	}

	if(empty($data->message)) {
		echo json_encode(["sent" => false, "message" => "No message"]);
		die();
	} 

	http_response_code(200);
    $data->message =  $data->name."\n".$data->message."\r\n\r\n"."\r\n.Email : ".$data->email ."\n";
	$subject = $data->name;
	$to_email = "Info@blimeyrecruitment.co.uk";
	$from_email = "user@Blimey_domain.com";

    $headers = 'From: '. $data->email .'' . "\r\n" .
    'Reply-To: '.$data->email.'' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	echo json_encode(array( 
		"sent" => mail($to_email, $subject, $data->message, $headers)
	));
?>