package com.c2n.controller;


import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponentsBuilder;

import com.c2n.entity.Idcard;
import com.c2n.service.IidcardService;
import com.c2n.service.StorageService;

@Controller
@RequestMapping("user")
@CrossOrigin(origins = {"http://localhost:4200"})
public class IdcardController {

	@Autowired
	private IidcardService idcardService;
	
	
	
	@Autowired
	StorageService storageService;
 
	List<String> files = new ArrayList<String>();
 
@PostMapping("/post")
	public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file) {

	String message = "";
		try {
			storageService.store(file);
			files.add(file.getOriginalFilename());
			System.out.println(file.getName());
 
			System.out.println(files);
			message = "You successfully uploaded " + file.getOriginalFilename() + "!";
			return ResponseEntity.status(HttpStatus.OK).body(message);
		} catch (Exception e) {
			message = "FAIL to upload " + file.getOriginalFilename() + "!";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
		}
	
	
	/*@PostMapping("/post")
	public ResponseEntity<Void> createIdcard(@RequestParam("file") MultipartFile file,@RequestBody Idcard idcard, UriComponentsBuilder builder) {
       
		
		System.out.println("method");
		storageService.store(file);
		files.add(file.getOriginalFilename());
		boolean flag = idcardService.createIdcard(idcard);
       if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
       }
       HttpHeaders headers = new HttpHeaders();
	        headers.setLocation(builder.path("/idcard?id={id}").buildAndExpand(idcard.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}*/
}}


