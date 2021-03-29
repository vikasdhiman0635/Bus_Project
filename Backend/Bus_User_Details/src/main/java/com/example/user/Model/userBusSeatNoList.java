package com.example.user.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="busseatbookinglist")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class userBusSeatNoList
{
    @Id
    public long userbusseatnolistid;

    public String userid;

    public String busseatname;
    
    public String busseatage;
    
    public String busseataddharno;


}
