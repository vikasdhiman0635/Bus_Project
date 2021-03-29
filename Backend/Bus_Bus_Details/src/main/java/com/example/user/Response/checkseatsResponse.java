package com.example.user.Response;

import lombok.Data;

@Data
public class checkseatsResponse
{
    public int available;

    public int empty;

    public String message;
}
