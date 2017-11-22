package com.c2n.service;

import org.springframework.web.multipart.MultipartFile;

public interface IUploadService {
	String uploadFile(MultipartFile file);
}
