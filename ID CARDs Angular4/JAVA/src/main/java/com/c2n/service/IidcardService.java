package com.c2n.service;

import java.util.List;

import com.c2n.entity.Idcard;


public interface IidcardService {
	List<Idcard> getAllIdcards();
    Idcard getIdcardById(int idcardId);
    boolean createIdcard(Idcard idcard);
    void updateIdcard(Idcard idcard);
    void deleteIdcard(int idcardId);
}
