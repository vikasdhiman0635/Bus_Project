package com.example.user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.user.Service.seatsService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/seats")
public class seatsController
{

    @Autowired
    seatsService service;

    @GetMapping("/checkseats/{busidd}")
    public ResponseEntity<?> checkhowanyseatsareava(@PathVariable("busidd") String busidd)
    {
        System.out.println(busidd);
        return service.getcheckhowmanyseatsareavd(busidd);
    }

}
