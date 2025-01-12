package com.app.student_management_system_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.student_management_system_backend.entity.Student;
import com.app.student_management_system_backend.repository.StudentRepo;

@RestController
@CrossOrigin(origins = "*")
public class StudentController {

	@Autowired
	private StudentRepo studentRepo;

	@PostMapping("/student")
	public Student addStudent(@RequestBody Student student) {

		return studentRepo.save(student);
	}

	@GetMapping("/student")
	public List<Student> getAllStudent() {

		return studentRepo.findAll();
	}
	
	@GetMapping("student/{sId}")
	public Student getStudentById(@PathVariable("sId") int sId) {
		return studentRepo.findById(sId).get();
	}
	
	
	@DeleteMapping("/student/{sId}")
	public void deleteStudent(@PathVariable("sId") int sId) {
	    studentRepo.deleteById(sId);
	}
	
	
	

}
