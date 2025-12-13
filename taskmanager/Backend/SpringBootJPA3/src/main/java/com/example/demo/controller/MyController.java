package com.example.demo.controller;

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


import com.example.demo.entity.Task;
import com.example.demo.repo.Taskrepo;

@RestController
@CrossOrigin("http://localhost:5173")
public class MyController {

    @Autowired
    private Taskrepo taskrepo;

    @GetMapping("/")
    public List<Task> getTasks() {
        return taskrepo.findAll();
    }
    
    @GetMapping("/{id}")
	public Task getTaskById(@PathVariable("id") int id) {
		return taskrepo.findById(id).get();
	}
    
    
    

    @PostMapping("/")
    public String addTask(@RequestBody Task task) {

        taskrepo.save(task);
        return "Task added successfully";
    }
    
    
    @PutMapping("/{id}")
	public String updateTaskByID(@RequestBody Task task,@PathVariable("id") int id) {
		Task st=taskrepo.findById(id).get();
		st.setTitle(task.getTitle());
		st.setDescription(task.getDescription());
		st.setStatus(task.getStatus());
		st.setDueDate(task.getDueDate());
		st.setCreatedAt(task.getCreatedAt());
		st.setUpdatedAt(task.getUpdatedAt());
		taskrepo.save(st);
		return "task updated";
		
	}
    

	  // ✅ DELETE Student
  @DeleteMapping("/{id}")
  public String deleteTask(@PathVariable("id") int id) {
      taskrepo.deleteById(id);
      return "task deleted";
  }
}

