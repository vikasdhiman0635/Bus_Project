package com.example.user;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;

import com.example.user.filter.Errorfillter;
import com.example.user.filter.PostFillter;
import com.example.user.filter.PreFillter;
import com.example.user.filter.RouterFillter;

@SpringBootApplication
@EnableEurekaClient
@EnableZuulProxy
public class BusZuulServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(BusZuulServerApplication.class, args);
	}
	
	@Bean
	public PreFillter pre()
	{
		return new PreFillter();
	}
	
	@Bean
	public PostFillter post()
	{
		return new PostFillter();
	}
	
	@Bean
	public Errorfillter error()
	{
		return new Errorfillter();
	}
	
	@Bean
	public RouterFillter router()
	{
		return new RouterFillter();
	}
}