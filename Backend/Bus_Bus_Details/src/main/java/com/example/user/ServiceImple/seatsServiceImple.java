package com.example.user.ServiceImple;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.user.Model.busSeats;
import com.example.user.Repo.seatsRepo;
import com.example.user.Response.checkseatsResponse;
import com.example.user.Service.seatsService;


@Service
public class seatsServiceImple implements seatsService
{

    @Autowired
    seatsRepo repo;

    @Override
    public ResponseEntity<?> getcheckhowmanyseatsareavd(String busidd)
    {

        checkseatsResponse res=new checkseatsResponse();

        List<busSeats> seats=repo.findAllByBusidd(busidd);
        int avb=0;
        int free=0;
        if((seats.size())!=0)
        {
            for(int i=0;i<seats.size();i++)
            {
                if(seats.get(i).getSeatstatus()=="true")
                {
                    avb++;
                }
                else
                {
                    free++;
                }
            }
//            System.out.println(avb+","+free);
            res.setAvailable(avb);
            res.setEmpty(free);
            res.setMessage("Operation Successful");
            return ResponseEntity.ok(res);
        }
        else
        {
            res.setMessage("Operation is not Successful");
            return ResponseEntity.ok(res);
        }
    }
}
