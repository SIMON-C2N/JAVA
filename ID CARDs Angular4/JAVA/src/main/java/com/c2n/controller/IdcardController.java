package com.c2n.controller;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jackson.JsonObjectDeserializer;
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
import com.fasterxml.jackson.databind.jsonFormatVisitors.JsonArrayFormatVisitor;
import com.fasterxml.jackson.databind.util.JSONPObject;

@Controller
@RequestMapping("user")
@CrossOrigin(origins = { "http://localhost:4200" })
public class IdcardController {
	@PostMapping("sendids")
	public ResponseEntity<Idcard> createId(@RequestBody Idcard idcard, UriComponentsBuilder idcards) {		
		JSONPObject obj=new JSONPObject(null, idcards);
		System.out.println("Creat Customer: " + idcard.toString());
		return ResponseEntity.ok(idcard);
	}
}
