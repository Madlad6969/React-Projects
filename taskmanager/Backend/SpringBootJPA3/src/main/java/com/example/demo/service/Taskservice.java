package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Task;
import com.example.demo.repo.Taskrepo;

@Service
public class Taskservice {

	
	@Autowired
	private Taskrepo taskrepo;
	
	
	public List<Task> getAllTasks(){
		return taskrepo.findAll();
	}
	
	
}
