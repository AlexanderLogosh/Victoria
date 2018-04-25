<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$email = $_POST['e-mail'];
$phone = $_POST['phone'];
$people = $_POST['people'];
$children = $_POST['children'];
$dateIn = $_POST['date-in'];
$dateOut = $_POST['date-out'];
$comment = $_POST['comment'];


//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'nikitoriya.beregovoe.mail@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'plohoipassnet'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('nikitoriya.beregovoe.mail@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('nikitoriya.beregovoe@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка на бронирование';
$mail->Body    = 'Имя:' .$name. '<br>Почта: ' .$email. '<br>Телефон: ' .$phone. '<br>Сколько людей: ' .$people. '<br>Сколько детей: ' .$children. '<br>Дата заезда: ' .$dateIn. '<br>Дата выезда: ' .$dateOut. '<br>Оставленый комментарий: ' .$comment;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: tnx.html');
}
?>