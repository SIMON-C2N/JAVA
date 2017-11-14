package com.c2n.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.c2n.entity.Idcard;
import com.c2n.entity.Profile;

@Transactional
@Repository
public class idcardDAO implements IidcardDAO{
	@PersistenceContext	
	private EntityManager entityManager;

	@Override
	public List<Idcard> getAllIdcardDetails() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Profile getIdcardId(int idcardId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void createIdcard(Idcard idcard) {
		System.out.println("hello");
		entityManager.persist(idcard);		
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
	public boolean idcardExists(String address, String bloodgroup, String companyname, String dob, String empid,String issueddate, String mobilenumber, String name, String size) {
		String hql = "FROM Idcard as card WHERE card.address= ? and card.bloodgroup= ?  and card.companyname= ? and card.dob= ? and card.empid= ? and card.issueddate= ? and card.mobilenumber= ? and card.name= ? and card.size= ?  " ;
		System.out.println(hql);
		int count = entityManager.createQuery(hql).setParameter(1,address).setParameter(2,bloodgroup).setParameter(3,companyname).setParameter(4 ,dob).setParameter( 5, empid ).setParameter( 6, issueddate ).setParameter(7 , mobilenumber).setParameter(8 ,name).setParameter(9,size). getResultList().size();
		return count > 0 ? true : false;
	}
	
	
	
}
