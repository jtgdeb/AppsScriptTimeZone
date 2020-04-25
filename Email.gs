function emailTimeStamp() {
  
  var subject = timeStamp();
  var recipient = [place email here in ""];
  var body = "Hello your time is your subject";
  
  MailApp.sendEmail(recipient, subject, body);
  
  
}
