package com.example.user.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "userbuspaymentstatus")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class userbuspaymentstatus
{
    @Id
    public long userbuspaymentstatusid;

    public String userid;

    public String busid;

    public String paymentstatus;

    public String howmuchmoney;

    public String howmuchpay;

    public String upiid;

}