package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Student;
import com.example.demo.Repo.Studentrepo;

@RestController
@CrossOrigin(value = "http://localhost:5173")
public class StudentController {

	@Autowired
	private Studentrepo studentrepo;
	@GetMapping("/")
	public List<Student> getAllStudent(){
		return studentrepo.findAll();
	}
	
	@GetMapping("/{id}")
	public Student getStudentById(@PathVariable("id") int id) {
		return studentrepo.findById(id).get();
	}
	
	@PostMapping("/")
	public String addStudent(@RequestBody Student student) {
		studentrepo.save(student);
		return "student added";
	}
	
	@PutMapping("/{id}")
	public String updateStudentByID(@RequestBody Student student,@PathVariable("id") int id) {
		Student st=studentrepo.findById(id).get();
		st.setName(student.getName());
		st.setEmail(student.getEmail());
		st.setAddress(student.getAddress());
		st.setAge(student.getAge());
		st.setContact(student.getContact());
		studentrepo.save(st);
		return "student updated";
		
	}
	
	  // ✅ DELETE Student
    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable("id") int id) {
        studentrepo.deleteById(id);
        return "student deleted";
    }
}
