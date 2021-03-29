package com.example.user.mail;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;

import com.example.user.Random.registeridgetter;
import com.example.user.Response.otpmessageresponse;

@Service
public class paymentverify 
{

	@Autowired
    JavaMailSender mailSender;

    public ResponseEntity<?> sendmassage(String email)
    {
        // TODO Auto-generated method stub
    	registeridgetter random=new registeridgetter();
    	otpmessageresponse response= new otpmessageresponse();
    	response.setEmail(email);
    	int ran=random.getrandomvarify();
    	response.setOtp(ran);
        MimeMessagePreparator preparator = new MimeMessagePreparator()
        {
            public void prepare(MimeMessage mimeMessage) throws Exception
            {
                mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(email));
                mimeMessage.setSubject("OTP | Payment");

                MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

                helper.setText("<html><body>"
                        + "<br>"
                        + "<h2>Hello "+email+"</h2>"
                        + "<p>Welcome to <b>Indian Bus Service</b></p>"
                        + "<br>"
                        + "<p>Hope you are doing well in this lockdown.</b></p>"
                        + "<p>This OTP is valid only 10 min</p>'"+ran+"'</body></html>", true);
            }
        };

        try {
            mailSender.send(preparator);
            response.setMessage("email send");
        }
        catch (MailException ex) {
            // simply log it and go on...
            System.err.println(ex.getMessage());
            response.setMessage("Email is not sent");
        }
        return ResponseEntity.ok(response);
    }

}
