package com.example.demo.entity;


import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;

@Entity
public class Task {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
private int id;
private String title;
private String description;
private LocalDate dueDate;
private String status;
private LocalDate createdAt;
private LocalDate updatedAt;

// Auto-set dates when inserting a new row
@PrePersist
public void onCreate() {
    createdAt = LocalDate.now();
    updatedAt = LocalDate.now();
}

// Auto-update updatedAt on update
@PreUpdate
public void onUpdate() {
    updatedAt = LocalDate.now();
}



public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getTitle() {
	return title;
}
public void setTitle(String title) {
	this.title = title;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public LocalDate getDueDate() {
	return dueDate;
}
public void setDueDate(LocalDate dueDate) {
	this.dueDate = dueDate;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
public LocalDate getCreatedAt() {
	return createdAt;
}
public void setCreatedAt(LocalDate createdAt) {
	this.createdAt = createdAt;
}
public LocalDate getUpdatedAt() {
	return updatedAt;
}
public void setUpdatedAt(LocalDate updatedAt) {
	this.updatedAt = updatedAt;
}


public Task(int id, String title, String description, LocalDate dueDate, String status, LocalDate createdAt,
		LocalDate updatedAt) {
	super();
	this.id = id;
	this.title = title;
	this.description = description;
	this.dueDate = dueDate;
	this.status = status;
	this.createdAt = createdAt;
	this.updatedAt = updatedAt;
}

public Task() {
	super();
	// TODO Auto-generated constructor stub
}


@Override
public String toString() {
	return "Task [id=" + id + ", title=" + title + ", description=" + description + ", dueDate=" + dueDate + ", status="
			+ status + ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + "]";
}


}
