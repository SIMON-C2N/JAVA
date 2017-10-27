package com.c2n.dao;

public interface ILoginDAO {
    boolean userExists(String username, String password);
}
