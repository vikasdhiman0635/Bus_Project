package com.example.user.Service;

import org.springframework.http.ResponseEntity;

import com.example.user.DTO.forgetpasswordstepfirstDTO;
import com.example.user.DTO.generatenewpasswordDTO;
import com.example.user.DTO.loginDTTO;
import com.example.user.DTO.loginsocial;
import com.example.user.DTO.registerDTO;
import com.example.user.DTO.regsocialDTO;
import com.example.user.Model.User;


public interface Userservices {

	public ResponseEntity<?> saveuser(registerDTO register);

	public ResponseEntity<?> login(loginDTTO login);

	public ResponseEntity<?> regsocial(regsocialDTO refsocial);

	public ResponseEntity<?> soclogin(loginsocial login);

    boolean verifyuser(forgetpasswordstepfirstDTO stepfirst);

	public ResponseEntity<?> forgetpassworddata(generatenewpasswordDTO newpassword);

    public User getdatabyid(String email);

	public ResponseEntity<?> updateuser(User user);
}