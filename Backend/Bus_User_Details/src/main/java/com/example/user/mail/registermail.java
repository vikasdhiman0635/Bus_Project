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

import com.example.user.DTO.registerDTO;
import com.example.user.DTO.regsocialDTO;

public class registermail
{
    @Autowired
    JavaMailSender mailSender;

    public void sendregisteruser(registerDTO register) {
        // TODO Auto-generated method stub
        MimeMessagePreparator preparator = new MimeMessagePreparator()
        {
            public void prepare(MimeMessage mimeMessage) throws Exception
            {
                mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(register.getEmail()));
                mimeMessage.setSubject("Welcome to The Indian Bus Service");

                MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

                helper.setText("<html><body>"
                        + "<br>"
                        + "<h2>Hello "+register.getFirstname()+" "+register.getLastname()+"</h2>"
                        + "<p>Welcome to <b>Indian Bus Service</b></p>"
                        + "<br>"
                        + "<p>Username:- "+register.getEmail()+"</p>"
                        + "<p>Hope you are doing well in this lockdown.</b></p>"
                        + "<p>Date your login : </p>'"+new Date()+"'</body></html>", true);
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

    public void socialregisteruser(regsocialDTO refsocial)
    {
        MimeMessagePreparator preparator = new MimeMessagePreparator()
        {
            public void prepare(MimeMessage mimeMessage) throws Exception
            {
                mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(refsocial.getEmail()));
                mimeMessage.setSubject("Welcome to The Indian Bus Service");

                MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

                helper.setText("<html><body>"
                        + "<br>"
                        + "<h2>Hello "+refsocial.getFirstName()+" "+refsocial.getLastName()+"</h2>"
                        + "<p>Welcome to <b>Indian Bus Service</b></p>"
                        + "<br>"
                        + "<p>Username:- "+refsocial.getEmail()+"</p>"
                        + "<p>Hope you are doing well in this lockdown.</b></p>"
                        + "<p>Date your login : </p>'"+new Date()+"'</body></html>", true);
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
