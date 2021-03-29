package com.example.user.ServiceImple;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.user.DTO.forgetpasswordstepfirstDTO;
import com.example.user.DTO.generatenewpasswordDTO;
import com.example.user.DTO.loginDTTO;
import com.example.user.DTO.loginsocial;
import com.example.user.DTO.registerDTO;
import com.example.user.DTO.regsocialDTO;
import com.example.user.Model.User;
import com.example.user.Random.registeridgetter;
import com.example.user.Repo.UserRepo;
import com.example.user.Response.Register_Response;
import com.example.user.Response.Updateprofileresponse;
import com.example.user.Response.loginResponse;
import com.example.user.Service.Userservices;
import com.example.user.mail.forgetpasswordmailserver;

@Service
public class UserServiceImplement implements Userservices
{


	@Autowired
	UserRepo repo;

	@Autowired
	forgetpasswordmailserver mailserver;

	@Override
	public ResponseEntity<Register_Response> saveuser(registerDTO register) 
	{
		Register_Response res=new Register_Response();
		User user=new User();
		registeridgetter getter=new registeridgetter();
		String message=null;
//		System.out.println(repo.existsByEmail(register.getEmail()));
		if(!repo.existsByEmail(register.getEmail()))
		{
			int getid=getter.getrandomnumber();

			user.setId(getid);
			user.setFirstname(register.getFirstname());
			user.setLastname(register.getLastname());
			user.setEmail(register.getEmail());
			user.setPassword(register.getNewpassword());
			user.setUserid(register.getEmail()+"-"+getid);
			user.setCompleteprofile(false);
			user.setAvatar("https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png");
			
			user.setDate(new Date());

			SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss");
			Date time = new Date();
			user.setTime(timeFormat.format(time));



			repo.save(user);
			message="User is Register";
			res.setMessasge(message);
			res.setEmail(register.getEmail());
			res.setUser(user);
			res.setUserid(register.getEmail()+"-"+getid);
		}
		else
		{
			message="User is Already exist";
			res.setMessasge(message);
			res.setEmail(register.getEmail());
			res.setUser(user);
		}
		
		return ResponseEntity.ok(res);
	}

	@Override
	public ResponseEntity<?> login(loginDTTO login) 
	{
		loginResponse res=new loginResponse();
		String message=null;
		System.out.println(repo.existsByEmail(login.getEmail()));
		if(repo.existsByEmail(login.getEmail()))
		{
			if(repo.existsByEmailAndPassword(login.getEmail(),login.getPassword()))
			{
				message="User exist";
				res.setMessage(message);
				User user=getuser(login.getEmail());
//				loginmail mail = new loginmail();
//				mail.loginmail(login);
				res.setUser(user);
				res.setEmail(login.getEmail());
				res.setUserid(user.getUserid());
			}
			else
			{
				message="Password is Incorrect";
				res.setEmail(login.getEmail());
				res.setMessage(message);
			}
		}
		else
		{
			message="User is not exist";
			res.setMessage(message);
			res.setEmail(login.getEmail());
		}
		return ResponseEntity.ok(res);
	}

	private User getuser(String email) 
	{
		return repo.findByEmail(email);
	}

	@Override
	public ResponseEntity<?> regsocial(regsocialDTO refsocial) 
	{
		Register_Response res=new Register_Response();
		User user=new User();
		registeridgetter getter=new registeridgetter();
		String message=null;
		if(!repo.existsByEmail(refsocial.getEmail()))
		{
			int getid=getter.getrandomnumber();

			user.setId(getid);
			user.setFirstname(refsocial.getFirstName());
			user.setLastname(refsocial.getLastName());
			user.setEmail(refsocial.getEmail());
			user.setPassword(refsocial.getId());
			user.setProvidedby(refsocial.getProvider());
			user.setAvatar(refsocial.getPhotoUrl());
			user.setUserid(refsocial.getEmail()+"-"+getid);
			user.setCompleteprofile(false);

			user.setDate(new Date());

			SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss");
			Date time = new Date();
			user.setTime(timeFormat.format(time));
			
			repo.save(user);
//			registermail mail=new registermail();
//			mail.socialregisteruser(refsocial);

			message="User is Register";
			res.setMessasge(message);
			res.setEmail(refsocial.getEmail());
			res.setUser(user);
			res.setUserid(refsocial.getEmail()+"-"+getid);
		}
		else
		{
			message="User is Already exist";
			res.setMessasge(message);
			res.setEmail(refsocial.getEmail());
			res.setUser(user);
		}
		
		return ResponseEntity.ok(res);
	}

	@Override
	public ResponseEntity<?> soclogin(loginsocial login) 
	{
		loginResponse res=new loginResponse();
		String message=null;
		if(repo.existsByEmail(login.getEmail()))
		{
			if(repo.existsByEmailAndPassword(login.getEmail(),login.getId()))
			{
				message="User exist";
//				loginmail mail = new loginmail();
//				mail.loginwithsocialmail(login);
				res.setMessage(message);
				User user=getuser(login.getEmail());
				res.setUser(user);
				res.setEmail(login.getEmail());
				res.setUserid(user.getUserid());
			}
			else
			{
				message="Password is Incorrect";
				res.setEmail(login.getEmail());
				res.setMessage(message);
			}
		}
		else
		{
			message="User is not exist";
			res.setEmail(login.getEmail());
			res.setMessage(message);
		}
		return ResponseEntity.ok(res);
	}

	@Override
	public boolean verifyuser(forgetpasswordstepfirstDTO stepfirst)
	{
		return repo.existsByEmail(stepfirst.getEmail());
	}

	@Override
	public ResponseEntity<?> forgetpassworddata(generatenewpasswordDTO newpassword)
	{

		User user=null;
		user=repo.findByEmail(newpassword.getEmail());
		if(user!=null)
		{
			user.setPassword(newpassword.getNewpassword());
			repo.save(user);
			mailserver.sendsuccessfullupdaed(newpassword);
			return ResponseEntity.ok("Password Update Successful");
		}
		else
		{
			return ResponseEntity.ok("User is not exist");
		}

	}

	@Override
	public User getdatabyid(String email)
	{
		return repo.findByEmail(email);
	}

	@Override
	public ResponseEntity<?> updateuser(User user)
	{
		Updateprofileresponse res=new Updateprofileresponse();
		user.setCompleteprofile(true);

		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
		Date date = new Date();
		user.setModifydate(dateFormat.format(date));

		SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss");
		Date time = new Date();
		user.setModifytime(timeFormat.format(time));
		System.out.println(user);
		User us=repo.save(user);
		if(us!=null)
		{
			res.setMessage("User Update Successful");
			res.setUser(us);
		}
		else
		{
			res.setMessage("User is not updated");
		}
		return ResponseEntity.ok(res);
	}

}
