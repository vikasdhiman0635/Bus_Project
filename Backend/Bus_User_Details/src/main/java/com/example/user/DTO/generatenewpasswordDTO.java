package com.example.user.DTO;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class generatenewpasswordDTO
{

    @Email
    @NotBlank(message = "Email is required")
    public String email;

    @NotBlank(message = "Password is required")
    public String newpassword;

    @NotBlank()
    public String confirmpassword;
}
