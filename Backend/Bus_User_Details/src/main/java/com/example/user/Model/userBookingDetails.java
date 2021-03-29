package com.example.user.Model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="userbusbooking")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class userBookingDetails implements Serializable
{
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    public long userbusbookingid;

    public String userid;

    public String busid;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    public List<userBusSeatNoList> busseatnolist;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    public userbusdata busdata;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    public userbuspaymentstatus buspaymentstatus;

    public int totalnoofseats;
}