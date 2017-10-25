package com.c2n.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.util.UriComponentsBuilder;

import com.c2n.entity.Profile;
import com.c2n.service.IRegisterService;

@Controller
@RequestMapping("user")
@CrossOrigin(origins = {"http://localhost:4200"})
public class RegisterController {
	@Autowired
	private IRegisterService profileService;
	@GetMapping("profile")
	public ResponseEntity<Profile> getProfileById(@RequestParam("id") String id) {
		Profile profile = profileService.getProfileById(Integer.parseInt(id));
		return new ResponseEntity<Profile>(profile, HttpStatus.OK);
	}
	@GetMapping("all-profiles")
	public ResponseEntity<List<Profile>> getAllProfiles() {
		List<Profile> list = profileService.getAllProfiles();
		return new ResponseEntity<List<Profile>>(list, HttpStatus.OK);
	}
	@PostMapping("profile")
	public ResponseEntity<Void> createProfile(@RequestBody Profile profile, UriComponentsBuilder builder) {
        boolean flag = profileService.createProfile(profile);
        if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/profile?id={id}").buildAndExpand(profile.getProfileId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	@PutMapping("profile")
	public ResponseEntity<Profile> updateProfile(@RequestBody Profile profile) {
		profileService.updateProfile(profile);
		return new ResponseEntity<Profile>(profile, HttpStatus.OK);
	}
	@DeleteMapping("profile")
	public ResponseEntity<Void> deleteProfile(@RequestParam("id") String id) {
		profileService.deleteProfile(Integer.parseInt(id));
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}	
} 