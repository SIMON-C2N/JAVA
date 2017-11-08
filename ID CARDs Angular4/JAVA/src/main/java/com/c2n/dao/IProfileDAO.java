package com.c2n.dao;
import java.util.List;

import com.c2n.entity.Profile;
public interface IProfileDAO {
    List<Profile> getAllProfiles();
    Profile getProfileById(int profileId);
    void createProfile(Profile profile);
    void updateProfile(Profile profile);
    void deleteProfile(int profileId);
    boolean profileExists(String username, String email,String password,String cpassword,String mobilenumber,String address,String role);
}
 