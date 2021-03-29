package com.example.user.Service;

import org.springframework.http.ResponseEntity;

public interface seatsService
{

    ResponseEntity<?> getcheckhowmanyseatsareavd(String busidd);
}
