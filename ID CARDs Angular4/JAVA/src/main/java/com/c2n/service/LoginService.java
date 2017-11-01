package com.c2n.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.c2n.dao.ILoginDAO;
import com.c2n.entity.Profile;


@Service
public class LoginService implements ILoginService{
	
	@Autowired
	private ILoginDAO loginDao;

	@Override
	public boolean loginValidator(Profile profile) {
		boolean res=loginDao.userExists(profile.getUsername(), profile.getPassword());
		System.out.println("sss"+res);
		if(loginDao.userExists(profile.getUsername(), profile.getPassword()))
		return true;
		else
		return false;
	}

	@Override
	public List<Profile> getProfileByUserName(String username) {
		// TODO Auto-generated method stub
		return loginDao.getProfileByUserName(username);
	}

	@Override
	public void updateUser(Profile profile) {
		// TODO Auto-generated method stub
		loginDao.updateUser(profile);
		
	}

}
