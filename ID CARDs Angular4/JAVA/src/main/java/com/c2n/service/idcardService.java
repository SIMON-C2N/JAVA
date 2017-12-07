package com.c2n.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.PushbackInputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.c2n.dao.IidcardDAO;
import com.c2n.entity.Idcard;
import com.c2n.entity.userimage;

@Service
public class idcardService  implements IidcardService {
	@Autowired
	private IidcardDAO idcardDAO;

	@Override
	public List<Idcard> getAllIdcards() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Idcard getIdcardById(int idcardId) {
		// TODO Auto-generated method stub
		return null;
	}

	

	@Override
	public void updateIdcard(Idcard idcard) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteIdcard(int idcardId) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean createIdcard(Idcard idcard) {
		// TODO Auto-generated method stub
		return false;
	}

	


	
	
}
