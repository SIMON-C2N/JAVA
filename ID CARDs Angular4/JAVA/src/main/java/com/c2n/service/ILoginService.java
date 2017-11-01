package com.c2n.service;

import java.util.List;

import com.c2n.entity.Profile;

public interface ILoginService {
	boolean loginValidator(Profile profile);
	List<Profile> getProfileByUserName(String username);
	void updateUser(Profile profile);
}
