package com.app.student_management_system_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="smsystem")
public class Student {

	@Id
	private int sId;
	
	private String sName;
	
	private String sEmail;
	
	private String sPhone;
	
	
	
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Student(int sId, String sName, String sEmail, String sPhone) {
		super();
		this.sId = sId;
		this.sName = sName;
		this.sEmail = sEmail;
		this.sPhone = sPhone;
	}
	

	public int getsId() {
		return sId;
	}

	public void setsId(int sId) {
		this.sId = sId;
	}

	public String getsName() {
		return sName;
	}

	public void setsName(String sName) {
		this.sName = sName;
	}

	public String getsEmail() {
		return sEmail;
	}

	public void setsEmail(String sEmail) {
		this.sEmail = sEmail;
	}

	public String getsPhone() {
		return sPhone;
	}

	public void setsPhone(String sPhone) {
		this.sPhone = sPhone;
	}

	@Override
	public String toString() {
		return "Student [sId=" + sId + ", sName=" + sName + ", sEmail=" + sEmail + ", sPhone=" + sPhone + "]";
	}

	
	
	
	
	
	
	
}
