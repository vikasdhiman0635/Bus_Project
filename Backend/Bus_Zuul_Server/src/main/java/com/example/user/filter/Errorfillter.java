package com.example.user.filter;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Errorfillter extends ZuulFilter 
{
	
	private static Logger log = LoggerFactory.getLogger(PostFillter.class);


	@Override
	  public String filterType() {
	    return "error";
	  }
	 
	  @Override
	  public int filterOrder() {
	    return 1;
	  }
	 
	  @Override
	  public boolean shouldFilter() {
	    return true;
	  }
	 
	  @Override
	  public Object run() {
		  HttpServletResponse response = RequestContext.getCurrentContext().getResponse();
		    
		    log.info("ErrorFilter: " + String.format("response status is %d", response.getStatus()));
		    
		    return null;
	  }
}