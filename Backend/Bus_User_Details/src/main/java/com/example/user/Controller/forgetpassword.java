package com.example.user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.user.DTO.forgetpasswordstepfirstDTO;
import com.example.user.DTO.generatenewpasswordDTO;
import com.example.user.Random.registeridgetter;
import com.example.user.Response.forgetpasswordemailverificationcode;
import com.example.user.Service.Userservices;
import com.example.user.mail.forgetpasswordmailserver;


@RestController
@RequestMapping("/forgetpassword")
@CrossOrigin(origins = "*")
public class forgetpassword
{


    @Autowired
    forgetpasswordmailserver mailserver;

    @Autowired
    Userservices service;


    @PostMapping()
    public ResponseEntity<?> forgetpassword(@RequestBody forgetpasswordstepfirstDTO stepfirst)
    {

        boolean check = service.verifyuser(stepfirst);

        forgetpasswordemailverificationcode verify=new forgetpasswordemailverificationcode();

        if(check)
        {

            registeridgetter random=new registeridgetter();

            Integer ram=random.getrandomvarify();

            verify.setCode(ram);

            String s=mailserver.verifyemailtouser(stepfirst,ram);

            verify.setMessage(s);

            return ResponseEntity.ok(verify);
        }
        else
        {
            verify.setMessage("User is not exist");
            return ResponseEntity.ok(verify);
        }
    }


    @PutMapping()
    public ResponseEntity<?> setnew(@RequestBody generatenewpasswordDTO newpassword)
    {
        System.out.println(newpassword);
        return service.forgetpassworddata(newpassword);

    }



}
