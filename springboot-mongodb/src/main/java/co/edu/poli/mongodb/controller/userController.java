package co.edu.poli.mongodb.controller;

import java.util.ArrayList;




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.edu.poli.mongodb.model.User;
import co.edu.poli.mongodb.repository.UserRepository;
@RestController 
@RequestMapping("/api/user")
public class userController {

	@Autowired
	UserRepository userRepository;
	
	@GetMapping("/get_all")
	public List<User> getAllBooks() {
		return userRepository.findAll();
	}
	
	@GetMapping("/get/{id}")
	public 	User getByID(@PathVariable String id) {
		return userRepository.findById(id).get();
	}
	
	@PostMapping("/save")
	public User saveUser(@RequestBody User user){
		return userRepository.save(user);
	}
	
	@PostMapping("/save_all")
	public List<User> saveAllBooks(@RequestBody List<User> userlist){
		List<User> newUserlist=new ArrayList<User>();
		for (User b: userlist) {
			User b1 = userRepository.save(b);
			newUserlist.add(b1);
		}
		return newUserlist;
	}
	
	@PutMapping("/update/{id}")
	public User updateUser(@PathVariable String id, @RequestBody User user) {
		
		User upUser = userRepository.findById(id).get();
		upUser.setAddress(user.getAddress());
		upUser.setAge(user.getAge());
		upUser.setFirstname(user.getFirstname());
		upUser.setLastname(user.getLastname());
		upUser.setUserId(user.getUserId());
		
		return userRepository.save(upUser);
	}
	
	@DeleteMapping("/delete/{id}")
	public User deleteUserById(@PathVariable String id) {
		User delUser = userRepository.findById(id).get();
		userRepository.deleteById(id);
		return delUser;
	}
	
	@DeleteMapping("/delete_all")
	public void deleteAll() {
		userRepository.deleteAll();
	}
	


}