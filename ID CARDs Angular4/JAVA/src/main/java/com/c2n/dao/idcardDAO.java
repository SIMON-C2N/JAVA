package com.c2n.dao;

import java.util.Date;
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
	public boolean idcardExists(int id,String orgname,String quantity,String size,String idcardname,String price,Date date,String orderstatus,String filename) {
		String hql = "FROM Idcard as card WHERE card.id= ? and card.orgname= ?  and card.quantity= ? and card.size= ? and card.idcardname= ? and card.price= ? and card.date= ? and card.orderstatus= ? and card.filename= ?  " ;
		System.out.println(hql);
		int count = entityManager.createQuery(hql).setParameter(1,id).setParameter(2,orgname).setParameter(3,quantity).setParameter(4 ,size).setParameter( 5,idcardname).setParameter( 6, date ).setParameter(7 , orderstatus).setParameter(8 ,filename). getResultList().size();
		return count > 0 ? true : false;
	}
	
	
	
}
