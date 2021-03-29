package com.example.user.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="userbusdatadestils")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class userbusdata
{
    @Id
    public long userbusdatadestilsid;

    public String userid;

    public String busid;

}
