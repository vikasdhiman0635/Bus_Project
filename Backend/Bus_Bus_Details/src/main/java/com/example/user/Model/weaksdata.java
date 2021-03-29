package com.example.user.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "weeks")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class weaksdata
{
    @Id
    @GeneratedValue
    public long id;

    public String weekuseremail;

    public boolean sunday;

    public boolean monday;

    public boolean tuesday;

    public boolean wednesday;

    public boolean thuesday;

    public boolean friday;

    public boolean saturday;

}