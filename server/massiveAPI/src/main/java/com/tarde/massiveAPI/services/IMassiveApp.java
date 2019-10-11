package com.tarde.massiveAPI.services;

import java.util.List;

import com.tarde.massiveAPI.models.MillUser;

public interface IMassiveApp {
	
	public List<MillUser> getAllMillUsers();
	public MillUser getMillUser(Long id);
	public void addMillUser(MillUser millUser);
	public void deleteMillUser(Long id);
	public void putMillUser(MillUser millUser, Long id);

}
