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

import com.example.user.DTO.loginDTTO;
import com.example.user.DTO.loginsocial;


public class loginmail
{
    @Autowired
    JavaMailSender mailSender;

    public void loginmail(loginDTTO user)
    {
        // TODO Auto-generated method stub
        MimeMessagePreparator preparator = new MimeMessagePreparator()
        {
            public void prepare(MimeMessage mimeMessage) throws Exception
            {
                mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(user.getEmail()));
                mimeMessage.setSubject("Welcome to The Indian Bus Service");

                MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

                helper.setText("<html><body>"
                        + "<br>"
                        + "<h2>Hello "+user.getEmail()+"</h2>"
                        + "<p>Welcome to <b>Indian Bus Service</b></p>"
                        + "<br>"
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

    public void loginwithsocialmail(loginsocial login)
    {
        // TODO Auto-generated method stub
        MimeMessagePreparator preparator = new MimeMessagePreparator()
        {
            public void prepare(MimeMessage mimeMessage) throws Exception
            {
                mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(login.getEmail()));
                mimeMessage.setSubject("Welcome to The Indian Bus Service");

                MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

                helper.setText("<html><body>"
                        + "<br>"
                        + "<h2>Hello "+login.getEmail()+"</h2>"
                        + "<p>Welcome to <b>Indian Bus Service</b></p>"
                        + "<br>"
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
