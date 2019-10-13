package com.tarde.massiveAPI.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.tarde.massiveAPI.models.MillUser;
import com.tarde.massiveAPI.services.IMassiveApp;

@RestController
@CrossOrigin(origins = "*")
public class MassiveController {

	@Autowired
	private IMassiveApp millUserService;
	
	//@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping("/api/millUsers")
	private List<MillUser> getMillUsers(){

		return millUserService.getAllMillUsers();
		
	}
	
	//@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping("/api/millUsers/{id}")
	private MillUser getMillUser(@Valid @PathVariable Long id){

		return millUserService.getMillUser(id);
		
	}
	
	//@CrossOrigin(origins = "http://localhost:8100")
	@PostMapping("/api/millUser")
	private void addMillUser(MillUser millUser) {
		
		millUserService.addMillUser(millUser);
		
	}

	//@CrossOrigin(origins = "http://localhost:8100")
    @PutMapping("/api/millUser/{id}")
	private void updateMillUser(MillUser millUser, @PathVariable Long id) {
		
		millUserService.putMillUser(millUser, id);
		
	}
	
	//@CrossOrigin(origins = "http://localhost:8100")
	@DeleteMapping("/api/millUser/{id}")
	private void deleteMillUser(@Valid @PathVariable Long id) {
		
		millUserService.deleteMillUser(id);
		
	}

}
