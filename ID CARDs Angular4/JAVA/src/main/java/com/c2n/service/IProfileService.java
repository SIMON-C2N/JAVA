package com.c2n.service;

import java.util.List;

import com.c2n.entity.Profile;

public interface IProfileService {
     List<Profile> getAllProfiles();
     Profile getProfileById(int profileId);
     boolean createProfile(Profile profile);
     void updateProfile(Profile profile);
     void deleteProfile(int profileId);
}
