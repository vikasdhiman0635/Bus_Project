package com.example.user.DTO;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class forgetpasswordstepfirstDTO
{
    @NotBlank(message = "email is required")
    public String email;

}
