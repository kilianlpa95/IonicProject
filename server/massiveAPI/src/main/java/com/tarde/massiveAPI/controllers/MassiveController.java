package com.tarde.massiveAPI.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.tarde.massiveAPI.models.MillUser;
import com.tarde.massiveAPI.services.IMassiveApp;

@RestController
public class MassiveController {

	@Autowired
	private IMassiveApp millUserService;
	
	@GetMapping("/api/millUsers")
	private List<MillUser> getMillUsers(){

		return millUserService.getAllMillUsers();
		
	}
	
	@GetMapping("/api/millUsers/{id}")
	private MillUser getMillUser(@PathVariable Long id){

		return millUserService.getMillUser(id);
		
	}
	
	@PostMapping("/api/millUser")
	private void addMillUser(MillUser millUser) {
		
		millUserService.addMillUser(millUser);
		
	}

    @PutMapping("/api/millUser/{id}")
	private void updateMillUser(MillUser millUser, @PathVariable Long id) {
		
		millUserService.putMillUser(millUser, id);
		
	}
	
	@DeleteMapping("/api/millUser/{id}")
	private void deleteMillUser(@PathVariable Long id) {
		
		millUserService.deleteMillUser(id);
		
	}

}
