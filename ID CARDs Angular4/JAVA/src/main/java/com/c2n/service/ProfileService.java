package com.c2n.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.c2n.dao.IProfileDAO;
import com.c2n.entity.Profile;
@Service
public class ProfileService implements IProfileService {
	@Autowired
	private IProfileDAO profileDAO;
	@Override
	public Profile getProfileById(int profileId) {
		Profile obj = profileDAO.getProfileById(profileId);
		return obj;
	}	
	@Override
	public List<Profile> getAllProfiles(){
		return profileDAO.getAllProfiles();
	}
	@Override
	public synchronized boolean createProfile(Profile profile){
       if (profileDAO.profileExists(profile.getUsername(),profile.getEmail(),profile.getPassword(),profile.getCpassword(),profile.getMobilenumber(),profile.getAddress())) {
    	   return false;
       } else {
    	   profileDAO.createProfile(profile);
    	   return true;
       }
	}
	@Override
	public void updateProfile(Profile profile) {
		profileDAO.updateProfile(profile);
	}
	@Override
	public void deleteProfile(int profileId) {
		profileDAO.deleteProfile(profileId);
	}
}
