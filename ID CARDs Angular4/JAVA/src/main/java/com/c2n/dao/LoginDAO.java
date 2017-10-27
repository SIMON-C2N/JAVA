package com.c2n.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityNotFoundException;
import javax.persistence.PersistenceContext;
import javax.swing.text.html.parser.Entity;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
@Transactional
@Repository
public class LoginDAO implements ILoginDAO{
	@PersistenceContext	
	private EntityManager entityManager;	
	@Override
	public boolean userExists(String username, String password) {
		System.out.println(username);
		System.out.println(password);
		String hql = "FROM Profile as atcl WHERE atcl.username = ? and atcl.password = ?" ;
		int count = entityManager.createQuery(hql).setParameter(1, username)
		              .setParameter(2, password).getResultList().size();
		return count > 0 ? true : false;
	}
	

}
