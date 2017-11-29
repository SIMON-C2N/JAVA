package com.c2n.dao;

import java.util.Date;
import java.util.List;

import com.c2n.entity.Idcard;
import com.c2n.entity.Profile;

public interface IidcardDAO {

	List<Idcard> getAllIdcardDetails();
    Profile getIdcardId(int idcardId);
    void createIdcard(Idcard idcard);
    void updateIdcard(Idcard idcard);
    void deleteIdcard(int idcardId);
    boolean idcardExists(int id,String orgname,String quantity,String size,String idcardname,String price,Date date,String orderstatus,String filename);
}
