package com.c2n.service;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Service
public class UploadService {
	private static String UPLOADED_FOLDER = "F://temp//";
	public String singleFileUpload(@RequestParam("value") MultipartFile file,
            RedirectAttributes redirectAttributes) {

if (file.isEmpty()) {
redirectAttributes.addFlashAttribute("message", "Please select a file to upload");
return "redirect:uploadStatus";
}

try {

// Get the file and save it somewhere
byte[] bytes = file.getBytes();
Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
Files.write(path, bytes);

redirectAttributes.addFlashAttribute("message",
"You successfully uploaded '" + file.getOriginalFilename() + "'");

} catch (IOException e) {
e.printStackTrace();
}

return "redirect:/uploadStatus";
}
}
