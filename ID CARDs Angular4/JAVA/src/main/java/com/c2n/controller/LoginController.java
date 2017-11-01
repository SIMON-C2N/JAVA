package com.c2n.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.util.UriComponentsBuilder;

import com.c2n.entity.Profile;
import com.c2n.service.ILoginService;

@Controller
@RequestMapping("login")
@CrossOrigin(origins = {"http://localhost:4200"})
public class LoginController {
	
	@Autowired
	private ILoginService loginService;
	
	@PostMapping("validateUser")
	public ResponseEntity<Void> validateUser(@RequestBody Profile profile, UriComponentsBuilder builder) {
        boolean flag = loginService.loginValidator(profile);
        System.out.println("sssssssssssssssssss"+flag);
        if (flag == true) {
        	return new ResponseEntity<Void>(HttpStatus.OK);
        }
        else
        {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
	}
	
	@GetMapping("oneProfile")
	public ResponseEntity<List<Profile>> getProfileByUserName(@RequestParam("username") String username) {
		List<Profile> profile = loginService.getProfileByUserName(username);
		return new ResponseEntity<List<Profile>>(profile, HttpStatus.OK);
	}
	
	@PutMapping("update")
	public ResponseEntity<Profile> updateProfile(@RequestBody Profile profile) {
		loginService.updateUser(profile);
		return new ResponseEntity<Profile>(profile, HttpStatus.OK);
	}
}
