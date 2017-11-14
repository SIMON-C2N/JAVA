package com.c2n.entity;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="profile")
public class Profile implements Serializable { 
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="profile_id")
    private int profileId;  
	@Column(name="username")
    private String username;
	@Column(name="password")	
	private String password;                
	@Column(name="cpassword")	            
	private String cpassword;               
	@Column(name="email")	                
	private String email;                   
	                                        
	@Column(name="mobilenumber")	
	private String mobilenumber;
	@Column(name="address")	
	private String address;
	@Column(name="role")
	private String role;
	
	
	public int getProfileId() {
		return profileId;
	}
	public void setProfileId(int profileId) {
		this.profileId = profileId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getCpassword() {
		return cpassword;
	}
	public void setCpassword(String cpassword) {
		this.cpassword = cpassword;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobilenumber() {
		return mobilenumber;
	}
	public void setMobilenumber(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public void setRole(String role) {
		this.role=role;
	}
	public String getRole() {
		return role;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
} 