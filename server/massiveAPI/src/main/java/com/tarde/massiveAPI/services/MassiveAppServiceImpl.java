package com.tarde.massiveAPI.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.tarde.massiveAPI.dao.IMassiveAppDao;
import com.tarde.massiveAPI.models.MillUser;

@Service
public class MassiveAppServiceImpl implements IMassiveApp{

	@Autowired
	private IMassiveAppDao MillUserDao;

	@Override
	public List<MillUser> getAllMillUsers() {

		return (List<MillUser>) MillUserDao.findAll();
		
	}

	@Override
	public MillUser getMillUser(Long id) {

		return MillUserDao.findById(id).get();
		
	}

	@Override
	public void addMillUser(MillUser millUser) {
		
		MillUserDao.save(millUser);
		
	}

	@Override
	public void deleteMillUser(@PathVariable Long id) {
		
		MillUserDao.deleteById(id);
		
	}

	@Override
	public void putMillUser(MillUser millUser, Long id) {

		MillUserDao.findById(id).ifPresent((x)->{
			millUser.setId(id);
			MillUserDao.save(millUser);
		});
		
	}
	
}
