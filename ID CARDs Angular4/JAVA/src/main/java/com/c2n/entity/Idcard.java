package com.c2n.entity;


import java.util.Date;

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
	@Column(name="orgname")	
	private String orgname;  
	
	@Column(name="quantity")	
	private String quantity ; 

	@Column(name="size")	
	private String size; 
	
	@Column(name="idcardname")	
	private String idcardname; 
	
	@Column(name="price")	
	private String  price; 
	@Column(name="date")	
	private Date date; 
	@Column(name="orderstatus")	
	private String orderstatus; 
	@Column(name="filename")	
	private String filename ;
	
 private MultipartFile [] file;
 
	
	
	public MultipartFile[] getFile() {
	return file;
}
public void setFile(MultipartFile[] file) {
	this.file = file;
}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getOrgname() {
		return orgname;
	}
	public void setOrgname(String orgname) {
		this.orgname = orgname;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public String getIdcardname() {
		return idcardname;
	}
	public void setIdcardname(String idcardname) {
		this.idcardname = idcardname;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	
	public Idcard(int id, String orgname, String quantity, String size, String idcardname, String price, Date date,
			String orderstatus, String filename) {
		super();
		this.id = id;
		this.orgname = orgname;
		this.quantity = quantity;
		this.size = size;
		this.idcardname = idcardname;
		this.price = price;
		this.date = date;
		this.orderstatus = orderstatus;
		this.filename = filename;
	}
	
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getOrderstatus() {
		return orderstatus;
	}
	public void setOrderstatus(String orderstatus) {
		this.orderstatus = orderstatus;
	}
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	} 

  
	
}
