package com.c2n.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.c2n.service.IRegisterService;
import com.c2n.service.IUploadService;
import com.c2n.service.UploadService;
@Controller
@RequestMapping(value = "uploadFile", method = RequestMethod.POST)
@CrossOrigin(origins = {"http://localhost:4200"})
public class UploadController 
{
	@Autowired
	private UploadService profileService;
	
	 @PostMapping("upload") // //new annotation since 4.3

	 public ResponseEntity<Void> singleFileUpload(@RequestParam("file") MultipartFile file,
	            RedirectAttributes redirectAttributes){
		 profileService.singleFileUpload(file, redirectAttributes);
					return null;
		 
	 }

}
