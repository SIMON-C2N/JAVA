package com.c2n.dao;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.c2n.entity.Profile;
@Transactional
@Repository
public class ProfileDAO implements IProfileDAO {
	@PersistenceContext	
	private EntityManager entityManager;	
	@Override
	public Profile getProfileById(int profileId) {
		return entityManager.find(Profile.class, profileId);
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<Profile> getAllProfiles() {
		String hql = "FROM Profile user ORDER BY user.profileId DESC";
		return (List<Profile>) entityManager.createQuery(hql).getResultList();
	}	
	@Override
	public void createProfile(Profile profile) {
		entityManager.persist(profile);
	}
	@Override
	public void updateProfile(Profile profile) {
		Profile artcl = getProfileById(profile.getProfileId());
		artcl.setUsername(profile.getUsername());
		artcl.setEmail(profile.getEmail());
		artcl.setPassword(profile.getPassword());
		artcl.setCpassword(profile.getCpassword());
		artcl.setMobilenumber(profile.getMobilenumber());
		artcl.setAddress(profile.getAddress());
		entityManager.flush();
	}
	@Override
	public void deleteProfile(int profileId) {
		entityManager.remove(getProfileById(profileId));
	}
	@Override
	public boolean profileExists(String username, String email,String password,String cpassword,String mobilenumber,String address,String role) {
		String hql = "FROM Profile as atcl WHERE atcl.username = ? and atcl.email = ? and atcl.password = ? and atcl.cpassword = ? and atcl.mobilenumber = ? and atcl.address = ? and atcl.role=?" ;
		int count = entityManager.createQuery(hql).setParameter(1, username)
		              .setParameter(2, email).setParameter(3, password).setParameter(4, cpassword).setParameter(5, mobilenumber).setParameter(6 ,address).setParameter(7, role).getResultList().size();
		return count > 0 ? true : false;
	}
}
