package com.c2n.dao;

import java.util.List;

import com.c2n.entity.Profile;

public interface ILoginDAO {
    boolean userExists(String username, String password, String role);
    List<Profile> getProfileByUserName(String username);
    void updateUser(Profile profile);
}
