package com.c2n.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.c2n.entity.Profile;
@Transactional
@Repository
public class LoginDAO implements ILoginDAO{
	@PersistenceContext	
	private EntityManager entityManager;	
	@Override
	public boolean userExists(String username, String password, String role) {
		System.out.println(username);
		System.out.println(password);
		String hql = "FROM Profile as check WHERE check.username = ? and check.password = ? and check.role=?";
		int count = entityManager.createQuery(hql).setParameter(1, username)
		              .setParameter(2, password).setParameter(3, role).getResultList().size();
		return count > 0 ? true : false;
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<Profile> getProfileByUserName(String username) {
		String hql = "FROM Profile as user WHERE user.username= ?";
		List<Profile> oneuser= entityManager.createQuery(hql).setParameter(1, username).getResultList();
		return oneuser;
	}
	public Profile getProfileById(int profileId) {
		return entityManager.find(Profile.class, profileId);
	}
	@Override
	public void updateUser(Profile profile) {
		System.out.println("coming to update dao");
		Profile updateU = getProfileById(profile.getProfileId());
		updateU.setUsername(profile.getUsername());
		updateU.setEmail(profile.getEmail());
		updateU.setPassword(profile.getPassword());
		updateU.setCpassword(profile.getCpassword());
		updateU.setMobilenumber(profile.getMobilenumber());
		updateU.setAddress(profile.getAddress());
		entityManager.flush();
	}
}
