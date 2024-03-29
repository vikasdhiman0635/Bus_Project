package com.example.user.mail;

import java.util.Date;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;

import com.example.user.DTO.forgetpasswordstepfirstDTO;
import com.example.user.DTO.generatenewpasswordDTO;

@Service
public class forgetpasswordmailserver
{
    @Autowired
    JavaMailSender mailSender;

    public String verifyemailtouser(forgetpasswordstepfirstDTO user,Integer number)
    {
        // TODO Auto-generated method stub
        MimeMessagePreparator preparator = new MimeMessagePreparator()
        {
            public void prepare(MimeMessage mimeMessage) throws Exception
            {
                mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(user.getEmail()));
                mimeMessage.setSubject("Forget Password Verification code");

                MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

                helper.setText("<html><body>"
                        + "<br>"
                        + "<h2>Hello "+user.getEmail()+"</h2>"
                        + "<p>Welcome to <b>Indian Bus Service</b></p>"
                        + "<br>"
                        + "<p>Your Verification code is "+number+"</p>"
                        + "<p>Date your login : </p>'"+new Date()+"'</body></html>", true);
            }
        };

        try {
            mailSender.send(preparator);
            return "Mail send Successful";
        }
        catch (MailException ex) {
            // simply log it and go on...
            System.err.println(ex.getMessage());
            return ex.getMessage();
        }
    }

    public void sendsuccessfullupdaed(generatenewpasswordDTO newpassword)
    {
        MimeMessagePreparator preparator = new MimeMessagePreparator()
        {
            public void prepare(MimeMessage mimeMessage) throws Exception
            {
                mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(newpassword.getEmail()));
                mimeMessage.setSubject("Update Password Successful");

                MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

                helper.setText("<html><body>"
                        + "<br>"
                        + "<h2>Hello "+newpassword.getEmail()+"</h2>"
                        + "<p>Welcome to <b>Indian Bus Service</b></p>"
                        + "<br>"
                        + "<p>Your password is updated successful.</p>"
                        + "<br>"
                        + "<p>Thank you very much you are using indian bus service.</p>"
                        + "<p>Date : '"+new Date()+"'</p></body></html>", true);
            }
        };

        try {
            mailSender.send(preparator);
        }
        catch (MailException ex) {
            // simply log it and go on...
            System.err.println(ex.getMessage());
        }
    }
}
