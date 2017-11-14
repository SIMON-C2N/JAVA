package com.c2n.dao;

import java.util.List;

import com.c2n.entity.Idcard;
import com.c2n.entity.Profile;

public interface IidcardDAO {

	List<Idcard> getAllIdcardDetails();
    Profile getIdcardId(int idcardId);
    void createIdcard(Idcard idcard);
    void updateIdcard(Idcard idcard);
    void deleteIdcard(int idcardId);
    boolean idcardExists(String address,String bloodgroup,String companyname,String dob,String empid,String issueddate,String mobilenumber,String name,String size, String userimage);
}
