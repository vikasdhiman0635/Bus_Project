package com.example.user.filter;

import javax.servlet.http.HttpServletResponse;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class PostFillter extends ZuulFilter 
{
	
	private static Logger log = LoggerFactory.getLogger(PostFillter.class);
	
	@Override
	  public String filterType() {
	    return "post";
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
	  public Object run() 
	  {
		  HttpServletResponse response = RequestContext.getCurrentContext().getResponse();
		    
		    log.info("PostFilter: " + String.format("response's content type is %s", response.getStatus()));
		    
		    return null;
	  }
	}