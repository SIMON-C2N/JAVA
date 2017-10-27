package com.c2n.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriComponentsBuilder;

import com.c2n.entity.Profile;
import com.c2n.service.ILoginService;

@Controller
@RequestMapping("login")
@CrossOrigin(origins = {"http://localhost:4200"})
public class LoginController {

	
	
	
}
