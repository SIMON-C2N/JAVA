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
	public boolean createIdcard(Idcard idcard) {
		if (idcardDAO.idcardExists(idcard.getAddress(),idcard.getBloodgroup(),idcard.getCompanyname(),idcard.getDob(),idcard.getEmpid(),idcard.getIssueddate(),idcard.getMobilenumber(),idcard.getName(),idcard.getSize())) {
	    	System.out.println(idcard.getAddress());  
			return false;
	       } else {
	    	   System.out.println(idcard.getDob());
	    	   System.out.println(idcard.getMobilenumber());
	    	   idcardDAO.createIdcard(idcard);
	    	   return true;
	       }
	}

	@Override
	public void updateIdcard(Idcard idcard) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteIdcard(int idcardId) {
		// TODO Auto-generated method stub
		
	}

	


	
	
}
