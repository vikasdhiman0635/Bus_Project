package com.example.user.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_address")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Address
{

    @Id
    @SequenceGenerator(name = "generator", sequenceName = "ID_SEQUENCE", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "generator")
    public long addresstableid;

    public String useraddressid;

    public String addresstablestreet;

    public String addresstablecity;

    public String addresstablestate;

    public String addresstablelocation;

    public String addresstabledesc;

}

