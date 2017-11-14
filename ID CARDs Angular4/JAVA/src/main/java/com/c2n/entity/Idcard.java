package com.c2n.entity;
import java.io.File;
import java.io.Serializable;
import java.util.Iterator;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.web.multipart.MultipartFile;
@Entity
@Table(name="idcarddetails")
public class Idcard {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id")
    private int id; 
	@Column(name="name")	
	private String name;  
	
	@Column(name="address")	
	private String address; 

	@Column(name="bloodgroup")	
	private String  bloodgroup; 

	@Column(name="companyname")	
	private String companyname; 

	@Column(name="dob")	
	private String dob; 

	@Column(name="empid")	
	private String empid; 

	@Column(name="issueddate")	
	private String issueddate ; 

	@Column(name="mobilenumber")	
	private String mobilenumber; 

	@Column(name="size")	
	private String size; 

	@Column(name="userimage")
	private String userimage;

	
	public String getUserimage() {
		return userimage;
	}


	public void setUserimage(String userimage) {
		this.userimage = userimage;
	}


	//tostring
	@Override
	public String toString() {
		return "Idcard [id=" + id + ", name=" + name + ", address=" + address + ", bloodgroup=" + bloodgroup
				+ ", companyname=" + companyname + ", dob=" + dob + ", empid=" + empid + ", issueddate=" + issueddate
				+ ", mobilenumber=" + mobilenumber + ", size=" + size + "]";
	}
	
	
	//setters and getters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	public String getBloodgroup() {
		return bloodgroup;
	}
	public void setBloodgroup(String bloodgroup) {
		this.bloodgroup = bloodgroup;
	}

	public String getCompanyname() {
		return companyname;
	}

	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getEmpid() {
		return empid;
	}

	public void setEmpid(String empid) {
		this.empid = empid;
	}

	public String getIssueddate() {
		return issueddate;
	}

	public void setIssueddate(String issueddate) {
		this.issueddate = issueddate;
	}

	public String getMobilenumber() {
		return mobilenumber;
	}

	public void setMobilenumber(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}
	
}
