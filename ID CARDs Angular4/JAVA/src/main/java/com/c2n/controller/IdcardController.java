package com.c2n.controller;


import java.io.File;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriComponentsBuilder;

import com.c2n.entity.Idcard;
import com.c2n.service.IidcardService;

@Controller
@RequestMapping("user")
@CrossOrigin(origins = {"http://localhost:4200"})
public class IdcardController {

	@Autowired
	private IidcardService idcardService;
	
	@PostMapping("idcardsubmit")

	public ResponseEntity<Void> createIdcard(@RequestBody Idcard idcard, UriComponentsBuilder builder) {
       
		System.out.println(idcard);
		
		boolean flag = idcardService.createIdcard(idcard);
       if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
       }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/idcard?id={id}").buildAndExpand(idcard.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
}


